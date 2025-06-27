import React from 'react';
import { LucideProps } from 'lucide-react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.iconWrapper}>
        <Icon size={28} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.glow}></div>
    </div>
  );
};