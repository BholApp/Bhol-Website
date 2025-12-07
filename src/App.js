import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Inline styles
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    backgroundColor: '#fff',
    lineHeight: 1.7
  },
  header: {
    background: 'linear-gradient(90deg, rgba(255, 167, 59, 1) 0%, rgba(255, 91, 69, 1) 66%, rgba(255, 160, 8, 1) 100%)',
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
    backgroundColor: '#FFF5F2',
    borderRadius: '16px',
    margin: '3rem 0'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#222',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em'
  },
  heroSubtitle: {
    fontSize: '1.35rem',
    color: '#555',
    marginBottom: '2.5rem',
    lineHeight: 1.6,
    maxWidth: '700px',
    margin: '0 auto 2.5rem'
  },
  button: {
    background: 'linear-gradient(90deg, rgba(255, 167, 59, 1) 0%, rgba(255, 91, 69, 1) 66%, rgba(255, 160, 8, 1) 100%)',
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
    backgroundColor: '#FFF',
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
    backgroundColor: '#333',
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
    color: '#FF522B'
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
  }
};

// Components
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Media query handling
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <ul style={isMobile ? (mobileMenuOpen ? styles.navLinksOpen : {display: 'none'}) : styles.navLinks}>
          <li><Link to="/" style={styles.navLink} onClick={closeMobileMenu} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink} onClick={closeMobileMenu} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>About</Link></li>
          <li><Link to="/blog" style={styles.navLink} onClick={closeMobileMenu} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Blog</Link></li>
          <li><Link to="/faq" style={styles.navLink} onClick={closeMobileMenu} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>FAQ</Link></li>
          <li><Link to="/careers" style={styles.navLink} onClick={closeMobileMenu} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Careers</Link></li>
          <li><Link to="/privacy" style={styles.navLink} onClick={closeMobileMenu} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Privacy</Link></li>
          <li><Link to="/terms" style={styles.navLink} onClick={closeMobileMenu} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Terms</Link></li>
        </ul>
      </nav>

      {/* Overlay */}
      {mobileMenuOpen && isMobile && (
        <div style={styles.overlay} onClick={closeMobileMenu} />
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Bhol</h3>
          <p>Learn Indic languages with AI-powered personalized education. Master Hindi, Bengali, Tamil, and more.</p>
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
          <Link to="/faq" style={styles.footerLink}>FAQ</Link>
          <a href="#waitlist" style={styles.footerLink}>Join Waitlist</a>
          <a href="mailto:hello@bhol.app" style={styles.footerLink}>Contact</a>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Company</h4>
          <Link to="/about" style={styles.footerLink}>About</Link>
          <Link to="/blog" style={styles.footerLink}>Blog</Link>
          <Link to="/careers" style={styles.footerLink}>Careers</Link>
          <a href="mailto:press@bhol.app" style={styles.footerLink}>Press</a>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Legal</h4>
          <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms" style={styles.footerLink}>Terms of Service</Link>
          <a href="mailto:legal@bhol.app" style={styles.footerLink}>Legal</a>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>&copy; 2025 Bhol. Learn Indic languages with confidence.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
          Made with ❤️ for language learners worldwide
        </p>
      </div>
    </footer>
  );
}

