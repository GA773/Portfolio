import { useEffect, useRef, useState } from 'react';
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
        const color = isUp ? '#b6ff6a' : '#ff6b8b';
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
        stroke="#b6ff6a"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 3"
        opacity="0.5"
      />

      {/* Actual line */}
      <polyline
        points="30,140 90,100 150,95 210,100 270,75 330,80 390,85 450,62 510,70 560,77"
        stroke="#9b87f5"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Legend */}
      <g>
        <circle cx="20" cy="210" r="3" fill="#9b87f5" />
        <text x="30" y="214" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="DM Mono, monospace">Historical data</text>
        <circle cx="150" cy="210" r="3" fill="#b6ff6a" />
        <text x="160" y="214" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="DM Mono, monospace">Model forecast</text>
      </g>
    </svg>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const project = projects[0];
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => modalRef.current?.querySelector<HTMLButtonElement>('button')?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
      if (event.key !== 'Tab') return;
      const nodes = modalRef.current?.querySelectorAll<HTMLElement>('a[href], button:not(:disabled), [tabindex="0"]');
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [selectedProject]);

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
              <div className="dashboard-top"><span>◈ &nbsp; STOCK VISION</span><span>Overview &nbsp; •••</span></div>
              <div className="dashboard-title"><small>MARKET INTELLIGENCE</small><strong>See the bigger picture.</strong><span>Historical trends + multimodal forecasts</span></div>
              <StockViz />
              <div className="dashboard-bottom"><span>01 &nbsp; Historical analysis</span><span>02 &nbsp; Predictive models</span></div>
              <p className="dashboard-demo">Illustrative project preview</p>
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
              {project.features.slice(0, 3).map((f) => (
                <li key={f} className="project-card__feature">
                  <span className="project-card__feature-dot" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Tech stack tags */}
            <div className="project-card__stack" aria-label="Technologies used">
              {Array.from(new Set(project.stack)).map((tech) => (
                <span key={tech} className="project-card__tech">{tech}</span>
              ))}
            </div>

            {/* Actions */}
            <div className="project-card__actions">
              {project.githubUrl ? (
                <a className="btn btn-primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}>GitHub ↗</a>
              ) : <button className="btn btn-primary" disabled aria-describedby="project-link-note">GitHub</button>}
              {project.liveUrl ? (
                <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo (opens in a new tab)`}>Live Demo ↗</a>
              ) : <button className="btn btn-ghost" disabled aria-describedby="project-link-note">Live Demo — Coming Soon</button>}
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
            {(!project.githubUrl || !project.liveUrl) && <p id="project-link-note" className="project-card__link-note">{!project.githubUrl && !project.liveUrl ? 'Repository and live demo links are not yet available.' : !project.liveUrl ? 'Live demo link is not yet available.' : 'Repository link is not yet available.'}</p>}
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
              ref={modalRef}
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
