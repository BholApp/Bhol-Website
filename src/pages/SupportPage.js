import React, { useState } from 'react';
import { styles, colors, fonts } from '../styles/theme';
import { FAQAccordion } from '../components/FAQAccordion';
import { HoverButton } from '../components/HoverCard';
import { useTurnstile } from '../hooks';
import { supportFaqs } from '../data';
import { config, submitFeedback, validateSupportForm } from '../services';

export function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const { token: turnstileToken, ref: turnstileRef, reset: resetTurnstile } = useTurnstile(
    config.turnstileSiteKey
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateSupportForm(formData);
    if (!validation.isValid) {
      setStatus('error');
      setStatusMessage(validation.error);
      return;
    }

    if (!config.apiUrl) {
      setStatus('error');
      setStatusMessage('Support form is not configured yet. Please email us at hello@bhol.app');
      return;
    }

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

  const inputStyle = {
    ...styles.input,
    ':focus': {
      borderColor: colors.primary,
    }
  };

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Support</h1>
        <p style={styles.heroSubtitle}>We're here to help you on your language learning journey</p>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <FAQAccordion faqs={supportFaqs} title="Frequently Asked Questions" />

        <section style={{
          backgroundColor: colors.white,
          borderRadius: '20px',
          border: `1px solid ${colors.border}`,
          padding: '2.5rem',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '1.6rem',
            fontWeight: '400',
            fontFamily: fonts.heading,
            color: colors.text,
            marginBottom: '0.4rem',
            textAlign: 'center',
          }}>
            Contact Us
          </h2>
          <p style={{ color: colors.textMuted, textAlign: 'center', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
            Can't find your answer above? Send us a message.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '460px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange('name')}
              style={inputStyle}
              disabled={status === 'loading'}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange('email')}
              style={inputStyle}
              disabled={status === 'loading'}
              required
            />
            <textarea
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleInputChange('message')}
              style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
              disabled={status === 'loading'}
              required
            />

            {config.turnstileSiteKey && (
              <div
                ref={turnstileRef}
                style={{ display: 'flex', justifyContent: 'center', margin: '0.25rem 0' }}
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
            <div style={{ ...styles.successMessage, display: 'block', textAlign: 'center', marginTop: '1rem' }}>
              {statusMessage}
            </div>
          )}
          {status === 'error' && (
            <div style={{ ...styles.errorMessage, display: 'block', textAlign: 'center', marginTop: '1rem' }}>
              {statusMessage}
            </div>
          )}
        </section>

        <section style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{ color: colors.textMuted, fontSize: '0.9rem' }}>
            Or email us directly at{' '}
            <a href="mailto:hello@bhol.app" style={{ color: colors.primary, fontWeight: '600', textDecoration: 'none' }}>
              hello@bhol.app
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default SupportPage;
