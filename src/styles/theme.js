/**
 * Theme and styles configuration
 */

export const colors = {
  primary: '#FF522B',
  primaryGradient: 'linear-gradient(90deg, rgba(255, 167, 59, 1) 0%, rgba(255, 91, 69, 1) 66%, rgba(255, 160, 8, 1) 100%)',
  primaryLight: '#FFF5F2',
  text: '#222',
  textLight: '#555',
  textMuted: '#666',
  white: '#fff',
  background: '#fff',
  backgroundAlt: '#f8f9fa',
  border: '#eee',
  borderDark: '#ddd',
  footer: '#333',
  success: '#4CAF50',
  error: '#f44336',
};

export const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    backgroundColor: colors.white,
    lineHeight: 1.7
  },
  header: {
    background: colors.primaryGradient,
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1.5rem',
    position: 'relative'
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    zIndex: 1001
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    zIndex: 1001,
    gap: '4px'
  },
  hamburgerLine: {
    width: '25px',
    height: '3px',
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
    borderRadius: '2px'
  },
  navLinks: {
    display: 'flex',
    gap: '2.5rem',
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
    width: '70%',
    maxWidth: '300px',
    background: 'linear-gradient(180deg, rgba(255, 167, 59, 1) 0%, rgba(255, 91, 69, 1) 66%, rgba(255, 160, 8, 1) 100%)',
    padding: '5rem 2rem 2rem',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    boxShadow: '-2px 0 10px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
    zIndex: 1000
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.05rem',
    transition: 'opacity 0.2s',
    fontWeight: '500',
    cursor: 'pointer'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
    transition: 'opacity 0.3s ease'
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1.5rem'
  },
  hero: {
    textAlign: 'center',
    padding: '5rem 2rem',
    backgroundColor: colors.primaryLight,
    borderRadius: '16px',
    margin: '3rem 0'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: colors.text,
    marginBottom: '1.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em'
  },
  heroSubtitle: {
    fontSize: '1.35rem',
    color: colors.textLight,
    marginBottom: '2.5rem',
    lineHeight: 1.6,
    maxWidth: '700px',
    margin: '0 auto 2.5rem'
  },
  button: {
    background: colors.primaryGradient,
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    fontSize: '1.05rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 12px rgba(255, 82, 43, 0.3)'
  },
  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 82, 43, 0.4)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
    margin: '4rem 0'
  },
  card: {
    padding: '2.5rem',
    backgroundColor: colors.white,
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
  },
  footer: {
    backgroundColor: colors.footer,
    color: 'white',
    padding: '3rem 1rem 2rem',
    marginTop: '4rem'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  footerSection: {
    textAlign: 'left'
  },
  footerTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: colors.primary
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'opacity 0.2s'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  socialIcon: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5rem',
    transition: 'opacity 0.2s'
  },
  footerBottom: {
    borderTop: '1px solid #555',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#ccc'
  },
  waitlist: {
    backgroundColor: colors.primary,
    color: 'white',
    padding: '4rem 2rem',
    borderRadius: '16px',
    textAlign: 'center',
    margin: '4rem 0'
  },
  waitlistForm: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
    flexWrap: 'wrap'
  },
  emailInput: {
    padding: '14px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    minWidth: '300px',
    maxWidth: '400px',
    fontFamily: 'inherit'
  },
  submitButton: {
    backgroundColor: colors.footer,
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
  },
  submitButtonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
  },
  successMessage: {
    backgroundColor: colors.success,
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    marginTop: '1rem',
    display: 'inline-block',
    fontWeight: '500'
  },
  errorMessage: {
    backgroundColor: colors.error,
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    marginTop: '1rem',
    display: 'inline-block',
    fontWeight: '500'
  },
  // Form input style
  input: {
    padding: '14px 16px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: `1px solid ${colors.borderDark}`,
    fontFamily: 'inherit',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s'
  }
};

export default styles;
