import React from 'react';
import { ArrowDown, Code2 } from 'lucide-react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  className?: string;
  onCTAClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className, onCTAClick }) => {
  return (
    <section className={`${styles.hero} ${className || ''}`}>
      <div className={styles.backgroundGrid}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <h1 className={styles.headline}>
            Supercharge Your Workflow with an
            <span className={styles.highlight}> AI Coding Assistant</span>
          </h1>
          <p className={styles.subtitle}>
            Leverage the power of Qwen2-5-Coder directly in your workspace.
            Generate code, solve complex problems, and accelerate your development
            cycle like never before.
          </p>
          <button className={styles.ctaButton} onClick={onCTAClick}>
            <span>Launch AI Assistant</span>
            <ArrowDown size={20} />
          </button>
        </div>
        <div className={styles.visuals}>
          <div className={styles.codeSnippet}>
            <div className={styles.codeHeader}>
              <div className={styles.dots}>
                <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
                <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
                <span className={styles.dot} style={{ background: '#27c93f' }}></span>
              </div>
              <div className={styles.codeTitle}>
                <Code2 size={16} />
                <span>generate_component.py</span>
              </div>
            </div>
            <pre className={styles.codeBlock}>
              <code>
                <span className={styles.codeLine}>
                  <span className={styles.keyword}>def</span> <span className={styles.function}>create_button</span>(text, theme=<span className={styles.string}>'primary'</span>):
                </span>
                <span className={styles.codeLine}>
                  &nbsp;&nbsp;<span className={styles.comment}># Creates a modern UI button</span>
                </span>
                <span className={styles.codeLine}>
                  &nbsp;&nbsp;button = Button(text=text)
                </span>
                <span className={styles.codeLine}>
                  &nbsp;&nbsp;button.set_theme(theme)
                </span>
                <span className={styles.codeLine}>
                  &nbsp;&nbsp;<span className={styles.keyword}>return</span> button
                </span>
                <span className={styles.codeLine}>
                </span>
                <span className={styles.codeLine}>
                  <span className={styles.comment}># Example usage</span>
                </span>
                <span className={styles.codeLine}>
                  submit_btn = create_button(<span className={styles.string}>"Submit"</span>)
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};