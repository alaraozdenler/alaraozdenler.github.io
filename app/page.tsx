"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import styles from "./page.module.css";

type ImageItem = {
  src: string;
  alt: string;
};

type Project = {
  title: string;
  summary: string;
  details: string;
  tone: "blue" | "red" | "teal";
  images: ImageItem[];
};

type Thesis = {
  title: string;
  context: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
};

const formatImages = (files: string[], prefix: string): ImageItem[] =>
  files.map((file) => ({
    src: `/assets/images/${file}`,
    alt: `${prefix} - ${file.replace(/[-_]/g, " ").replace(/\.[^.]+$/, "")}`,
  }));

const projects: Project[] = [
  {
    title: "JoyRide - Autonomous Driving Companion App",
    summary:
      "Designed and implemented an iOS application end-to-end, from problem definition and prototyping to deployment, using SwiftUI and modern iOS development practices.",
    details:
      "Implemented core features including real-time chat, navigation, weather integration, and gamified in-ride experiences, incorporating continuous feedback from biweekly stakeholder meetings. Collaborated within an eight-person development team, taking ownership of feature design and implementation across the full development lifecycle.",
    tone: "blue",
    images: formatImages(
      [
        "welcome.png",
        "Navigation.png",
        "navigation2.png",
        "connect.png",
        "chat.png",
        "quiz1.png",
        "quiz2.png",
        "quiz3.png",
        "quiz4.png",
        "quiz5.png",
        "quiz6.png",
        "quiz7.png",
        "quiz8.png",
        "store.png",
      ],
      "JoyRide",
    ),
  },
  {
    title: "AURA - iOS Multiplayer Social Deduction Game",
    summary:
      "Led technical delivery of a team of six students developing an iOS multiplayer social deduction game inspired by Werewolf, integrating human players with AI agents powered by transformer-based language models.",
    details:
      "Designed and guided system architecture for AI–human interaction, translating functional requirements into technical specifications. Provided continuous technical mentorship and code-level guidance throughout the development lifecycle. Co-organized and led UI/UX and frontend workshops with training materials, code reviews, and structured feedback.",
    tone: "red",
    images: formatImages(
      [
        "welcome_aura.png",
        "name_aura.png",
        "ai_aura.png",
        "lobby_aura.png",
        "lobby2_aura.png",
        "role_aura.png",
        "kill1_aura.png",
        "kill_aura.png",
        "narrator_aura.png",
        "discussion-aura.png",
        "accuse-aura.png",
        "voting_aura.png",
        "end-aura.png",
      ],
      "AURA",
    ),
  },
  {
    title: "Mindshift - Gender Bias Intervention App",
    summary:
      "Designed and implemented Mindshift, an iOS application exploring the impact of mindfulness on reducing gender bias.",
    details:
      "Integrated guided meditation modules, the Implicit Association Test (IAT), and scenario-based decision tasks, enabling interactive assessment and data collection. Developed a robust SwiftUI-based frontend and coordinated app logic to ensure seamless user experience and reliable tracking of experimental data.",
    tone: "teal",
    images: formatImages(
      [
        "welcome-mindshift.PNG",
        "demographics.png",
        "demographics_final.png",
        "overview1.png",
        "overview2.png",
        "clouds1.png",
        "meditation_end.png",
        "test1.png",
        "test2.png",
        "test3.png",
        "test4.png",
        "scenarios_start.png",
        "scenarios1.png",
        "scenarios2.png",
        "final_view.png",
      ],
      "Mindshift",
    ),
  },
];

const masterThesis = {
  title:
    "Master’s Thesis – Graph-Based Synthetic Data Generation of Architectural Floor Plans from SVG Data",
  summary:
    "Designed and implemented a pipeline to convert CAD/SVG-based architectural floor plans into semantically enriched graph representations. Developed and trained graph-based generative models, including an adapted DiGress model and a custom relational GraphVAE, to generate synthetic floor plan data for machine learning applications. Evaluated generated layouts for spatial coherence and semantic validity, identifying model limitations and proposing improvements for future system design and research.",
}

const aboutParagraphs = [
  "I am a Master’s graduate in Informatics at the Technical University of Munich, where I also completed my Bachelor’s degree. My academic focus is on software development and machine learning, with a strong emphasis on building reliable, production-ready systems.",
  "I have hands-on experience owning features end-to-end across mobile and web applications, from requirements and technical design to implementation, testing, and deployment. My background includes iOS development in both academic and industrial settings, as well as web development and test automation through multiple working student roles.",
  "I enjoy working close to product requirements and users, translating ideas into scalable, maintainable solutions, and iterating based on feedback. I am comfortable taking responsibility for technical decisions, collaborating in cross-functional teams, and improving developer workflows through CI/CD and automation.",
];
export default function Home() {
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#home" className={styles.logo}>
            Alara Özdenler
          </a>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#thesis">Thesis</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <img
            src="/assets/images/IMG_5517.jpg"
            alt="Portrait of Alara Özdenler"
            className={styles.profilePic}
          />
          <h1 className={styles.title}>Alara Özdenler</h1>
          <p className={styles.tagline}>Full Stack Developer</p>
        </div>
      </section>

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          {aboutParagraphs.map((copy) => (
            <p key={copy}>{copy}</p>
          ))}
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.projects}>
            {projects.map((project) => (
              <article
                key={project.title}
                className={styles.projectCard}
                data-tone={project.tone}
              >
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCopy}>{project.summary}</p>
                <p className={styles.projectCopy}>{project.details}</p>
                <div className={styles.imageGrid}>
                  {project.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className={styles.thumb}
                      onClick={() => setActiveImage(image)}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="thesis" className={styles.section}>
          <h2>Master’s Thesis</h2>

          <article className={styles.projectCard} data-tone="purple">
            <h3 className={styles.projectTitle}>{masterThesis.title}</h3>
            <p className={styles.projectCopy}>{masterThesis.summary}</p>
          </article>
        </section>

        <section id="cv" className={styles.section}>
          <h2>Curriculum Vitae</h2>
          <p>Click below to download my CV.</p>
          <a
            className={styles.cvButton}
            href="/assets/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>Feel free to reach out to me!</p>
          <div className={styles.contactLinks}>
            <a className={styles.contactLink} href="mailto:ozdenleralara@gmail.com">
              ozdenleralara@gmail.com
            </a>
            <a
              className={styles.contactLink}
              href="https://www.linkedin.com/in/alaraozdenler"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/alaraozdenler
            </a>
          </div>
        </section>
      </main>

      {activeImage && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>

            <img src={activeImage.src} alt={activeImage.alt} className={styles.modalImage} />

          </div>
        </div>
      )}
    </div>
  );
}
