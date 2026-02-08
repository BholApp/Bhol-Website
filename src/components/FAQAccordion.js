import React, { useState } from 'react';
import { colors, fonts } from '../styles/theme';

export function FAQAccordion({ faqs, title }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ maxWidth: '700px', margin: '2.5rem auto' }}>
      {title && (
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '400',
          fontFamily: fonts.heading,
          color: colors.text,
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          {title}
        </h2>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: colors.white,
              borderRadius: '12px',
              overflow: 'hidden',
              border: `1px solid ${openIndex === index ? colors.borderDark : colors.border}`,
              transition: 'border-color 0.2s',
            }}
          >
            <button
              onClick={() => toggleFaq(index)}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.95rem',
                fontWeight: '500',
                fontFamily: 'inherit',
                color: colors.text,
                textAlign: 'left',
                transition: 'background-color 0.2s',
                gap: '1rem',
              }}
            >
              {faq.q}
              <span style={{
                fontSize: '1.2rem',
                color: colors.textMuted,
                transform: openIndex === index ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.2s',
                flexShrink: 0,
              }}>+</span>
            </button>
            {openIndex === index && (
              <div style={{
                padding: '0 1.25rem 1rem',
                color: colors.textMuted,
                lineHeight: 1.7,
                fontSize: '0.95rem',
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
