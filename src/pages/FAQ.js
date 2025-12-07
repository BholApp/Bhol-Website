import React from 'react';

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
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  faqSection: {
    marginBottom: '3rem'
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #FF522B',
    paddingBottom: '0.5rem'
  },
  faqItem: {
    marginBottom: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  },
  question: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    transition: 'background-color 0.2s'
  },
  answer: {
    padding: '0 1.5rem 1.5rem',
    color: '#555',
    lineHeight: '1.6'
  },
  contactSection: {
    backgroundColor: '#f8f9fa',
    padding: '3rem',
    borderRadius: '12px',
    textAlign: 'center',
    marginTop: '3rem'
  },
  contactTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem'
  },
  button: {
    background: 'linear-gradient(90deg, rgba(255, 167, 59, 1) 0%, rgba(255, 91, 69, 1) 66%, rgba(255, 160, 8, 1) 100%)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'opacity 0.2s'
  }
};

function FAQ() {
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
          <p style={{marginBottom: '2rem', color: '#666'}}>
            Can't find the answer you're looking for? We'd love to hear from you!
          </p>
          <a href="mailto:hello@bhol.app" style={styles.button}>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;