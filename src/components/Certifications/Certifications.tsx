import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, type Certification } from '../../data/certifications';
import { fadeUpCustom } from '../../utils/animations';
import './Certifications.css';

export function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };

    if (activeCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert]);

  return (
    <section id="certifications" className="section certifications" aria-labelledby="certs-heading">
      <div className="container">

        {/* Section Header */}
        <div className="certs__header">
          <span className="section-number">05</span>
          <div className="divider" />
        </div>

        {/* Section Title & Intro */}
        <motion.div
          className="certs__intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={fadeUpCustom(0)}
        >
          <div className="certs__title-wrap">
            <h2 id="certs-heading" className="certs__heading">Certifications</h2>
            <div className="certs__accent-line" aria-hidden="true" />
          </div>
          <p className="certs__lead">
            Formal credentials and coursework validating technical foundations in networking, software quality, and full-stack development.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="certs__grid">
          {certifications.map((cert, index) => {
            const isCompleted = cert.status === 'Completed';
            const hasCertificate = Boolean(cert.downloadUrl || cert.previewImage);

            return (
              <motion.article
                key={cert.id}
                className={`cert-card ${isCompleted ? 'cert-card--completed' : 'cert-card--in-progress'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUpCustom((index + 1) * 0.08)}
                aria-label={`${cert.title} by ${cert.issuer}`}
              >
                {/* Meta row: Eyebrow + Status badge */}
                <div className="cert-card__meta">
                  <div className="cert-card__eyebrow-wrap">
                    <svg
                      className="cert-card__icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    <span className="cert-card__eyebrow">CERTIFICATION</span>
                  </div>

                  {isCompleted ? (
                    <span className="cert-card__badge cert-card__badge--completed">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="2.5 6 5 8.5 9.5 3.5" />
                      </svg>
                      Completed
                    </span>
                  ) : (
                    <span className="cert-card__badge cert-card__badge--in-progress">
                      <span className="cert-card__pulse-dot" aria-hidden="true" />
                      In Progress
                    </span>
                  )}
                </div>

                {/* Main Card Content with Optional Preview Thumbnail */}
                <div className="cert-card__body">
                  {cert.previewImage && (
                    <button
                      type="button"
                      className="cert-card__thumb-btn"
                      onClick={() => setActiveCert(cert)}
                      aria-label={`Preview certificate for ${cert.title}`}
                      title="Click to preview certificate"
                    >
                      <img
                        src={cert.previewImage}
                        alt={`${cert.title} certificate awarded to Gaurav Kumar`}
                        className="cert-card__thumb-img"
                        loading="lazy"
                      />
                      <span className="cert-card__thumb-overlay">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        Preview
                      </span>
                    </button>
                  )}

                  <div className="cert-card__info">
                    <h3 className="cert-card__title">{cert.title}</h3>
                    <p className="cert-card__issuer">
                      <span className="cert-card__issuer-prefix">Issuer:</span>
                      <span className="cert-card__issuer-name">{cert.issuer}</span>
                    </p>
                    {cert.completionDate && (
                      <span className="cert-card__date">
                        Issued: {cert.completionDate}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Row: View + Download */}
                <div className="cert-card__footer">
                  <div className="cert-card__actions">
                    {hasCertificate ? (
                      <>
                        <button
                          type="button"
                          className="cert-card__btn cert-card__btn--view"
                          onClick={() => setActiveCert(cert)}
                          aria-label={`Preview certificate for ${cert.title}`}
                        >
                          View ↗
                        </button>

                        <a
                          href={cert.downloadUrl}
                          download={cert.downloadFilename || `${cert.title}-Certificate.pdf`}
                          className="cert-card__btn cert-card__btn--download"
                          aria-label={`Download certificate for ${cert.title}`}
                          title="Download certificate"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download
                        </a>
                      </>
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        className="cert-card__btn cert-card__btn--disabled"
                        title={isCompleted ? 'Verified certificate on file' : 'Certification currently in progress'}
                      >
                        View Certificate ↗
                      </button>
                    )}
                  </div>

                  <span className="cert-card__hint">
                    {hasCertificate ? 'Verified Certificate' : isCompleted ? 'Credential on file' : 'Ongoing coursework'}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Lightbox Preview Modal rendered via React Portal directly into document.body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeCert && (
            <div
              className="cert-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeCert.title} Certificate Preview`}
            >
              {/* Backdrop */}
              <motion.div
                className="cert-modal__backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCert(null)}
              />

              {/* Modal Dialog Card */}
              <motion.div
                className="cert-modal__card"
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Modal Header */}
                <div className="cert-modal__header">
                  <div className="cert-modal__title-group">
                    <h3 className="cert-modal__title">{activeCert.title}</h3>
                    <span className="cert-modal__subtitle">
                      {activeCert.issuer} {activeCert.completionDate ? `• ${activeCert.completionDate}` : ''}
                    </span>
                  </div>

                  <div className="cert-modal__header-actions">
                    {activeCert.downloadUrl && (
                      <a
                        href={activeCert.downloadUrl}
                        download={activeCert.downloadFilename || `${activeCert.title}-Certificate.pdf`}
                        className="cert-modal__download-btn"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Certificate
                      </a>
                    )}

                    <button
                      type="button"
                      className="cert-modal__close-btn"
                      onClick={() => setActiveCert(null)}
                      aria-label="Close certificate preview"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Certificate Image Frame */}
                <div className="cert-modal__image-wrap">
                  <img
                    src={activeCert.previewImage}
                    alt={`${activeCert.title} Certificate`}
                    className="cert-modal__image"
                  />
                </div>

                {/* Modal Footer */}
                <div className="cert-modal__footer">
                  <span>Official Certificate issued by {activeCert.issuer}</span>
                  <span className="cert-modal__hint-key">Press ESC or click outside to close</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
