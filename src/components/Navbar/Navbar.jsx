import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, SITE_META } from '../../utils/constants';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen]       = useState(false);
  const navRef = useRef(null);

  // Detect scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} ref={navRef}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          aria-label="Sahil Rathod — home"
        >
          <span className="navbar__logo-initials">SR</span>
          <span className="navbar__logo-name">{SITE_META.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${activeSection === href.replace('#', '') ? 'navbar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="navbar__cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__drawer-links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              className={`navbar__drawer-link ${activeSection === href.replace('#', '') ? 'navbar__drawer-link--active' : ''}`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="navbar__drawer-cta" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
            Hire Me
          </a>
        </nav>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </header>
  );
};

export default Navbar;
