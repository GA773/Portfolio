import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">GK</span>
          <span className="footer__name">Gaurav Kumar</span>
        </div>

        <p className="footer__copy">
          © {year} Gaurav Kumar. Designed &amp; built with care.
        </p>

        <div className="footer__links">
          <a
            href="https://linkedin.com/in/gaurav-kumar-7897a52b5"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
          >LinkedIn</a>
          <span className="footer__sep" aria-hidden="true">·</span>
          <a
            href="mailto:gauravkumar9282@gmail.com"
            className="footer__link"
            aria-label="Email"
          >Email</a>
        </div>
      </div>
    </footer>
  );
}
