import React from 'react';
import styles from './GradioEmbed.module.css';

interface GradioEmbedProps {
  src: string;
  className?: string;
}

export const GradioEmbed: React.FC<GradioEmbedProps> = ({ src, className }) => {
  console.log('Rendering GradioEmbed with src:', src);
  
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.gradioWrapper}>
        <iframe
          src={src}
          className={styles.iframe}
          title="AI Coding Assistant"
          allow="camera; microphone; clipboard-read; clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
          loading="lazy"
        />
      </div>
    </div>
  );
};