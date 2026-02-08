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

function Terms() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Terms of Service</h1>
        <p style={styles.heroSubtitle}>Please read these terms carefully before using our service</p>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Last Updated: September 5, 2025</h2>
          <p>These Terms of Service ("Terms") govern your use of Bhol's language learning platform and services. By accessing or using our service, you agree to be bound by these Terms.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acceptance of Terms</h2>
          <p>By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these terms, please do not use our service.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Description of Service</h2>
          <p>Bhol provides an online platform for learning Indic languages including Hindi, Bengali, Tamil, and others. Our services include:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Interactive language lessons and exercises</li>
            <li style={styles.listItem}>Vocabulary flashcards with spaced repetition</li>
            <li style={styles.listItem}>Progress tracking and analytics</li>
            <li style={styles.listItem}>Cultural content and language resources</li>
            <li style={styles.listItem}>Community features and discussion forums</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>User Accounts</h2>
          <h3>Account Creation</h3>
          <p>To use certain features of our service, you must create an account. You agree to:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Provide accurate and complete information</li>
            <li style={styles.listItem}>Maintain the security of your password</li>
            <li style={styles.listItem}>Notify us immediately of any unauthorized use</li>
            <li style={styles.listItem}>Be at least 13 years old to create an account</li>
          </ul>

          <h3>Account Responsibilities</h3>
          <p>You are responsible for all activities that occur under your account. You may not share your account credentials with others.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acceptable Use</h2>
          <p>You agree to use our service only for lawful purposes and in accordance with these Terms. You may not:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Violate any applicable laws or regulations</li>
            <li style={styles.listItem}>Infringe on intellectual property rights</li>
            <li style={styles.listItem}>Harass, abuse, or harm other users</li>
            <li style={styles.listItem}>Upload malicious code or viruses</li>
            <li style={styles.listItem}>Attempt to gain unauthorized access to our systems</li>
            <li style={styles.listItem}>Use automated tools to access our service</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Content and Intellectual Property</h2>
          <h3>User Content</h3>
          <p>You retain ownership of content you create or upload. By posting content, you grant us a license to use, display, and distribute it as necessary to provide our services.</p>

          <h3>Our Content</h3>
          <p>All content provided by Bhol, including lessons, text, graphics, and software, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Privacy and Data</h2>
          <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Payment Terms</h2>
          <p>Some features of our service may require payment. By purchasing a subscription or making a payment:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>You agree to pay all applicable fees</li>
            <li style={styles.listItem}>Payments are non-refundable except as required by law</li>
            <li style={styles.listItem}>We may change pricing with 30 days notice</li>
            <li style={styles.listItem}>You authorize us to charge your payment method</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Termination</h2>
          <p>We may terminate or suspend your account at our discretion if you violate these Terms. Upon termination:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Your right to use the service ceases immediately</li>
            <li style={styles.listItem}>We may delete your account and data</li>
            <li style={styles.listItem}>Outstanding payments remain due</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Disclaimers and Limitations</h2>
          <p>Our service is provided "as is" without warranties of any kind. We do not guarantee:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Uninterrupted or error-free service</li>
            <li style={styles.listItem}>Accuracy of content or learning outcomes</li>
            <li style={styles.listItem}>Compatibility with all devices or browsers</li>
          </ul>
          <p>Our liability is limited to the amount you paid for the service in the 12 months preceding the claim.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Governing Law</h2>
          <p>These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles. Any disputes will be resolved in the courts of [Jurisdiction].</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Changes to Terms</h2>
          <p>We may update these Terms from time to time. We will notify you of material changes by email or through our service. Your continued use after changes take effect constitutes acceptance of the new Terms.</p>
        </div>

        <div style={styles.contact}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Email: legal@bhol.app</li>
            <li style={styles.listItem}>Address: [Company Address]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Terms;