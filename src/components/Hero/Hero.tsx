import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { HeroScene } from '../../three/HeroScene';
import { containerStagger, fadeUp } from '../../utils/animations';
import './Hero.css';

const LINKEDIN_URL = 'https://linkedin.com/in/gaurav-kumar-7897a52b5';

export function Hero() {
  const { normalised } = useMousePosition();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-label="Hero section">
      {/* 3D Canvas */}
      <div className="hero__canvas-wrap" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene mouseX={normalised.x} mouseY={normalised.y} />
        </Suspense>
      </div>

      {/* Vignette overlay */}
      <div className="hero__vignette" aria-hidden="true" />

      {/* Content */}
      <div className="container hero__content">
        <motion.div
          className="hero__text"
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="hero__name">
            Gaurav<br />Kumar
          </motion.h1>

          {/* Role */}
          <motion.p variants={fadeUp} className="hero__role">
            Full-Stack Developer
          </motion.p>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="hero__tagline">
            Building intelligent, scalable web experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="hero__ctas">
            <button
              id="hero-view-projects"
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              aria-label="View projects section"
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              id="hero-contact"
              className="btn btn-ghost"
              onClick={() => scrollToSection('contact')}
              aria-label="Go to contact section"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="hero__socials">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="Gaurav Kumar on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.852 0-2.136 1.446-2.136 2.939v5.667H9.987V9h3.101v1.561h.044c.432-.818 1.487-1.681 3.061-1.681 3.272 0 3.875 2.153 3.875 4.952v6.62zM5.337 7.433a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM6.761 20.452H3.912V9h2.849v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:gauravkumar9282@gmail.com"
              className="btn-icon"
              aria-label="Send email to Gaurav Kumar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          aria-hidden="true"
        >
          <div className="hero__scroll-line" />
          <span>scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
