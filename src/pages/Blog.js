import React, { useState } from 'react';

const styles = {
  hero: {
    textAlign: 'center',
    padding: '4rem 1rem',
    backgroundColor: '#FFF5F2',
    borderRadius: '12px',
    margin: '2rem 0'
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  },
  card: {
    padding: '2rem',
    backgroundColor: '#FFF',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0'
  },
  postTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
  },
  postMeta: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '1rem'
  },
  postExcerpt: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1rem'
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
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '2rem'
  },
  fullPost: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8'
  },
  fullPostTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
  },
  fullPostMeta: {
    color: '#666',
    marginBottom: '2rem',
    fontSize: '1.1rem'
  },
  fullPostContent: {
    color: '#333',
    fontSize: '1.1rem'
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
          <button style={styles.backButton} onClick={handleBackToBlog}>
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
        {blogPosts.map(post => (
          <div key={post.id} style={styles.card}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <div style={styles.postMeta}>
              {post.date} • {post.readTime}
            </div>
            <p style={styles.postExcerpt}>{post.excerpt}</p>
            <button
              style={{...styles.readMore, background: 'none', border: 'none', cursor: 'pointer'}}
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