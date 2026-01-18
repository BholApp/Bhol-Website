import React from 'react';
import { styles, colors } from '../styles/theme';
import { HoverCard } from '../components/HoverCard';
import { jobRoles } from '../data';

export function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Join Our Team</h1>
        <p style={styles.heroSubtitle}>Help us build the future of Indic language learning</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', color: colors.textLight, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.8 }}>
          We're a small, passionate team on a mission to make Indic languages accessible to everyone.
          If you're excited about language, culture, and building something meaningful, we'd love to hear from you.
        </p>

        {/* Job Listings */}
        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
          {jobRoles.map((role, index) => (
            <HoverCard key={index} style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', color: colors.text, marginBottom: '0.5rem', fontWeight: '700' }}>
                {role.title}
              </h3>
              <p style={{ color: colors.primary, fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>
                {role.type}
              </p>
              <p style={{ color: colors.textLight, lineHeight: 1.7, margin: 0 }}>
                {role.description}
              </p>
            </HoverCard>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{
          backgroundColor: colors.primaryLight,
          borderRadius: '16px',
          padding: '3rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.8rem', color: colors.text, marginBottom: '1rem', fontWeight: '700' }}>
            Interested?
          </h2>
          <p style={{ fontSize: '1.1rem', color: colors.textLight, marginBottom: '2rem', lineHeight: 1.7 }}>
            Reach out to us on X and tell us about yourself
          </p>
          <a
            href="https://twitter.com/bholapp_"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#000',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.05rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
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
