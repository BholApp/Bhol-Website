import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import { Header, Footer } from './components';

// Pages
import { HomePage, AboutPage, CareersPage, SupportPage } from './pages';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Styles
import { styles } from './styles/theme';

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

        <Footer />
      </Router>
    </div>
  );
}

export default App;