function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Learn Indic Languages</h1>
        <p style={styles.heroSubtitle}>Master Hindi, Bengali, Tamil, and more with interactive lessons and AI-powered practice.</p>
        <a
          href="#features"
          style={{
            ...styles.button,
            ...(hoveredButton ? styles.buttonHover : {})
          }}
          onMouseEnter={() => setHoveredButton(true)}
          onMouseLeave={() => setHoveredButton(false)}
        >
          Start Learning
        </a>
      </div>

      <div style={styles.grid} id="features">
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 0 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#222'}}>🎯 Interactive Flashcards</h3>
          <p style={{color: '#666', lineHeight: 1.7}}>Master vocabulary with spaced repetition and smart review algorithms.</p>
        </div>
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 1 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#222'}}>📚 Story-Based Learning</h3>
          <p style={{color: '#666', lineHeight: 1.7}}>Learn through engaging stories that adapt to your skill level.</p>
        </div>
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === 2 ? styles.cardHover : {})
          }}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#222'}}>🏆 Gamification</h3>
          <p style={{color: '#666', lineHeight: 1.7}}>Track your progress with XP points, streaks, and achievements.</p>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About Bhol</h1>
        <p style={styles.heroSubtitle}>Bridging cultures through language learning</p>
      </div>

      <div style={{maxWidth: '900px', margin: '0 auto', lineHeight: 1.8}}>
        <section style={{marginBottom: '5rem'}}>
          <h2 style={{fontSize: '2.5rem', color: '#222', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em'}}>Our Story</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '1.5rem', color: '#444', lineHeight: 1.8}}>
            Bhol was born from a simple observation: while the world becomes increasingly connected, language barriers continue to divide us.
            Our founders, having experienced the challenges of learning Indic languages firsthand, recognized that traditional language learning
            methods were not keeping pace with modern technology or the diverse needs of today's learners.
          </p>
          <p style={{fontSize: '1.1rem', color: '#555', lineHeight: 1.8}}>
            What started as a personal project to help friends and family learn Hindi has evolved into a mission to democratize
            access to Indic language education. We believe that everyone should have the opportunity to connect with the rich
            cultural heritage of India, Pakistan, Bangladesh, and Nepal through their languages.
          </p>
        </section>

        <section style={{marginBottom: '5rem'}}>
          <h2 style={{fontSize: '2.5rem', color: '#222', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em'}}>Our Mission</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: '#444', lineHeight: 1.8}}>
            To make Indic languages accessible, engaging, and culturally rich for learners worldwide. We envision a world where
            language barriers don't limit cultural exchange, business opportunities, or personal connections.
          </p>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>🌍 Global Accessibility</h3>
              <p>Break down barriers to Indic language education through innovative technology and affordable pricing.</p>
            </div>
            <div style={styles.card}>
              <h3>🎯 Cultural Authenticity</h3>
              <p>Preserve and promote the rich cultural context of each language through authentic content and native speakers.</p>
            </div>
            <div style={styles.card}>
              <h3>🚀 Personalized Learning</h3>
              <p>Leverage AI and data-driven insights to create personalized learning experiences for every student.</p>
            </div>
          </div>
        </section>

        <section style={{marginBottom: '5rem'}}>
          <h2 style={{fontSize: '2.5rem', color: '#222', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em'}}>Why Indic Languages Matter</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '1.5rem', color: '#444', lineHeight: 1.8}}>
            Indic languages represent one of the world's largest and most diverse language families, spoken by over 1.5 billion people
            across South Asia and the global diaspora. From the ancient wisdom of Sanskrit to the vibrant modern expressions of Hindi,
            Bengali, and Tamil, these languages carry millennia of cultural, philosophical, and literary heritage.
          </p>
          <p style={{fontSize: '1.1rem', marginBottom: '1rem', color: '#555', lineHeight: 1.8}}>
            In our increasingly interconnected world, learning Indic languages opens doors to:
          </p>
          <ul style={{marginLeft: '2rem', marginTop: '1.5rem', fontSize: '1.1rem', color: '#555', lineHeight: 2}}>
            <li style={{marginBottom: '0.5rem'}}>Business opportunities in growing markets</li>
            <li style={{marginBottom: '0.5rem'}}>Deeper cultural understanding and connections</li>
            <li style={{marginBottom: '0.5rem'}}>Access to classical literature and philosophy</li>
            <li style={{marginBottom: '0.5rem'}}>Enhanced travel and social experiences</li>
            <li style={{marginBottom: '0.5rem'}}>Career advancement in global companies</li>
          </ul>
        </section>

        <section style={{marginBottom: '5rem'}}>
          <h2 style={{fontSize: '2.5rem', color: '#222', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em'}}>Our Approach</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: '#444', lineHeight: 1.8}}>
            We combine cutting-edge technology with time-tested pedagogical methods to create an unparalleled learning experience.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF522B', marginBottom: '0.5rem'}}>AI-Powered Learning</h4>
              <p>Personalized lesson recommendations and intelligent review scheduling.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF522B', marginBottom: '0.5rem'}}>Cultural Immersion</h4>
              <p>Contextual learning through stories, music, and cultural content.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF522B', marginBottom: '0.5rem'}}>Community Support</h4>
              <p>Connect with fellow learners and native speakers for practice.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF522B', marginBottom: '0.5rem'}}>Expert Validation</h4>
              <p>Content reviewed by linguists and native speakers for accuracy.</p>
            </div>
          </div>
        </section>

        <section style={{textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#FFF5F2', borderRadius: '16px', marginTop: '3rem'}}>
          <h2 style={{fontSize: '2.5rem', color: '#222', marginBottom: '1.5rem', fontWeight: '700'}}>Join Our Mission</h2>
          <p style={{fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem', color: '#555', lineHeight: 1.7}}>
            We're building more than just a language learning app – we're creating bridges between cultures.
            Join us in our journey to make Indic languages accessible to everyone.
          </p>
          <Link
            to="/careers"
            style={{
              ...styles.button,
              ...(hoveredButton ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            View Career Opportunities
          </Link>
        </section>
      </div>
    </div>
  );
}

function CareersPage() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Join Our Team</h1>
        <p style={styles.heroSubtitle}>Help us democratize Indic language learning</p>
      </div>
      
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2>Current Openings</h2>
        
        <div style={styles.card}>
          <h3>Frontend Developer</h3>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Full-time</p>
          <p>Join our team to build beautiful, responsive user interfaces for our language learning platform.</p>
        </div>
        
        <div style={styles.card}>
          <h3>Content Creator - Hindi</h3>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Part-time</p>
          <p>Create engaging Hindi language content including stories, exercises, and cultural insights.</p>
        </div>
        
        <div style={styles.card}>
          <h3>UX Designer</h3>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Contract</p>
          <p>Design intuitive learning experiences that make language acquisition enjoyable and effective.</p>
        </div>
        
        <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem'}}>
          Reach out to us on <a href="https://twitter.com/bholapp_" target="_blank" rel="noopener noreferrer" style={{color: '#FF522B', fontWeight: 'bold', textDecoration: 'none'}}>X</a>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <Router>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;