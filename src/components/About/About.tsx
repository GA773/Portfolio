import { motion } from 'framer-motion';
import { fadeUpCustom } from '../../utils/animations';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">

        {/* Header row */}
        <div className="about__header">
          <span className="section-number">01</span>
          <div className="divider" />
        </div>

        {/* Large editorial block */}
        <div className="about__grid">
          {/* Left: large heading */}
          <motion.div
            className="about__headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUpCustom(0)}
          >
            <h2 id="about-heading" className="about__heading">
              About
            </h2>
            <div className="about__accent-line" aria-hidden="true" />
            <p className="section-aside">Curiosity drives the idea.<br />Engineering makes it real.</p>
            <div className="about__signature" aria-hidden="true">
              <div className="about__signature-mark">
                <svg viewBox="0 0 40 32" fill="none">
                  <path d="M18 8a9 9 0 1 0 0 16v-8h-7M24 6v20M35 6 24 16l12 10" stroke="currentColor" strokeWidth="2.7" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="about__signature-copy">
                <strong>Gaurav Kumar</strong>
                <span>Full-stack developer</span>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <div className="about__body">
            <motion.p
              className="about__lead"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUpCustom(0.1)}
            >
              I'm a Computer Science &amp; Information Technology student building
              full-stack applications that combine{' '}
              <span className="text-accent">clean engineering</span> with real-world utility.
            </motion.p>

            <motion.div
              className="about__facts"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUpCustom(0.2)}
            >
              <div className="about__fact">
                <span className="about__fact-label">Focus</span>
                <p className="about__fact-value">
                  Full-stack development with strong interest in backend architecture,
                  AI-driven applications, and scalable system design.
                </p>
              </div>

              <div className="about__fact">
                <span className="about__fact-label">Core Stack</span>
                <p className="about__fact-value">
                  Java and JavaScript on both sides of the stack — React.js on the frontend,
                  Node.js / Express.js and Spring Boot on the backend.
                </p>
              </div>

              <div className="about__fact">
                <span className="about__fact-label">Data</span>
                <p className="about__fact-value">
                  Comfortable with relational and document databases —
                  PostgreSQL, MySQL, and MongoDB.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about__tags"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUpCustom(0.3)}
            >
              {[
                'Full-Stack Development',
                'Backend Architecture',
                'AI Applications',
                'Scalable Systems',
                'REST APIs',
                'Database Design',
              ].map((tag) => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
