import React, { useState } from 'react';

const styles = {
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
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    margin: '4rem 0'
  },
  card: {
    padding: '2.5rem',
    backgroundColor: '#FFF',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    border: '1px solid #e0e0e0',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
  },
  postTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#222',
    marginBottom: '1rem',
    lineHeight: 1.3
  },
  postMeta: {
    fontSize: '0.95rem',
    color: '#777',
    marginBottom: '1.2rem'
  },
  postExcerpt: {
    color: '#555',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
    fontSize: '1.05rem'
  },
  readMore: {
    color: '#FF522B',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  backButton: {
    background: 'linear-gradient(90deg, rgba(255, 167, 59, 1) 0%, rgba(255, 91, 69, 1) 66%, rgba(255, 160, 8, 1) 100%)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '2.5rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 12px rgba(255, 82, 43, 0.3)'
  },
  backButtonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 82, 43, 0.4)'
  },
  fullPost: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.8
  },
  fullPostTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#222',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em'
  },
  fullPostMeta: {
    color: '#777',
    marginBottom: '3rem',
    fontSize: '1.1rem'
  },
  fullPostContent: {
    color: '#444',
    fontSize: '1.15rem',
    lineHeight: 1.8
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Welcome to Bhol: Revolutionizing Indic Language Learning",
    date: "2025-09-05",
    excerpt: "Introducing Bhol, the AI-powered platform that's making learning Hindi, Bengali, Tamil, and other Indic languages accessible to everyone worldwide.",
    readTime: "3 min read",
    fullContent: `
      <h2>The Language Learning Revolution Begins</h2>
      <p>Today marks the official launch of Bhol's public beta program! After months of intensive development and testing, we're excited to share our vision for democratizing Indic language education.</p>

      <h3>Why Bhol Matters</h3>
      <p>Indic languages are spoken by over 1.5 billion people worldwide, yet quality language learning resources have remained inaccessible to most learners outside of traditional academic settings. Bhol changes that by combining:</p>
      <ul>
        <li><strong>AI-Powered Personalization:</strong> Our algorithms adapt to your learning style and pace</li>
        <li><strong>Cultural Immersion:</strong> Learn through authentic stories, music, and cultural contexts</li>
        <li><strong>Expert Validation:</strong> Content reviewed by linguists and native speakers</li>
        <li><strong>Community Support:</strong> Connect with fellow learners worldwide</li>
      </ul>

      <h3>Our Mission</h3>
      <p>At Bhol, we believe that language barriers shouldn't limit cultural exchange, business opportunities, or personal connections. Our mission is to make Indic languages as accessible as English, Spanish, or Mandarin.</p>

      <h3>Join the Beta</h3>
      <p>The beta program is now open! Sign up for early access and help shape the future of language learning. Your feedback will be invaluable as we build the most effective Indic language learning platform ever created.</p>

      <p><em>Ready to start your Indic language journey? Join our waitlist today!</em></p>
    `
  }
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Blog Post</h1>
          <p style={styles.heroSubtitle}>Read the full article</p>
        </div>

        <div style={styles.fullPost}>
          <button
            style={{
              ...styles.backButton,
              ...(hoveredButton ? styles.backButtonHover : {})
            }}
            onClick={handleBackToBlog}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            ← Back to Blog
          </button>

          <h1 style={styles.fullPostTitle}>{selectedPost.title}</h1>
          <div style={styles.fullPostMeta}>
            {selectedPost.date} • {selectedPost.readTime}
          </div>
          <div
            style={styles.fullPostContent}
            dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Language Learning Blog</h1>
        <p style={styles.heroSubtitle}>Insights, tips, and stories about mastering Indic languages</p>
      </div>

      <div style={styles.grid}>
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            style={{
              ...styles.card,
              ...(hoveredCard === index ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 style={styles.postTitle}>{post.title}</h2>
            <div style={styles.postMeta}>
              {post.date} • {post.readTime}
            </div>
            <p style={styles.postExcerpt}>{post.excerpt}</p>
            <button
              style={{...styles.readMore, background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.05rem'}}
              onClick={() => handleReadMore(post)}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;