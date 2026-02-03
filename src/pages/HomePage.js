import React, { useState, useEffect, useCallback } from 'react';
import { styles, colors } from '../styles/theme';
import { HoverCard, HoverButton } from '../components/HoverCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { homeFaqs } from '../data';

const features = [
  {
    icon: '🎯',
    title: 'Interactive Flashcards',
    description: 'Master vocabulary with spaced repetition and smart review algorithms.'
  },
  {
    icon: '📚',
    title: 'Story-Based Learning',
    description: 'Learn through engaging stories that adapt to your skill level.'
  },
  {
    icon: '🏆',
    title: 'Gamification',
    description: 'Track your progress with XP points, streaks, and achievements.'
  }
];

// App screenshots from the app store
const appScreenshots = [
  { src: '/1315.png', alt: 'Bhol App - Language Selection' },
  { src: '/1316.png', alt: 'Bhol App - Learning Dashboard' },
  { src: '/1317.png', alt: 'Bhol App - Flashcard Practice' },
  { src: '/1318.png', alt: 'Bhol App - Story Mode' },
  { src: '/1319.png', alt: 'Bhol App - Progress Tracking' },
  { src: '/1320.png', alt: 'Bhol App - Achievements' },
  { src: '/1321.png', alt: 'Bhol App - Settings' },
];

const screenshotStyles = {
  section: {
    padding: '4rem 0',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '1rem',
  },
  sectionSubtitle: {
    fontSize: '1.2rem',
    color: colors.textMuted,
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  },
  carouselContainer: {
    position: 'relative',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: '2rem 0',
  },
  carouselTrack: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    transition: 'transform 0.5s ease-in-out',
  },
  screenshotWrapper: {
    flexShrink: 0,
    transition: 'all 0.4s ease',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },
  screenshotWrapperActive: {
    transform: 'scale(1.05)',
    boxShadow: '0 30px 80px rgba(255, 82, 43, 0.25)',
  },
  screenshot: {
    width: '280px',
    height: 'auto',
    display: 'block',
    borderRadius: '24px',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: colors.primaryGradient,
    color: 'white',
    border: 'none',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(255, 82, 43, 0.3)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    zIndex: 10,
  },
  navButtonHover: {
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: '0 6px 20px rgba(255, 82, 43, 0.4)',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: '2rem',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.primary,
    transform: 'scale(1.2)',
  },
  appStoreButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    background: '#000',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    marginTop: '2rem',
  },
  appStoreButtonHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
  },
  downloadSection: {
    textAlign: 'center',
    marginTop: '1rem',
  },
};

function ScreenshotCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [appStoreHovered, setAppStoreHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Calculate visible screenshots (show 3 on larger screens)
  const getVisibleScreenshots = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + appScreenshots.length) % appScreenshots.length;
      result.push({ ...appScreenshots[index], originalIndex: index, offset: i });
    }
    return result;
  };

  return (
    <div 
      style={screenshotStyles.carouselContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        style={{
          ...screenshotStyles.navButton,
          left: '20px',
          ...(hoveredButton === 'prev' ? screenshotStyles.navButtonHover : {}),
        }}
        onMouseEnter={() => setHoveredButton('prev')}
        onMouseLeave={() => setHoveredButton(null)}
        aria-label="Previous screenshot"
      >
        &#8249;
      </button>

      <button
        onClick={nextSlide}
        style={{
          ...screenshotStyles.navButton,
          right: '20px',
          ...(hoveredButton === 'next' ? screenshotStyles.navButtonHover : {}),
        }}
        onMouseEnter={() => setHoveredButton('next')}
        onMouseLeave={() => setHoveredButton(null)}
        aria-label="Next screenshot"
      >
        &#8250;
      </button>

      {/* Screenshots Track */}
      <div style={screenshotStyles.carouselTrack}>
        {getVisibleScreenshots().map((screenshot, idx) => (
          <div
            key={screenshot.originalIndex}
            style={{
              ...screenshotStyles.screenshotWrapper,
              ...(screenshot.offset === 0 ? screenshotStyles.screenshotWrapperActive : {}),
              opacity: screenshot.offset === 0 ? 1 : 0.6,
              transform: screenshot.offset === 0 ? 'scale(1.05)' : 'scale(0.9)',
            }}
          >
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              style={screenshotStyles.screenshot}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div style={screenshotStyles.dots}>
        {appScreenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              ...screenshotStyles.dot,
              ...(index === activeIndex ? screenshotStyles.dotActive : {}),
            }}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>

      {/* App Store Download Button */}
      <div style={screenshotStyles.downloadSection}>
        <a
          href="https://apps.apple.com/us/app/bhol/id6755904064"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...screenshotStyles.appStoreButton,
            ...(appStoreHovered ? screenshotStyles.appStoreButtonHover : {}),
          }}
          onMouseEnter={() => setAppStoreHovered(true)}
          onMouseLeave={() => setAppStoreHovered(false)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span>Download on the App Store</span>
        </a>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Learn Indic Languages</h1>
        <p style={styles.heroSubtitle}>
          Master Hindi, Bengali, Tamil, and more with interactive lessons and AI-powered practice.
        </p>
        <HoverButton as="a" href="#waitlist">
          Join Waitlist
        </HoverButton>
      </div>

      {/* App Screenshots Section */}
      <section style={screenshotStyles.section} id="screenshots">
        <h2 style={screenshotStyles.sectionTitle}>See Bhol in Action</h2>
        <p style={screenshotStyles.sectionSubtitle}>
          Beautiful, intuitive design that makes language learning a joy. Available on iOS and Android.
        </p>
        <ScreenshotCarousel />
      </section>

      {/* Features Grid */}
      <div style={styles.grid} id="features">
        {features.map((feature, index) => (
          <HoverCard key={index}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: colors.text }}>
              {feature.icon} {feature.title}
            </h3>
            <p style={{ color: colors.textMuted, lineHeight: 1.7 }}>
              {feature.description}
            </p>
          </HoverCard>
        ))}
      </div>

      {/* FAQ Section */}
      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" />
    </div>
  );
}

export default HomePage;
