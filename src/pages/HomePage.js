import React from 'react';
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
