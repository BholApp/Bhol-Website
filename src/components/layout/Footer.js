import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../styles/theme';

const APP_STORE_URL = 'https://apps.apple.com/us/app/bhol/id6755904064';

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Bhol</h3>
          <p>Learn Gujarati the way your family speaks. Connect with your heritage through real conversations.</p>
          <div style={styles.socialLinks}>
            <a href="https://twitter.com/bholapp_" style={styles.socialIcon} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/bholapp" style={styles.socialIcon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Product</h4>
          <a href={APP_STORE_URL} style={styles.footerLink} target="_blank" rel="noopener noreferrer">Download App</a>
          <Link to="/support" style={styles.footerLink}>Support</Link>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Company</h4>
          <Link to="/about" style={styles.footerLink}>About</Link>
          <Link to="/careers" style={styles.footerLink}>Careers</Link>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Legal</h4>
          <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms" style={styles.footerLink}>Terms of Service</Link>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>&copy; 2025 Bhol. Finally talk back to Nani.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Made with love for heritage speakers everywhere
        </p>
      </div>
    </footer>
  );
}

export default Footer;
