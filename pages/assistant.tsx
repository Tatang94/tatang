"use client";

import React from "react";
import { Helmet } from "react-helmet";
import { GradioEmbed } from "../components/GradioEmbed";
import styles from "./assistant.module.css";

const AssistantPage: React.FC = () => {
  console.log("Rendering AI Assistant page");

  return (
    <>
      <Helmet>
        <title>AI Coding Assistant - Full Screen</title>
        <meta 
          name="description" 
          content="Full-screen AI coding assistant powered by Qwen2.5-Coder. Write, debug, and optimize code with advanced AI assistance." 
        />
        <meta name="keywords" content="AI coding, code assistant, programming help, Qwen2.5-Coder, full screen" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/assistant" />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.embedContainer}>
          <GradioEmbed 
            src="https://qwen-qwen2-5-coder-artifacts.hf.space"
            className={styles.embed}
          />
        </div>
      </div>
    </>
  );
};

export default AssistantPage;