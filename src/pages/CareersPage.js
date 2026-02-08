import React from 'react';
import { styles, colors, fonts } from '../styles/theme';
import { HoverCard } from '../components/HoverCard';
import { jobRoles } from '../data';

export function CareersPage() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Join Our Team</h1>
        <p style={styles.heroSubtitle}>Help us build the future of Indic language learning</p>
      </div>

      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.05rem', color: colors.textMuted, textAlign: 'center', marginBottom: '2rem', lineHeight: 1.7 }}>
          We're a small, passionate team on a mission to make Indic languages accessible to everyone.
          If you're excited about language, culture, and building something meaningful, we'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
          {jobRoles.map((role, index) => (
            <HoverCard key={index} style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.15rem', color: colors.text, marginBottom: '0.3rem', fontWeight: '600' }}>
                {role.title}
              </h3>
              <p style={{ color: colors.primary, fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                {role.type}
              </p>
              <p style={{ color: colors.textMuted, lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                {role.description}
              </p>
            </HoverCard>
          ))}
        </div>

        <div style={{
          backgroundColor: colors.cream,
          borderRadius: '20px',
          border: `1px solid ${colors.border}`,
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.6rem',
            fontFamily: fonts.heading,
            fontWeight: '400',
            color: colors.text,
            marginBottom: '0.75rem',
          }}>
            Interested?
          </h2>
          <p style={{ fontSize: '1rem', color: colors.textMuted, marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Reach out to us on X and tell us about yourself
          </p>
          <a
            href="https://twitter.com/bholapp_"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: colors.text,
              color: 'white',
              padding: '12px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Message us on X
          </a>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
