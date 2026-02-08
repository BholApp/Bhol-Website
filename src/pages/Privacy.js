import React from 'react';

const styles = {
  hero: {
    textAlign: 'center',
    padding: '3rem 2rem',
    backgroundColor: '#F7F5F2',
    borderRadius: '20px',
    margin: '1rem 0 2rem',
    border: '1px solid #E8E5E1',
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: '400',
    fontFamily: "'DM Serif Display', Georgia, serif",
    color: '#1A1A1A',
    marginBottom: '1rem',
    lineHeight: 1.15,
  },
  heroSubtitle: {
    fontSize: '1.15rem',
    color: '#7A7A7A',
    marginBottom: '2rem'
  },
  content: {
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7',
    color: '#4A4A4A'
  },
  section: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
  },
  list: {
    marginLeft: '2rem',
    marginBottom: '1rem'
  },
  listItem: {
    marginBottom: '0.5rem'
  },
  contact: {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '8px',
    marginTop: '2rem'
  }
};

function Privacy() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Privacy Policy</h1>
        <p style={styles.heroSubtitle}>How we protect and respect your privacy</p>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Last Updated: September 5, 2025</h2>
          <p>At Bhol, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our language learning platform.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Name and email address when you create an account</li>
            <li style={styles.listItem}>Profile information and language learning preferences</li>
            <li style={styles.listItem}>Progress data and learning statistics</li>
          </ul>

          <h3>Usage Information</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>How you interact with our platform</li>
            <li style={styles.listItem}>Time spent on different activities</li>
            <li style={styles.listItem}>Device and browser information</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>How We Use Your Information</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Provide and improve our language learning services</li>
            <li style={styles.listItem}>Personalize your learning experience</li>
            <li style={styles.listItem}>Track your progress and provide feedback</li>
            <li style={styles.listItem}>Send important updates and notifications</li>
            <li style={styles.listItem}>Ensure platform security and prevent fraud</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Encryption of data in transit and at rest</li>
            <li style={styles.listItem}>Regular security audits and updates</li>
            <li style={styles.listItem}>Limited access to personal data on a need-to-know basis</li>
            <li style={styles.listItem}>Secure data centers with multiple backups</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Data Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>With your explicit consent</li>
            <li style={styles.listItem}>To comply with legal obligations</li>
            <li style={styles.listItem}>To protect our rights and prevent fraud</li>
            <li style={styles.listItem}>With trusted service providers who help us operate our platform</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Your Rights</h2>
          <p>You have the right to:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Access and review your personal information</li>
            <li style={styles.listItem}>Correct inaccurate data</li>
            <li style={styles.listItem}>Request deletion of your account and data</li>
            <li style={styles.listItem}>Opt out of marketing communications</li>
            <li style={styles.listItem}>Data portability</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to enhance your experience:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Essential cookies for platform functionality</li>
            <li style={styles.listItem}>Analytics cookies to understand usage patterns</li>
            <li style={styles.listItem}>Preference cookies to remember your settings</li>
          </ul>
          <p>You can control cookie settings through your browser preferences.</p>
        </div>

        <div style={styles.contact}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Email: privacy@bhol.app</li>
            <li style={styles.listItem}>Address: [Company Address]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Privacy;