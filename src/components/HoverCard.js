import React, { useState } from 'react';
import { styles } from '../styles/theme';

/**
 * Reusable card component with hover effect
 * @param {React.ReactNode} children - Card content
 * @param {object} style - Additional styles to merge
 * @param {function} onClick - Optional click handler
 */
export function HoverCard({ children, style = {}, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Reusable button with hover effect
 * @param {React.ReactNode} children - Button content
 * @param {object} style - Additional styles to merge
 * @param {string} as - Element type ('button', 'a', or custom component)
 * @param {object} props - Additional props to pass through
 */
export function HoverButton({ children, style = {}, as: Component = 'button', ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      style={{
        ...styles.button,
        ...(isHovered ? styles.buttonHover : {}),
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default HoverCard;
