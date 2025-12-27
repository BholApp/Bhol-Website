import React, { useState } from 'react';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function WaitlistForm({ scriptUrl, styles }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');
  const [buttonHover, setButtonHover] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailPattern.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!scriptUrl) {
      setStatus('error');
      setMessage('Waitlist form is not configured yet.');
      return;
    }

    try {
      setStatus('loading');
      setMessage('');

      // Use URL-encoded form data to avoid CORS preflight with Google Apps Script
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('source', 'homepage');
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.status !== 'success') {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setMessage('You are on the list! We will reach out soon.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Unable to join the waitlist right now.');
    }
  };

  return (
    <div>
      <p style={{ maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
        Join thousands of learners getting early access to Bhol. We’ll send a note
        as soon as new language modules unlock.
      </p>

      <form onSubmit={handleSubmit} style={styles.waitlistForm}>
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={styles.emailInput}
          aria-label="Email address"
          disabled={status === 'loading'}
          required
        />
        <button
          type="submit"
          style={{
            ...styles.submitButton,
            ...(buttonHover ? styles.submitButtonHover : {})
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </form>

      {status === 'success' && (
        <div role="status" style={styles.successMessage}>
          {message}
        </div>
      )}

      {status === 'error' && (
        <div role="alert" style={styles.errorMessage}>
          {message}
        </div>
      )}
    </div>
  );
}

export default WaitlistForm;
