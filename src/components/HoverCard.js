import React, { useState } from 'react';
import { styles, fonts } from '../styles/theme';

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

export function HoverButton({ children, style = {}, as: Component = 'button', ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      style={{
        ...styles.button,
        fontFamily: fonts.body,
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
