import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import { Header, Footer } from './components';
import WaitlistForm from './components/WaitlistForm';

// Pages
import { HomePage, AboutPage, CareersPage, SupportPage } from './pages';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Styles and config
import { styles } from './styles/theme';
import { config } from './services';

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
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Waitlist Section */}
        <section id="waitlist" style={{ ...styles.waitlist, margin: 0, borderRadius: 0 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '1rem' }}>
              Be first when new languages drop
            </h2>
            <p style={{ fontSize: '1.15rem', margin: '0 auto 2rem', maxWidth: 620, lineHeight: 1.7 }}>
              Early waitlisters get beta invites, progress reports, and surprise cultural drops before we open to everyone.
            </p>
            <WaitlistForm scriptUrl={config.waitlistScriptUrl} styles={styles} />
          </div>
        </section>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
