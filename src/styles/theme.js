/**
 * Theme and styles configuration
 * Warm, refined aesthetic with tight spacing
 */

export const colors = {
  primary: '#FF522B',
  primaryGradient: 'linear-gradient(135deg, #FF6B3D 0%, #FF3D2E 100%)',
  primaryLight: '#FFF8F5',
  primaryMuted: 'rgba(255, 82, 43, 0.08)',
  text: '#1A1A1A',
  textLight: '#4A4A4A',
  textMuted: '#7A7A7A',
  white: '#fff',
  cream: '#F7F5F2',
  background: '#FAFAF8',
  backgroundAlt: '#F2F0ED',
  border: '#E8E5E1',
  borderDark: '#D4D0CC',
  footer: '#1A1A1A',
  success: '#2D8B4E',
  error: '#D93025',
};

export const fonts = {
  heading: "'DM Serif Display', Georgia, 'Times New Roman', serif",
  body: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

export const styles = {
  container: {
    fontFamily: fonts.body,
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    backgroundColor: colors.background,
    lineHeight: 1.6,
    color: colors.text,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  header: {
    background: colors.white,
    color: colors.text,
    padding: '0.6rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: `1px solid ${colors.border}`,
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    marginTop: 0
  },
  nav: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1.5rem',
    position: 'relative'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: fonts.heading,
    textDecoration: 'none',
    color: colors.text,
    zIndex: 1001,
    letterSpacing: '-0.01em',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    zIndex: 1001,
    gap: '5px'
  },
  hamburgerLine: {
    width: '22px',
    height: '2px',
    backgroundColor: colors.text,
    transition: 'all 0.3s ease',
    borderRadius: '1px'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center'
  },
  navLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: '75%',
    maxWidth: '320px',
    background: colors.white,
    padding: '5rem 2rem 2rem',
    gap: '1.5rem',
    listStyle: 'none',
    margin: 0,
    boxShadow: '-8px 0 30px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease',
    zIndex: 1000
  },
  navLink: {
    color: colors.textLight,
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s',
    fontWeight: '500',
    cursor: 'pointer',
    letterSpacing: '0.01em',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 999,
    transition: 'opacity 0.3s ease'
  },
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1.5rem'
  },
  hero: {
    textAlign: 'center',
    padding: '3rem 2rem',
    backgroundColor: colors.cream,
    borderRadius: '20px',
    margin: '1rem 0 2rem',
    border: `1px solid ${colors.border}`,
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: '400',
    fontFamily: fonts.heading,
    color: colors.text,
    marginBottom: '1rem',
    lineHeight: 1.15,
    letterSpacing: '-0.02em'
  },
  heroSubtitle: {
    fontSize: '1.15rem',
    color: colors.textMuted,
    marginBottom: '2rem',
    lineHeight: 1.6,
    maxWidth: '520px',
    margin: '0 auto 2rem'
  },
  button: {
    background: colors.text,
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    fontSize: '0.95rem',
    fontWeight: '600',
    fontFamily: fonts.body,
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
    letterSpacing: '0.01em',
  },
  buttonHover: {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.18)',
    background: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.25rem',
    margin: '2rem 0'
  },
  card: {
    padding: '2rem',
    backgroundColor: colors.white,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    textAlign: 'center',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
    cursor: 'pointer'
  },
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
    borderColor: colors.borderDark,
  },
  footer: {
    backgroundColor: colors.footer,
    color: 'white',
    padding: '3rem 1.5rem 2rem',
    marginTop: '3rem'
  },
  footerContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  footerSection: {
    textAlign: 'left'
  },
  footerTitle: {
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  footerLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.6rem',
    transition: 'color 0.2s',
    fontSize: '0.95rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '1rem'
  },
  socialIcon: {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '1.25rem',
    transition: 'color 0.2s'
  },
  footerBottom: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '1.5rem',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.85rem',
  },
  waitlist: {
    backgroundColor: colors.primary,
    color: 'white',
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    margin: '3rem 0'
  },
  waitlistForm: {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'center',
    marginTop: '1.5rem',
    flexWrap: 'wrap'
  },
  emailInput: {
    padding: '12px 18px',
    fontSize: '0.95rem',
    borderRadius: '10px',
    border: 'none',
    minWidth: '280px',
    maxWidth: '360px',
    fontFamily: fonts.body,
  },
  submitButton: {
    backgroundColor: colors.footer,
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    fontSize: '0.95rem',
    fontWeight: '600',
    fontFamily: fonts.body,
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
  },
  submitButtonHover: {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
  },
  successMessage: {
    backgroundColor: colors.success,
    color: 'white',
    padding: '0.85rem 1.5rem',
    borderRadius: '10px',
    marginTop: '1rem',
    display: 'inline-block',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  errorMessage: {
    backgroundColor: colors.error,
    color: 'white',
    padding: '0.85rem 1.5rem',
    borderRadius: '10px',
    marginTop: '1rem',
    display: 'inline-block',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  input: {
    padding: '12px 16px',
    fontSize: '0.95rem',
    borderRadius: '10px',
    border: `1px solid ${colors.border}`,
    fontFamily: fonts.body,
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    backgroundColor: colors.white,
    outline: 'none',
  }
};

export default styles;
