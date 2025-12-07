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
    maxWidth: '750px',
    margin: '0 auto'
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: 1.8
  },
  faqSection: {
    marginBottom: '4rem'
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#222',
    marginBottom: '2rem',
    borderBottom: '3px solid #FF522B',
    paddingBottom: '0.75rem',
    letterSpacing: '-0.01em'
  },
  faqItem: {
    marginBottom: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    border: '1px solid #f0f0f0'
  },
  question: {
    backgroundColor: '#f8f9fa',
    padding: '1.75rem',
    margin: 0,
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#222',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    transition: 'background-color 0.2s',
    lineHeight: 1.5
  },
  answer: {
    padding: '0 1.75rem 1.75rem',
    color: '#555',
    lineHeight: 1.8,
    fontSize: '1.05rem'
  },
  contactSection: {
    backgroundColor: '#FFF5F2',
    padding: '4rem 2rem',
    borderRadius: '16px',
    textAlign: 'center',
    marginTop: '4rem'
  },
  contactTitle: {
    fontSize: '2rem',
    color: '#222',
    marginBottom: '1.5rem',
    fontWeight: '700'
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
  }
};

function FAQ() {
  const [hoveredButton, setHoveredButton] = useState(false);

  const faqData = [
    {
      category: "About Bhol",
      questions: [
        {
          q: "What is Bhol?",
          a: "Bhol is an innovative language learning platform focused on making Indic languages (Hindi, Bengali, Tamil, etc.) accessible and engaging for learners worldwide. We combine AI-powered personalization with culturally authentic content to create an immersive learning experience."
        },
        {
          q: "When will Bhol be available?",
          a: "We're currently in development and plan to launch our beta version in Q1 2025. You can join our waitlist to get early access and be notified when we launch."
        },
        {
          q: "Which languages will be available?",
          a: "We plan to launch with Hindi, Bengali, and Tamil initially, with more Indic languages (Sanskrit, Gujarati, Telugu, etc.) added based on user demand and community feedback."
        }
      ]
    },
    {
      category: "Learning & Features",
      questions: [
        {
          q: "How does Bhol's learning method work?",
          a: "Our approach combines spaced repetition algorithms, interactive exercises, cultural context, and AI personalization. You'll learn through stories, conversations, and practical scenarios rather than just memorizing vocabulary lists."
        },
        {
          q: "Is Bhol suitable for complete beginners?",
          a: "Absolutely! Our courses are designed for all levels, from complete beginners to advanced learners. The AI adapts to your pace and provides personalized recommendations based on your progress."
        },
        {
          q: "Can I learn at my own pace?",
          a: "Yes! Bhol is designed for flexible learning. You can study for 10 minutes a day or several hours - the platform adapts to your schedule and learning style."
        },
        {
          q: "Will there be native speaker audio?",
          a: "Yes, all our content includes high-quality audio from native speakers with various accents and speaking styles to help you develop authentic listening and speaking skills."
        }
      ]
    },
    {
      category: "Pricing & Access",
      questions: [
        {
          q: "How much will Bhol cost?",
          a: "We're committed to making language learning accessible. Our pricing will be affordable with options for individual learners and institutions. We'll announce specific pricing closer to launch."
        },
        {
          q: "Will there be a free version?",
          a: "Yes, we'll offer a free tier with basic features to help you get started. Premium features will be available through subscription plans."
        },
        {
          q: "Can I use Bhol on multiple devices?",
          a: "Yes! Bhol will be available on web, iOS, and Android, with seamless synchronization across all your devices."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          q: "Do I need any special software or equipment?",
          a: "No special equipment needed! Bhol works on any modern web browser, smartphone, or tablet. For the best experience, we recommend a device with a microphone for speaking exercises."
        },
        {
          q: "Is my data secure?",
          a: "Absolutely. We use industry-standard encryption and security measures to protect your personal information and learning data. See our Privacy Policy for details."
        },
        {
          q: "What if I need help or have questions?",
          a: "We're here to help! You can reach our support team through the app, email, or our community forums. We also plan to offer live tutoring sessions with native speakers."
        }
      ]
    },
    {
      category: "Contributing & Community",
      questions: [
        {
          q: "Can I contribute content or translations?",
          a: "We'd love to have your input! We're building a community of language enthusiasts and educators. Join our waitlist to be part of shaping the future of Indic language education."
        },
        {
          q: "Will there be a community forum?",
          a: "Yes! We're building community features where learners can practice with native speakers, share cultural insights, and support each other's learning journeys."
        }
      ]
    }
  ];

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Frequently Asked Questions</h1>
        <p style={styles.heroSubtitle}>Everything you need to know about Bhol and our upcoming language learning platform</p>
      </div>

      <div style={styles.content}>
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} style={styles.faqSection}>
            <h2 style={styles.sectionTitle}>{section.category}</h2>
            {section.questions.map((faq, faqIndex) => (
              <div key={faqIndex} style={styles.faqItem}>
                <button style={styles.question}>
                  {faq.q}
                </button>
                <div style={styles.answer}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Still have questions?</h2>
          <p style={{marginBottom: '2.5rem', color: '#555', fontSize: '1.15rem', lineHeight: 1.6}}>
            Can't find the answer you're looking for? We'd love to hear from you!
          </p>
          <a
            href="mailto:hello@bhol.app"
            style={{
              ...styles.button,
              ...(hoveredButton ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;