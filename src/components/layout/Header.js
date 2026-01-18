import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../styles/theme';
import { useIsMobile } from '../../hooks';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(768);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close menu when switching to desktop
  React.useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo} onClick={closeMobileMenu}>Bhol</Link>

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
            transform: mobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }} />
          <div style={{
            ...styles.hamburgerLine,
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <div style={{
            ...styles.hamburgerLine,
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }} />
        </div>

        {/* Desktop & Mobile Nav */}
        <ul style={isMobile ? (mobileMenuOpen ? styles.navLinksOpen : { display: 'none' }) : styles.navLinks}>
          <li>
            <Link
              to="/"
              style={styles.navLink}
              onClick={closeMobileMenu}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={styles.navLink}
              onClick={closeMobileMenu}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              About
            </Link>
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
