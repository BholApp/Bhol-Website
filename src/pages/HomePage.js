import React from 'react';
import { colors, fonts } from '../styles/theme';
import { FAQAccordion } from '../components/FAQAccordion';
import { homeFaqs } from '../data';
import { useIsMobile } from '../hooks';

const APP_STORE_URL = 'https://apps.apple.com/us/app/bhol/id6755904064';

const screenshots = [
  {
    image: '/1321.png',
    title: 'Finally talk back to Nani',
    description: 'Learn Gujarati the way your family actually speaks. Connect with your heritage through real conversations, not textbook phrases.'
  },
  {
    image: '/1315.png',
    title: 'No memorizing scripts',
    description: 'Jumpstart your fluency by learning in English first. Our unique approach lets you understand meaning before tackling the script.'
  },
  {
    image: '/1316.png',
    title: 'Track your journey home',
    description: 'Watch your fluency grow day by day. Build streaks, earn achievements, and see your progress with detailed analytics.'
  },
  {
    image: '/1317.png',
    title: 'Built for heritage speakers',
    description: 'Designed for those who understand but can\'t reply. We meet you where you are and help you find your voice.'
  },
  {
    image: '/1318.png',
    title: 'Real conversations, not textbooks',
    description: 'Practice speaking with AI-powered conversations that feel natural. Learn the phrases you\'ll actually use with family.'
  },
  {
    image: '/1319.png',
    title: 'Finally ask "How do I say..."',
    description: 'Get instant translations with formal and informal options. Know exactly how to speak to elders vs. friends.'
  },
  {
    image: '/1320.png',
    title: 'Over 250+ Lessons',
    description: 'From self-introductions to complex conversations. A structured learning path that takes you from beginner to confident speaker.'
  }
];


const HeroSection = () => {
  const isMobile = useIsMobile(768);

  return (
    <div style={{
      textAlign: 'center',
      padding: isMobile ? '2.5rem 1.5rem 2rem' : '3.5rem 2rem 2.5rem',
      marginBottom: '0.5rem',
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: colors.primaryMuted,
        color: colors.primary,
        padding: '6px 14px',
        borderRadius: '100px',
        fontSize: '0.8rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
      }}>
        Now on the App Store
      </div>

      <h1 style={{
        fontSize: isMobile ? '2.4rem' : '3.5rem',
        fontWeight: '400',
        fontFamily: fonts.heading,
        color: colors.text,
        marginBottom: '1rem',
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
        maxWidth: '700px',
        margin: '0 auto 1rem',
      }}>
        Finally talk back<br />to Nani
      </h1>

      <p style={{
        fontSize: isMobile ? '1.05rem' : '1.15rem',
        color: colors.textMuted,
        lineHeight: 1.6,
        maxWidth: '480px',
        margin: '0 auto 2rem',
      }}>
        Learn Gujarati the way your family speaks. Built for heritage speakers who understand but can't reply.
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2.5rem',
      }}>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: colors.text,
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download Free
        </a>
      </div>

    </div>
  );
};

const ScreenshotGallery = () => {
  const isMobile = useIsMobile(768);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '0.75rem' : '1rem',
      padding: '0 0 1rem',
    }}>
      {screenshots.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#EDEDF0',
            borderRadius: '16px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default',
            ...(index === 0 && !isMobile ? {
              gridColumn: '1 / -1',
              maxWidth: '420px',
              margin: '0 auto',
            } : {}),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            loading={index > 1 ? 'lazy' : 'eager'}
          />
        </div>
      ))}
    </div>
  );
};

const CTASection = () => {
  const isMobile = useIsMobile(768);

  return (
    <div style={{
      background: colors.text,
      borderRadius: '20px',
      padding: isMobile ? '2.5rem 1.5rem' : '3.5rem 2rem',
      textAlign: 'center',
      margin: '2rem 0',
    }}>
      <h2 style={{
        fontSize: isMobile ? '1.8rem' : '2.4rem',
        fontWeight: '400',
        fontFamily: fonts.heading,
        color: '#fff',
        marginBottom: '0.75rem',
        lineHeight: 1.15,
      }}>
        Ready to reconnect with your roots?
      </h2>
      <p style={{
        fontSize: '1.05rem',
        color: 'rgba(255,255,255,0.6)',
        marginBottom: '2rem',
        maxWidth: '420px',
        margin: '0 auto 2rem',
        lineHeight: 1.6,
      }}>
        Start your Gujarati journey today. Free to download.
      </p>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: '#fff',
          color: colors.text,
          padding: '14px 28px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 2px 12px rgba(255,255,255,0.15)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        Download on App Store
      </a>
    </div>
  );
};

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <ScreenshotGallery />
      <CTASection />
      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" />
    </div>
  );
}

export default HomePage;
