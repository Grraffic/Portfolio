import { useEffect, useState } from 'react';

interface TextDecryptProps {
  text: string;
  className?: string;
}

const chars = '01';

const TextDecrypt = ({ text, className = '' }: TextDecryptProps) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let iteration = 0;
    let interval: number;

    // Start with all 0s and 1s of correct length
    setDisplayText(
      text
        .split('')
        .map((char) => (char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
        .join('')
    );

    const startAnimation = () => {
      interval = window.setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]; // Lock in correct letter
              }
              if (letter === ' ') return ' '; // Preserve spaces
              return chars[Math.floor(Math.random() * chars.length)]; // Scramble remainder
            })
            .join('');
        });

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 5; // Lower number = slower reveal
      }, 60); // Interval speed
    };

    // Small delay before starting for better effect
    const timeout = setTimeout(startAnimation, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <span className="relative inline-block">
      <span className={`opacity-0 pointer-events-none whitespace-pre ${className}`}>{text}</span>
      <span className={`absolute inset-0 whitespace-pre ${className}`}>{displayText || ' '}</span>
    </span>
  );
};

export default TextDecrypt;
