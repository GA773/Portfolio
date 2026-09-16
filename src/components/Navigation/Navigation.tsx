import { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Navigation.css';

const NAV_ITEMS = [
  { label: 'About',         id: 'about',         num: '01' },
  { label: 'Skills',        id: 'skills',         num: '02' },
  { label: 'Projects',      id: 'projects',       num: '03' },
  { label: 'Education',     id: 'education',      num: '04' },
  { label: 'Certifications',id: 'certifications', num: '05' },
  { label: 'Contact',       id: 'contact',        num: '06' },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export function Navigation() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav__logo" aria-label="Gaurav Kumar — Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__logo-mark">GK</span>
        </div>

        {/* Desktop links */}
        <ul className="nav__links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                onClick={() => scrollTo(item.id)}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                <span className="nav__link-num">{item.num}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav__mobile-overlay" role="dialog" aria-label="Mobile navigation">
          <ul className="nav__mobile-links" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="nav__mobile-link"
                  onClick={() => scrollTo(item.id)}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <span className="nav__link-num">{item.num}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
