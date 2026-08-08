import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import education from '../../data/education';
import './Education.css';

const CapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const Education = () => {
  const titleRef = useScrollAnimation();
  const cardsRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="education section section--alt">
      <div className="container">
        <div className="reveal" ref={titleRef}>
          <SectionTitle
            label="05 / EDUCATION"
            title="Academic Background"
            subtitle="Formal education in Computer Science and Financial Technology."
            align="center"
          />
        </div>

        <div className="education__grid reveal" ref={cardsRef}>
          {education.map((edu, i) => (
            <article
              key={edu.id}
              className="education__card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="education__card-header">
                <div className="education__icon-wrap">
                  <CapIcon />
                </div>
                <time className="education__period font-mono">{edu.period}</time>
              </div>

              <div className="education__card-body">
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__institution">{edu.institution}</p>
                <p className="education__location text-muted font-mono">{edu.location}</p>
              </div>

              <p className="education__description">{edu.description}</p>

              {edu.highlights && (
                <div className="education__highlights">
                  {edu.highlights.map((h) => (
                    <span key={h} className="badge">{h}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
