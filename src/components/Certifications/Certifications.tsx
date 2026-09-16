import { motion } from 'framer-motion';
import './Certifications.css';

export function Certifications() {
  return (
    <section id="certifications" className="section certifications" aria-labelledby="certs-heading">
      <div className="container">

        <div className="certs__header">
          <span className="section-number">05</span>
          <div className="divider" />
        </div>

        <motion.div
          className="certs__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="certs__text">
            <h2 id="certs-heading" className="certs__heading">Certifications</h2>
            <p className="certs__placeholder">
              Currently pursuing coursework and certifications. This section will be
              updated as credentials are obtained.
            </p>
          </div>

          {/* Decorative element */}
          <div className="certs__decoration" aria-hidden="true">
            <div className="certs__deco-ring certs__deco-ring--1" />
            <div className="certs__deco-ring certs__deco-ring--2" />
            <div className="certs__deco-ring certs__deco-ring--3" />
            <div className="certs__deco-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="rgba(110,231,183,0.4)" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
