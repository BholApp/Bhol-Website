import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles, colors, fonts } from '../styles/theme';
import { HoverCard, HoverButton } from '../components/HoverCard';
import { blogPosts } from '../data';

const missionCards = [
  {
    icon: '01',
    title: 'Global Accessibility',
    description: 'Break down barriers to Indic language education through innovative technology and affordable pricing.'
  },
  {
    icon: '02',
    title: 'Cultural Authenticity',
    description: 'Preserve and promote the rich cultural context of each language through authentic content and native speakers.'
  },
  {
    icon: '03',
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

const sectionHeading = {
  fontSize: '2rem',
  fontFamily: fonts.heading,
  fontWeight: '400',
  color: colors.text,
  marginBottom: '1rem',
  letterSpacing: '-0.01em',
};

export function AboutPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Blog</h1>
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
          <HoverButton
            onClick={() => setSelectedPost(null)}
            style={{ marginBottom: '2rem', fontSize: '0.9rem' }}
          >
            &larr; Back
          </HoverButton>
          <h1 style={{ ...sectionHeading, fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            {selectedPost.title}
          </h1>
          <div style={{ color: colors.textMuted, marginBottom: '2rem', fontSize: '0.9rem' }}>
            {selectedPost.date} &middot; {selectedPost.readTime}
          </div>
          <div
            style={{ color: colors.textLight, fontSize: '1.05rem', lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About Bhol</h1>
        <p style={styles.heroSubtitle}>Bridging cultures through language learning</p>
      </div>

      <div style={{ maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
        {/* Our Story */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>Our Story</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '1rem', color: colors.textLight, lineHeight: 1.7 }}>
            Bhol was born from a simple observation: while the world becomes increasingly connected, language barriers continue to divide us.
            Our founders, having experienced the challenges of learning Indic languages firsthand, recognized that traditional language learning
            methods were not keeping pace with modern technology or the diverse needs of today's learners.
          </p>
          <p style={{ fontSize: '1rem', color: colors.textMuted, lineHeight: 1.7 }}>
            What started as a personal project to help friends and family learn Hindi has evolved into a mission to democratize
            access to Indic language education. We believe that everyone should have the opportunity to connect with the rich
            cultural heritage of India, Pakistan, Bangladesh, and Nepal through their languages.
          </p>
        </section>

        {/* Our Mission */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>Our Mission</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: colors.textLight, lineHeight: 1.7 }}>
            To make Indic languages accessible, engaging, and culturally rich for learners worldwide.
          </p>
          <div style={styles.grid}>
            {missionCards.map((card, index) => (
              <HoverCard key={index} style={{ textAlign: 'left' }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: colors.primary,
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em',
                }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: colors.text, marginBottom: '0.5rem' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: colors.textMuted, margin: 0, lineHeight: 1.6 }}>
                  {card.description}
                </p>
              </HoverCard>
            ))}
          </div>
        </section>

        {/* Why Indic Languages Matter */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>Why Indic Languages Matter</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '1rem', color: colors.textLight, lineHeight: 1.7 }}>
            Indic languages represent one of the world's largest and most diverse language families, spoken by over 1.5 billion people
            across South Asia and the global diaspora.
          </p>
          <ul style={{
            marginLeft: '1.5rem',
            marginTop: '1rem',
            fontSize: '0.95rem',
            color: colors.textMuted,
            lineHeight: 2,
            paddingLeft: 0,
            listStylePosition: 'inside',
          }}>
            {languageBenefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Our Approach */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>Our Approach</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {approachCards.map((card, index) => (
              <div key={index} style={{
                padding: '1.25rem',
                backgroundColor: colors.cream,
                borderRadius: '12px',
                border: `1px solid ${colors.border}`,
              }}>
                <h4 style={{ color: colors.text, marginBottom: '0.4rem', fontSize: '0.95rem', fontWeight: '600' }}>{card.title}</h4>
                <p style={{ color: colors.textMuted, margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* From the Blog */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>From the Blog</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {blogPosts.map((post) => (
              <HoverCard key={post.id} style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.2rem', color: colors.text, marginBottom: '0.4rem', fontWeight: '600' }}>
                  {post.title}
                </h3>
                <p style={{ color: colors.textMuted, fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                  {post.date} &middot; {post.readTime}
                </p>
                <p style={{ color: colors.textLight, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  {post.excerpt}
                </p>
                <button
                  onClick={() => setSelectedPost(post)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: colors.primary,
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                  }}
                >
                  Read More &rarr;
                </button>
              </HoverCard>
            ))}
          </div>
        </section>

        {/* Join Our Mission */}
        <section style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          backgroundColor: colors.cream,
          borderRadius: '20px',
          border: `1px solid ${colors.border}`,
          marginBottom: '1rem',
        }}>
          <h2 style={{ ...sectionHeading, fontSize: '2rem', marginBottom: '0.75rem' }}>
            Join Our Mission
          </h2>
          <p style={{
            fontSize: '1.05rem',
            marginBottom: '1.5rem',
            maxWidth: '500px',
            margin: '0 auto 1.5rem',
            color: colors.textMuted,
            lineHeight: 1.6,
          }}>
            We're building bridges between cultures. Join us in making Indic languages accessible to everyone.
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
