import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { containerStagger, fadeUp } from '../../utils/animations';
import portrait from '../../assets/gaurav-portrait.jpg';
import './Hero.css';

const LINKEDIN_URL = 'https://linkedin.com/in/gaurav-kumar-7897a52b5';
const GITHUB_URL = 'https://github.com/GA773';

export function Hero() {
  const { normalised } = useMousePosition();
  const reducedMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-label="Hero section">
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
            Open to internships &amp; collaborations
          </motion.div>
          <p className="hero__eyebrow">HELLO, I'M A DEVELOPER &amp; A CURIOUS BUILDER</p>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="hero__name">
            <span className="hero__name-line">Gaurav</span>
            <span className="hero__name-line hero__name-line--outline">Kumar</span>
          </motion.h1>

          {/* Role */}
          <motion.p variants={fadeUp} className="hero__role">
            Full-Stack Developer <span className="hero__role-emphasis">| Java | React</span>
          </motion.p>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="hero__tagline">
            I build web applications with Java, Spring Boot and React.
            Seeking internship and placement opportunities in full-stack development.
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
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="Gaurav Kumar on GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0022 12c0-6.63-5.37-12-12-12z"/>
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
          <div className="hero__stack-note"><span>MY EVERYDAY TOOLKIT</span>{['Java', 'Spring Boot', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((name) => <strong key={name}>{name}</strong>)}</div>
        </motion.div>

        <div className="hero__visual">
        <div className="hero__visual-label"><span>THE PERSON BEHIND THE CODE</span><span>↘</span></div>
        <motion.div
          className="hero__portrait-scene"
          initial={{ opacity: 0, scale: 0.88, x: 60 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: reducedMotion ? 0 : normalised.x * 10,
            y: reducedMotion ? 0 : normalised.y * 6,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, mass: 0.7 }}
          style={{
            '--portrait-rx': `${normalised.y * -5}deg`,
            '--portrait-ry': `${normalised.x * 7}deg`,
          } as CSSProperties}
          aria-label="3D portrait of Gaurav Kumar"
        >
          <div className="hero__portrait-shadow" aria-hidden="true" />
          <motion.div
            className="hero__portrait-stage"
            animate={{ rotateY: reducedMotion ? 0 : [-7, -7, 353, 353] }}
            transition={{ duration: 26, times: [0, 0.68, 0.84, 1], repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__portrait-frame hero__portrait-frame--back" aria-hidden="true" />
            <div className="hero__portrait-frame hero__portrait-frame--mid" aria-hidden="true" />
            <div className="hero__portrait-card hero__portrait-card--front">
              <img src={portrait} alt="Gaurav Kumar in a modern workspace" width={1050} height={1400} fetchPriority="high" decoding="async" className="hero__portrait-image" />
              <div className="hero__portrait-shine" aria-hidden="true" />
              <div className="hero__portrait-caption">
                <span>Full-Stack Developer</span>
                <strong>GK · 01</strong>
              </div>
            </div>
            <div className="hero__portrait-card hero__portrait-card--rear" aria-hidden="true">
              <img src={portrait} alt="" width={1050} height={1400} decoding="async" className="hero__portrait-image hero__portrait-image--rear" />
              <div className="hero__portrait-backplate">
                <span>GK</span>
                <small>Full-Stack · AI · Systems</small>
              </div>
            </div>
          </motion.div>
          <div className="hero__portrait-ring hero__portrait-ring--one" aria-hidden="true" />
          <div className="hero__portrait-ring hero__portrait-ring--two" aria-hidden="true" />
        </motion.div>
        <div className="hero__visual-note"><span className="hero__note-symbol">↗</span><div><strong>Ideas → real products</strong><span>Full-stack development · AI applications</span></div></div>
        <span className="hero__photo-hint">A LITTLE PERSPECTIVE. A LOT OF POSSIBILITY.</span>
        </div>

        <div className="hero__side-note" aria-hidden="true">
          <span>Based in India · Building for the web</span>
        </div>

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
