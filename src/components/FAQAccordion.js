import React, { useState } from 'react';
import { colors } from '../styles/theme';

/**
 * Reusable FAQ Accordion component
 * @param {Array} faqs - Array of { q: string, a: string } objects
 * @param {string} title - Optional section title
 */
export function FAQAccordion({ faqs, title }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ maxWidth: '800px', margin: '4rem auto' }}>
      {title && (
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: colors.text,
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          {title}
        </h2>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: colors.white,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              border: `1px solid ${colors.border}`
            }}
          >
            <button
              onClick={() => toggleFaq(index)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                backgroundColor: openIndex === index ? colors.primaryLight : colors.backgroundAlt,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: colors.text,
                textAlign: 'left',
                transition: 'background-color 0.2s'
              }}
            >
              {faq.q}
              <span style={{
                fontSize: '1.5rem',
                color: colors.primary,
                transform: openIndex === index ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.2s'
              }}>+</span>
            </button>
            {openIndex === index && (
              <div style={{
                padding: '1.25rem 1.5rem',
                color: colors.textLight,
                lineHeight: 1.7,
                fontSize: '1.05rem',
                borderTop: `1px solid ${colors.border}`
              }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQAccordion;
