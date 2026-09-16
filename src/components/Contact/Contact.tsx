import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUpCustom } from '../../utils/animations';
import './Contact.css';

const LINKEDIN_URL = 'https://linkedin.com/in/gaurav-kumar-7897a52b5';
const EMAIL = 'gauravkumar9282@gmail.com';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container">

        {/* Header */}
        <div className="contact__header">
          <span className="section-number">06</span>
          <div className="divider" />
        </div>

        <div className="contact__grid">
          {/* Left: headline + links */}
          <motion.div
            className="contact__left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUpCustom(0)}>
              <h2 id="contact-heading" className="contact__heading">
                Let's build<br />something.
              </h2>
            </motion.div>

            <motion.p variants={fadeUpCustom(0.1)} className="contact__sub">
              I'm open to internships, collaborations, and interesting engineering conversations.
            </motion.p>

            <motion.div variants={fadeUpCustom(0.2)} className="contact__links">
              <a
                href={`mailto:${EMAIL}`}
                className="contact__link"
                aria-label="Send email to Gaurav Kumar"
              >
                <div className="contact__link-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__link-label">Email</div>
                  <div className="contact__link-value">{EMAIL}</div>
                </div>
                <svg className="contact__link-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="Connect with Gaurav Kumar on LinkedIn"
              >
                <div className="contact__link-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.852 0-2.136 1.446-2.136 2.939v5.667H9.987V9h3.101v1.561h.044c.432-.818 1.487-1.681 3.061-1.681 3.272 0 3.875 2.153 3.875 4.952v6.62zM5.337 7.433a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM6.761 20.452H3.912V9h2.849v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__link-label">LinkedIn</div>
                  <div className="contact__link-value">gaurav-kumar-7897a52b5</div>
                </div>
                <svg className="contact__link-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="contact__right"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          >
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              aria-label="Contact form"
              noValidate
            >
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                className="btn btn-primary contact__submit"
                aria-label="Send message via email"
              >
                Send Message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
