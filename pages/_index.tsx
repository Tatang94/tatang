"use client";

import * as React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Code, Zap, Brain, Shield, Globe, Rocket } from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import { FeatureCard } from "../components/FeatureCard";
import styles from "./_index.module.css";

export default function IndexPage() {
  console.log('IndexPage component is rendering');
  
  const navigate = useNavigate();

  const launchAssistant = () => {
    console.log('launchAssistant called - navigating to /assistant');
    navigate('/assistant');
  };

  const features = [
    {
      icon: Code,
      title: "Intelligent Code Generation",
      description: "Generate high-quality code in multiple programming languages with context-aware AI assistance that understands your project structure and requirements."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast code suggestions and analysis powered by optimized AI models designed for real-time development workflows."
    },
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Leverage cutting-edge Qwen2-5-Coder technology with deep understanding of programming patterns, best practices, and modern frameworks."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your code stays private with enterprise-grade security. No data logging, no training on your code, complete confidentiality guaranteed."
    },
    {
      icon: Globe,
      title: "Multiple Language Support",
      description: "Full support for 80+ programming languages including Python, JavaScript, TypeScript, Rust, Go, Java, C++, and many more."
    },
    {
      icon: Rocket,
      title: "Real-time Code Analysis",
      description: "Get instant feedback on code quality, potential bugs, optimization suggestions, and best practice recommendations as you type."
    }
  ];

  console.log('IndexPage features data:', features.length, 'features');
  console.log('IndexPage navigate function:', typeof navigate);

  // Debug logs before render
  console.log('Rendering HeroSection with launchAssistant callback');
  console.log('Rendering features grid with', features.length, 'feature cards');

  return (
    <>
      <Helmet>
        <title>AI Coding Assistant | Qwen2-5-Coder Super App</title>
        <meta
          name="description"
          content="Transform your development workflow with our powerful AI coding assistant. Generate code, analyze projects, and accelerate development with Qwen2-5-Coder technology."
        />
        <meta name="keywords" content="AI coding assistant, code generation, Qwen2-5-Coder, programming AI, developer tools" />
        <meta property="og:title" content="AI Coding Assistant | Qwen2-5-Coder Super App" />
        <meta property="og:description" content="Transform your development workflow with our powerful AI coding assistant powered by Qwen2-5-Coder." />
        <meta property="og:type" content="website" />
      </Helmet>
        <div className={styles.pageContainer}>
          {/* Hero Section */}
          <section id="hero-section" className={styles.heroSection}>
            <HeroSection onCTAClick={launchAssistant} />
          </section>

          {/* Features Section */}
          <section id="features-section" className={styles.featuresSection}>
            <div className={styles.featuresContainer}>
              <div className={styles.featuresHeader}>
                <h2 className={styles.featuresTitle}>
                  Supercharge Your Development Workflow
                </h2>
                <p className={styles.featuresSubtitle}>
                  Experience the next generation of AI-powered coding assistance with features designed for modern developers.
                </p>
              </div>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => {
                  console.log(`Rendering feature ${index + 1}:`, feature.title);
                  return (
                    <FeatureCard
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      className={styles.featureCard}
                    />
                  );
                })}
              </div>
            </div>
          </section>

        </div>
    </>
  );
}