import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { fadeUp } from '../../utils/animations';
import './Projects.css';

/* Animated SVG data visualization — abstract stock chart lines */
function StockViz() {
  return (
    <svg
      className="project-viz"
      viewBox="0 0 600 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[40, 80, 120, 160, 200].map((y) => (
        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {[0, 100, 200, 300, 400, 500, 600].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}

      {/* Candle bodies */}
      {[
        { x: 30,  open: 160, close: 120, high: 100, low: 180 },
        { x: 90,  open: 120, close: 80,  high: 60,  low: 140 },
        { x: 150, open: 80,  close: 110, high: 65,  low: 125 },
        { x: 210, open: 110, close: 90,  high: 75,  low: 130 },
        { x: 270, open: 90,  close: 60,  high: 45,  low: 110 },
        { x: 330, open: 60,  close: 100, high: 40,  low: 115 },
        { x: 390, open: 100, close: 70,  high: 55,  low: 115 },
        { x: 450, open: 70,  close: 50,  high: 35,  low: 90  },
        { x: 510, open: 50,  close: 90,  high: 30,  low: 100 },
        { x: 560, open: 90,  close: 65,  high: 50,  low: 105 },
      ].map((c, i) => {
        const isUp = c.close < c.open;
        const color = isUp ? '#6ee7b7' : '#f87171';
        const top = Math.min(c.open, c.close);
        const h = Math.abs(c.close - c.open);
        return (
          <g key={i}>
            {/* Wick */}
            <line x1={c.x + 10} y1={c.high} x2={c.x + 10} y2={c.low}
              stroke={color} strokeWidth="1" opacity="0.5" />
            {/* Body */}
            <rect x={c.x} y={top} width="20" height={Math.max(h, 4)}
              fill={color} opacity="0.75" rx="2">
              <animate attributeName="opacity" from="0" to="0.75" dur={`${0.3 + i * 0.08}s`} fill="freeze" />
            </rect>
          </g>
        );
      })}

      {/* Prediction line */}
      <polyline
        points="30,140 90,100 150,95 210,100 270,75 330,80 390,85 450,62 510,70 560,77 600,55"
        stroke="#6ee7b7"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 3"
        opacity="0.5"
      />

      {/* Actual line */}
      <polyline
        points="30,140 90,100 150,95 210,100 270,75 330,80 390,85 450,62 510,70 560,77"
        stroke="#93c5fd"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Legend */}
      <g>
        <circle cx="20" cy="210" r="3" fill="#93c5fd" />
        <text x="30" y="214" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif">Live data</text>
        <circle cx="110" cy="210" r="3" fill="#6ee7b7" />
        <text x="120" y="214" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif">GRU prediction</text>
      </g>
    </svg>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const project = projects[0];

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">

        {/* Header */}
        <div className="projects__header">
          <span className="section-number">03</span>
          <div className="divider" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="projects__title-row"
        >
          <h2 id="projects-heading" className="projects__heading">
            Featured<br />Project
          </h2>
          <p className="projects__subtext">
            Selected work that demonstrates<br />technical depth and craft.
          </p>
        </motion.div>

        {/* Project card */}
        <motion.article
          className="project-card"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-label={project.title}
        >
          {/* Visual area */}
          <div className="project-card__visual">
            <div className="project-card__viz-wrap">
              <StockViz />
            </div>
            <div className="project-card__year" aria-label={`Year: ${project.year}`}>
              {project.year}
            </div>
          </div>

          {/* Content area */}
          <div className="project-card__content">
            <div className="project-card__meta">
              <span className="label">Featured Project</span>
              <span className={`project-card__status project-card__status--${project.status}`}>
                {project.status === 'active' ? 'Active' : project.status === 'complete' ? 'Complete' : 'In Progress'}
              </span>
            </div>

            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__subtitle">{project.subtitle}</p>
            <p className="project-card__desc">{project.description}</p>

            {/* Feature list */}
            <ul className="project-card__features" aria-label="Key features">
              {project.features.slice(0, 4).map((f) => (
                <li key={f} className="project-card__feature">
                  <span className="project-card__feature-dot" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Tech stack tags */}
            <div className="project-card__stack" aria-label="Technologies used">
              {project.stack.map((tech) => (
                <span key={tech} className="project-card__tech">{tech}</span>
              ))}
              {project.tools.map((tool) => (
                <span key={tool} className="project-card__tech project-card__tech--tool">{tool}</span>
              ))}
            </div>

            {/* Actions */}
            <div className="project-card__actions">
              <button
                id="project-details-btn"
                className="btn btn-ghost"
                onClick={() => setSelectedProject(project.id)}
                aria-expanded={selectedProject === project.id}
                aria-controls="project-modal"
              >
                View Details
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.article>

      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="project-modal"
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
          >
            <motion.div
              className="project-modal__panel"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                className="project-modal__close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                autoFocus
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="project-modal__header">
                <span className="label">Featured Project</span>
                <h3 className="project-modal__title">{project.title}</h3>
                <p className="project-modal__subtitle">{project.subtitle}</p>
              </div>

              <div className="project-modal__body">
                <section className="project-modal__section">
                  <h4 className="project-modal__section-title">Overview</h4>
                  <p>{project.longDescription}</p>
                </section>

                <section className="project-modal__section">
                  <h4 className="project-modal__section-title">Features</h4>
                  <ul className="project-modal__list">
                    {project.features.map((f) => (
                      <li key={f}>
                        <span className="project-card__feature-dot" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="project-modal__two-col">
                  <section className="project-modal__section">
                    <h4 className="project-modal__section-title">Technology Stack</h4>
                    <div className="project-card__stack">
                      {project.stack.map((tech) => (
                        <span key={tech} className="project-card__tech">{tech}</span>
                      ))}
                    </div>
                  </section>

                  <section className="project-modal__section">
                    <h4 className="project-modal__section-title">Development Tools</h4>
                    <div className="project-card__stack">
                      {project.tools.map((tool) => (
                        <span key={tool} className="project-card__tech project-card__tech--tool">{tool}</span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
