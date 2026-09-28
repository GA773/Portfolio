import { motion } from 'framer-motion';
import { education } from '../../data/education';
import { fadeUpCustom } from '../../utils/animations';
import './Education.css';

export function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-heading">
      <div className="container">

        {/* Header */}
        <div className="education__header">
          <span className="section-number">04</span>
          <div className="divider" />
        </div>

        <div className="education__grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUpCustom(0)}
            className="education__headline"
          >
            <h2 id="education-heading" className="education__heading">Education</h2>
            <div className="education__accent-line" aria-hidden="true" />
          </motion.div>

          <div className="education__timeline">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                className="edu-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUpCustom((i + 1) * 0.1)}
              >
                {/* Timeline dot */}
                <div className="edu-item__dot" aria-hidden="true">
                  <div className="edu-item__dot-inner" />
                </div>

                <div className="edu-item__content">
                  <div className="edu-item__meta">
                    <span className="edu-item__period">{edu.period}</span>
                    {edu.status && (
                      <span className="edu-item__status">
                        <span className="edu-item__status-dot" aria-hidden="true" />
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <h3 className="edu-item__institution">{edu.institution}</h3>
                  <p className="edu-item__degree">
                    {edu.degree}{edu.field ? ` — ${edu.field}` : ''}
                  </p>
                  <p className="edu-item__location">{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
