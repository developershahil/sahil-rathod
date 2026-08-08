import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import ResumePreview from '../../components/ResumePreview/ResumePreview';
import useMousePosition from '../../hooks/useMousePosition';
import { SITE_META, SOCIAL_LINKS } from '../../utils/constants';
import './Hero.css';

const TERMINAL_LINES = [
  { prompt: '$ whoami',          output: 'sahil-rathod',                          delay: 400 },
  { prompt: '$ cat role.txt',    output: 'Software & Technical Professional',     delay: 1200 },
  { prompt: '$ ls skills/',      output: 'dev/  databases/  it-support/  saas/',  delay: 2100 },
  { prompt: '$ git status',      output: 'On branch main — ready to contribute',  delay: 3000 },
  { prompt: '$ echo $status',    output: 'Building practical solutions...',        delay: 3900 },
];

const TerminalLine = ({ line, visible }) => (
  <div className={`terminal__line ${visible ? 'terminal__line--visible' : ''}`}>
    <span className="terminal__prompt">{line.prompt}</span>
    {visible && (
      <span className="terminal__output">{line.output}</span>
    )}
  </div>
);

const Hero = () => {
  const mouse = useMousePosition();
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const headingRef = useRef(null);

  // Reveal terminal lines one by one
  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Parallax for grid
  const parallaxStyle = {
    transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px)`,
  };

  const handleViewWork = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    setIsResumeOpen(true);
  };

  return (
    <section id="hero" className="hero section">
      {/* Animated background grid */}
      <div className="hero__bg grid-bg" style={parallaxStyle} aria-hidden="true" />
      <div className="hero__bg-gradient" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left: Text content */}
        <div className="hero__content">
          <div className="hero__label font-mono text-accent">
            <span className="hero__label-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <h1 className="hero__name" ref={headingRef}>
            <span className="hero__name-first">Sahil</span>
            <br />
            <span className="hero__name-last">Rathod</span>
          </h1>

          <p className="hero__title">
            {SITE_META.title}
          </p>

          <p className="hero__tagline">
            {SITE_META.tagline}
          </p>

          <div className="hero__actions">
            <Button
              variant="primary"
              onClick={handleViewWork}
              href="#projects"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={handleResumeClick}
              href={SITE_META.cvPath}
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              }
            >
              Download CV
            </Button>
            <Button
              variant="ghost"
              href={SOCIAL_LINKS.github}
              external
              icon={
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              }
            >
              GitHub
            </Button>
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="hero__terminal-wrap" aria-label="Developer terminal animation">
          <div className="hero__terminal">
            {/* Terminal top bar */}
            <div className="terminal__topbar" aria-hidden="true">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__topbar-title font-mono">sahil@dev ~ zsh</span>
            </div>

            {/* Terminal body */}
            <div className="terminal__body font-mono">
              {TERMINAL_LINES.map((line, i) => (
                <TerminalLine key={i} line={line} visible={i < visibleLines} />
              ))}
              {/* Blinking cursor */}
              <span
                className="terminal__cursor"
                aria-hidden="true"
                style={{ opacity: showCursor ? 1 : 0 }}
              >
                █
              </span>
            </div>
          </div>

          {/* Floating decorative stat pills */}
          <div className="hero__stat hero__stat--1" aria-hidden="true">
            <span className="hero__stat-value">2+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat hero__stat--2" aria-hidden="true">
            <span className="hero__stat-value">5+</span>
            <span className="hero__stat-label">Projects Built</span>
          </div>
        </div>
      </div>

      <ResumePreview
        src={SITE_META.cvPath}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
