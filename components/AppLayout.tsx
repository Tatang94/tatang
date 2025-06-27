"use client";

import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ThemeModeSwitch } from "./ThemeModeSwitch";
import styles from "./AppLayout.module.css";

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, className }) => {
  console.log('[AppLayout] Component rendering with props:', { 
    hasChildren: !!children, 
    className,
    childrenType: typeof children 
  });

  console.log('[AppLayout] Header being rendered');
  console.log('[AppLayout] Header content container rendered');
  console.log('[AppLayout] Logo container created and rendered');
  console.log('[AppLayout] Main content area rendered with children:', !!children);

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logoContainer}>
            <h1 className={styles.title}>QWEEEN AI</h1>
          </Link>
          <div className={styles.headerActions}>
            <div className={styles.actionsContainer}>
              {/* Reserved space for future header actions */}
            </div>
            <ThemeModeSwitch />
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};