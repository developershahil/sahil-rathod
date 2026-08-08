import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import projects from '../../data/projects';
import './Projects.css';

const FILTERS = ['All', 'Featured', 'Web Dev', 'Tools & AI'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const titleRef = useScrollAnimation();
  const gridRef  = useScrollAnimation({ threshold: 0.05 });

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return p.featured;
    if (activeFilter === 'Web Dev') return p.technologies.some((t) =>
      ['PHP', 'JavaScript', 'HTML', 'CSS', '.NET', 'Bootstrap'].includes(t)
    );
    if (activeFilter === 'Tools & AI') return p.technologies.some((t) =>
      ['Python', 'Google Gemini API', 'AI/ML'].includes(t)
    );
    return true;
  });

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="reveal" ref={titleRef}>
          <SectionTitle
            label="04 / PROJECTS"
            title="What I've Built"
            subtitle="A selection of personal and academic projects — from full-stack web apps to AI-powered tools."
          />
        </div>

        {/* Filter tabs */}
        <div className="projects__filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects__filter-btn ${activeFilter === f ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid reveal" ref={gridRef}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filtered.length === 0 && (
            <p className="projects__empty text-secondary">No projects match this filter.</p>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="projects__github-cta reveal" ref={useScrollAnimation()}>
          <div className="projects__github-card">
            <div className="projects__github-content">
              <h3>See all my work on GitHub</h3>
              <p>All source code is publicly available for recruiters and collaborators to review.</p>
            </div>
            <a
              href="https://github.com/developershahil"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__github-btn"
              aria-label="View all projects on GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              github.com/developershahil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
