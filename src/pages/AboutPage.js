import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles, colors } from '../styles/theme';
import { HoverCard, HoverButton } from '../components/HoverCard';
import { blogPosts } from '../data';

const missionCards = [
  {
    icon: '🌍',
    title: 'Global Accessibility',
    description: 'Break down barriers to Indic language education through innovative technology and affordable pricing.'
  },
  {
    icon: '🎯',
    title: 'Cultural Authenticity',
    description: 'Preserve and promote the rich cultural context of each language through authentic content and native speakers.'
  },
  {
    icon: '🚀',
    title: 'Personalized Learning',
    description: 'Leverage AI and data-driven insights to create personalized learning experiences for every student.'
  }
];

const approachCards = [
  { title: 'AI-Powered Learning', description: 'Personalized lesson recommendations and intelligent review scheduling.' },
  { title: 'Cultural Immersion', description: 'Contextual learning through stories, music, and cultural content.' },
  { title: 'Community Support', description: 'Connect with fellow learners and native speakers for practice.' },
  { title: 'Expert Validation', description: 'Content reviewed by linguists and native speakers for accuracy.' }
];

const languageBenefits = [
  'Business opportunities in growing markets',
  'Deeper cultural understanding and connections',
  'Access to classical literature and philosophy',
  'Enhanced travel and social experiences',
  'Career advancement in global companies'
];

export function AboutPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  // Blog post detail view
  if (selectedPost) {
    return (
      <div>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Blog</h1>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
          <HoverButton
            onClick={() => setSelectedPost(null)}
            style={{ marginBottom: '2rem' }}
          >
            ← Back
          </HoverButton>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: colors.text, marginBottom: '1rem', lineHeight: 1.2 }}>
            {selectedPost.title}
          </h1>
          <div style={{ color: '#777', marginBottom: '2rem', fontSize: '1rem' }}>
            {selectedPost.date} • {selectedPost.readTime}
          </div>
          <div
            style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About Bhol</h1>
        <p style={styles.heroSubtitle}>Bridging cultures through language learning</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: 1.8 }}>
        {/* Our Story */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: colors.text, marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
            Our Story
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#444', lineHeight: 1.8 }}>
            Bhol was born from a simple observation: while the world becomes increasingly connected, language barriers continue to divide us.
            Our founders, having experienced the challenges of learning Indic languages firsthand, recognized that traditional language learning
            methods were not keeping pace with modern technology or the diverse needs of today's learners.
          </p>
          <p style={{ fontSize: '1.1rem', color: colors.textLight, lineHeight: 1.8 }}>
            What started as a personal project to help friends and family learn Hindi has evolved into a mission to democratize
            access to Indic language education. We believe that everyone should have the opportunity to connect with the rich
            cultural heritage of India, Pakistan, Bangladesh, and Nepal through their languages.
          </p>
        </section>

        {/* Our Mission */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: colors.text, marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
            Our Mission
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#444', lineHeight: 1.8 }}>
            To make Indic languages accessible, engaging, and culturally rich for learners worldwide. We envision a world where
            language barriers don't limit cultural exchange, business opportunities, or personal connections.
          </p>
          <div style={styles.grid}>
            {missionCards.map((card, index) => (
              <HoverCard key={index}>
                <h3>{card.icon} {card.title}</h3>
                <p>{card.description}</p>
              </HoverCard>
            ))}
          </div>
        </section>

        {/* Why Indic Languages Matter */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: colors.text, marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
            Why Indic Languages Matter
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#444', lineHeight: 1.8 }}>
            Indic languages represent one of the world's largest and most diverse language families, spoken by over 1.5 billion people
            across South Asia and the global diaspora. From the ancient wisdom of Sanskrit to the vibrant modern expressions of Hindi,
            Bengali, and Tamil, these languages carry millennia of cultural, philosophical, and literary heritage.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: colors.textLight, lineHeight: 1.8 }}>
            In our increasingly interconnected world, learning Indic languages opens doors to:
          </p>
          <ul style={{ marginLeft: '2rem', marginTop: '1.5rem', fontSize: '1.1rem', color: colors.textLight, lineHeight: 2 }}>
            {languageBenefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Our Approach */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: colors.text, marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
            Our Approach
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#444', lineHeight: 1.8 }}>
            We combine cutting-edge technology with time-tested pedagogical methods to create an unparalleled learning experience.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {approachCards.map((card, index) => (
              <div key={index} style={{ padding: '1.5rem', backgroundColor: colors.backgroundAlt, borderRadius: '8px' }}>
                <h4 style={{ color: colors.primary, marginBottom: '0.5rem' }}>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* From the Blog */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: colors.text, marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
            From the Blog
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {blogPosts.map((post) => (
              <HoverCard key={post.id} style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', color: colors.text, marginBottom: '0.5rem', fontWeight: '700' }}>
                  {post.title}
                </h3>
                <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {post.date} • {post.readTime}
                </p>
                <p style={{ color: colors.textLight, lineHeight: 1.7, marginBottom: '1rem' }}>
                  {post.excerpt}
                </p>
                <button
                  onClick={() => setSelectedPost(post)}
                  style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: '600', cursor: 'pointer', padding: 0, fontSize: '1rem' }}
                >
                  Read More →
                </button>
              </HoverCard>
            ))}
          </div>
        </section>

        {/* Join Our Mission */}
        <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: colors.primaryLight, borderRadius: '16px', marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: colors.text, marginBottom: '1.5rem', fontWeight: '700' }}>
            Join Our Mission
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem', color: colors.textLight, lineHeight: 1.7 }}>
            We're building more than just a language learning app – we're creating bridges between cultures.
            Join us in our journey to make Indic languages accessible to everyone.
          </p>
          <HoverButton as={Link} to="/careers">
            View Career Opportunities
          </HoverButton>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
