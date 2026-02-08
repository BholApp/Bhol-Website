import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles, colors } from '../../styles/theme';
import { useIsMobile } from '../../hooks';

const APP_STORE_URL = 'https://apps.apple.com/us/app/bhol/id6755904064';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(768);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  React.useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  const isActive = (path) => location.pathname === path;

  const navLinkStyle = (path) => ({
    ...styles.navLink,
    color: isActive(path) ? colors.text : colors.textMuted,
    fontWeight: isActive(path) ? '600' : '500',
  });

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={{ ...styles.logo, display: 'flex', alignItems: 'center', gap: '0.6rem' }} onClick={closeMobileMenu}>
          <img
            src="/logo.png"
            alt="Bhol"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px'
            }}
          />
          <span>Bhol</span>
        </Link>

        {/* Hamburger Menu */}
        <div
          style={{
            ...styles.hamburger,
            display: isMobile ? 'flex' : 'none'
          }}
          onClick={toggleMobileMenu}
        >
          <div style={{
            ...styles.hamburgerLine,
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <div style={{
            ...styles.hamburgerLine,
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <div style={{
            ...styles.hamburgerLine,
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }} />
        </div>

        {/* Desktop & Mobile Nav */}
        <ul style={isMobile ? (mobileMenuOpen ? styles.navLinksOpen : { display: 'none' }) : styles.navLinks}>
          <li>
            <Link
              to="/"
              style={navLinkStyle('/')}
              onClick={closeMobileMenu}
              onMouseEnter={(e) => e.target.style.color = colors.text}
              onMouseLeave={(e) => { if (!isActive('/')) e.target.style.color = colors.textMuted; }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={navLinkStyle('/about')}
              onClick={closeMobileMenu}
              onMouseEnter={(e) => e.target.style.color = colors.text}
              onMouseLeave={(e) => { if (!isActive('/about')) e.target.style.color = colors.textMuted; }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              style={navLinkStyle('/careers')}
              onClick={closeMobileMenu}
              onMouseEnter={(e) => e.target.style.color = colors.text}
              onMouseLeave={(e) => { if (!isActive('/careers')) e.target.style.color = colors.textMuted; }}
            >
              Careers
            </Link>
          </li>
          <li>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: colors.text,
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'background 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#333'}
              onMouseLeave={(e) => e.currentTarget.style.background = colors.text}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {mobileMenuOpen && isMobile && (
        <div style={styles.overlay} onClick={closeMobileMenu} />
      )}
    </header>
  );
}

export default Header;
