import React, { useState } from 'react';
import { styles, colors } from '../styles/theme';
import { FAQAccordion } from '../components/FAQAccordion';
import { HoverButton } from '../components/HoverCard';
import { useTurnstile } from '../hooks';
import { supportFaqs } from '../data';
import { config, submitFeedback, validateSupportForm } from '../services';

export function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const { token: turnstileToken, ref: turnstileRef, reset: resetTurnstile } = useTurnstile(
    config.turnstileSiteKey
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validation = validateSupportForm(formData);
    if (!validation.isValid) {
      setStatus('error');
      setStatusMessage(validation.error);
      return;
    }

    // Check API configuration
    if (!config.apiUrl) {
      setStatus('error');
      setStatusMessage('Support form is not configured yet. Please email us at hello@bhol.app');
      return;
    }

    // Require Turnstile verification if configured
    if (config.turnstileSiteKey && !turnstileToken) {
      setStatus('error');
      setStatusMessage('Please complete the verification challenge.');
      return;
    }

    try {
      setStatus('loading');
      setStatusMessage('');

      await submitFeedback({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        turnstileToken
      });

      setStatus('success');
      setStatusMessage("Message sent! We'll get back to you within 24-48 hours.");
      setFormData({ name: '', email: '', message: '' });
      resetTurnstile();
    } catch (error) {
      setStatus('error');
      setStatusMessage('Unable to send message. Please email us at hello@bhol.app');
      resetTurnstile();
    }
  };

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Support</h1>
        <p style={styles.heroSubtitle}>We're here to help you on your language learning journey</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* FAQ Section */}
        <FAQAccordion faqs={supportFaqs} title="Frequently Asked Questions" />

        {/* Contact Form Section */}
        <section style={{
          backgroundColor: colors.primaryLight,
          borderRadius: '16px',
          padding: '3rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: colors.text, marginBottom: '0.5rem', textAlign: 'center' }}>
            Contact Us
          </h2>
          <p style={{ color: colors.textLight, textAlign: 'center', marginBottom: '2rem', lineHeight: 1.7 }}>
            Can't find your answer above? Send us a message and we'll get back to you.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange('name')}
              style={styles.input}
              disabled={status === 'loading'}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange('email')}
              style={styles.input}
              disabled={status === 'loading'}
              required
            />
            <textarea
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleInputChange('message')}
              style={{ ...styles.input, minHeight: '150px', resize: 'vertical' }}
              disabled={status === 'loading'}
              required
            />

            {config.turnstileSiteKey && (
              <div
                ref={turnstileRef}
                style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}
              />
            )}

            <HoverButton
              type="submit"
              style={{ width: '100%' }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </HoverButton>
          </form>

          {status === 'success' && (
            <div style={{ ...styles.successMessage, display: 'block', textAlign: 'center', marginTop: '1.5rem' }}>
              {statusMessage}
            </div>
          )}
          {status === 'error' && (
            <div style={{ ...styles.errorMessage, display: 'block', textAlign: 'center', marginTop: '1.5rem' }}>
              {statusMessage}
            </div>
          )}
        </section>

        {/* Direct Contact */}
        <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: colors.textMuted, fontSize: '1rem' }}>
            Or email us directly at{' '}
            <a href="mailto:hello@bhol.app" style={{ color: colors.primary, fontWeight: '600' }}>
              hello@bhol.app
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default SupportPage;
