import React from 'react';
import { colors } from '../styles/theme';
import { FAQAccordion } from '../components/FAQAccordion';
import { homeFaqs } from '../data';

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

const sectionStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    padding: '4rem 0',
    maxWidth: '1100px',
    margin: '0 auto'
  },
  containerReverse: {
    flexDirection: 'row-reverse'
  },
  imageWrapper: {
    flex: '0 0 45%',
    maxWidth: '350px',
    backgroundColor: '#fff',
    borderRadius: '24px',
    padding: '1rem'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    display: 'block'
  },
  content: {
    flex: '1'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '1rem',
    lineHeight: 1.2
  },
  description: {
    fontSize: '1.2rem',
    color: colors.textMuted,
    lineHeight: 1.7
  }
};

const ctaStyles = {
  section: {
    background: `linear-gradient(135deg, ${colors.primary} 0%, #FF8C42 100%)`,
    padding: '5rem 2rem',
    textAlign: 'center',
    margin: '4rem 0 0',
    borderRadius: '24px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '1rem',
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    lineHeight: 1.6
  },
  badgeWrapper: {
    display: 'inline-block'
  }
};

// Official Apple App Store badge SVG
const AppStoreBadge = ({ height = 54 }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: 'inline-block', lineHeight: 0 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 40"
      height={height}
      style={{ display: 'block' }}
    >
      <title>Download on the App Store</title>
      <rect width="120" height="40" rx="6" fill="#000" />
      <path
        fill="#fff"
        d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.36 4.1 4.1 0 0 0 3.237-1.53Z"
      />
      <path
        fill="#fff"
        d="M42.302 27.14h-4.733l-1.136 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039Zm-4.243-1.55h3.752l-1.85-5.446h-.051ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046ZM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.812 1.816 3.812 4.622Zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046ZM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.063-.685.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638Zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106ZM96.186 21.442h1.773v1.541h.043a2.16 2.16 0 0 1 2.178-1.635c.214 0 .428.023.637.07v1.738a2.594 2.594 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.859ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273Zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298Z"
      />
      <path
        fill="#fff"
        d="M37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.731Zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.134h-1.125ZM41.68 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889ZM53.854 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.888ZM59.094 8.437h.888v6.261h-.888ZM61.218 12.444a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.424c0-.81.604-1.278 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348Zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.983ZM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.261h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.329Zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.579-1.203 1.526ZM79.23 12.444a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0Zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.888ZM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.029-.322.044-.484.046-.988 0-1.381-.348-1.381-1.216v-2.543h-.715v-.749h.715V9.074ZM95.705 8.437h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.806 1.483 1.483 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 0 0-1.134 1.142v2.63h-.888ZM104.761 13.482a1.823 1.823 0 0 1-1.951 1.303 2.045 2.045 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.076-2.353c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.545Zm-3.126-1.451h2.275a1.086 1.086 0 0 0-1.109-1.167 1.152 1.152 0 0 0-1.166 1.167Z"
      />
    </svg>
  </a>
);

const ResponsiveSection = ({ image, title, description, reverse, index }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyle = {
    ...sectionStyles.container,
    ...(reverse && !isMobile ? sectionStyles.containerReverse : {}),
    ...(isMobile ? {
      flexDirection: 'column',
      gap: '2rem',
      padding: '3rem 1.5rem',
      textAlign: 'center'
    } : {})
  };

  const imageWrapperStyle = {
    ...sectionStyles.imageWrapper,
    ...(isMobile ? {
      flex: 'none',
      maxWidth: '280px',
      margin: '0 auto'
    } : {})
  };

  const titleStyle = {
    ...sectionStyles.title,
    ...(isMobile ? {
      fontSize: '1.8rem'
    } : {})
  };

  return (
    <div style={containerStyle}>
      <div style={imageWrapperStyle}>
        <img
          src={image}
          alt={title}
          style={sectionStyles.image}
          loading={index > 1 ? 'lazy' : 'eager'}
        />
      </div>
      <div style={sectionStyles.content}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={sectionStyles.description}>{description}</p>
      </div>
    </div>
  );
};

const ResponsiveCTA = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      ...ctaStyles.section,
      padding: isMobile ? '3rem 1.5rem' : '5rem 2rem'
    }}>
      <h2 style={{
        ...ctaStyles.title,
        fontSize: isMobile ? '2rem' : '2.5rem'
      }}>
        Ready to reconnect with your roots?
      </h2>
      <p style={ctaStyles.subtitle}>
        Start your Gujarati journey today. Free to download.
      </p>
      <div style={ctaStyles.badgeWrapper}>
        <AppStoreBadge height={isMobile ? 50 : 60} />
      </div>
    </div>
  );
};

export function HomePage() {
  return (
    <div>
      {/* Screenshot Sections */}
      <div style={{ padding: '0 1rem' }}>
        {screenshots.map((item, index) => (
          <ResponsiveSection
            key={index}
            index={index}
            image={item.image}
            title={item.title}
            description={item.description}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      {/* CTA Section */}
      <ResponsiveCTA />

      {/* FAQ Section */}
      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" />
    </div>
  );
}

export default HomePage;
