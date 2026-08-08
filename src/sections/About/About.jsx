import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './About.css';

const HIGHLIGHTS = [
  {
    icon: '⌨️',
    title: 'Software Development',
    desc: 'Building web apps and systems with .NET, PHP, Python, JavaScript, and relational databases.',
  },
  {
    icon: '🖥️',
    title: 'IT Technical Support',
    desc: 'Hardware troubleshooting, system configuration, LAN/Wi-Fi networking, and Windows OS support.',
  },
  {
    icon: '☁️',
    title: 'SaaS Application Support',
    desc: 'User onboarding, issue resolution, and technical support for cloud-based restaurant management platforms.',
  },
  {
    icon: '🗄️',
    title: 'Database Management',
    desc: 'Designing and querying MySQL, SQL Server, and PostgreSQL databases with stored procedures and ADO.NET.',
  },
];

const About = () => {
  const sectionRef = useScrollAnimation();
  const highlightsRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="about section section--alt">
      <div className="container">
        <div className="reveal" ref={sectionRef}>
          <SectionTitle
            label="01 / ABOUT"
            title="Who I Am"
            subtitle="A technical professional who bridges software development with IT operations."
          />
        </div>

        <div className="about__grid">
          {/* Bio text */}
          <div className="about__bio reveal reveal-left" ref={useScrollAnimation()}>
            <p>
              I'm <strong>Sahil Rathod</strong>, a Software & Technical Professional based in Jamnagar, Gujarat, India.
              With a background spanning software development, IT technical support, and SaaS application support,
              I work across the full technical stack — from writing code to keeping systems running.
            </p>
            <p>
              My experience at <strong>Optimized Technolab</strong> gave me hands-on expertise in IT infrastructure,
              hardware troubleshooting, and network configuration. At <strong>Orderloop</strong>, I contributed to PHP
              development and provided technical support for a SaaS restaurant management platform, working closely with
              both the engineering and customer-facing teams.
            </p>
            <p>
              Academically, I hold a <strong>M.Sc. IT FinTech</strong> from Marwadi University and a
              <strong> BCA</strong> from H J Doshi IT Institute — giving me a strong foundation in computer science,
              financial technology, and software systems.
            </p>
            <p>
              I enjoy building practical software that solves real problems, and I bring the same
              problem-solving mindset to technical support and operations work.
            </p>

            {/* Key values */}
            <div className="about__values">
              {['Practical Problem Solver', 'Detail-Oriented', 'Fast Learner', 'Team Player'].map((v) => (
                <span key={v} className="about__value-tag">
                  <span className="text-accent">✓</span> {v}
                </span>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="about__card-wrap reveal reveal-right" ref={useScrollAnimation()}>
            <div className="about__profile-card">
              <div className="about__avatar" aria-label="Sahil Rathod initials avatar">
                <span>SR</span>
              </div>
              <h3 className="about__card-name">Sahil Rathod</h3>
              <p className="about__card-role font-mono text-accent">Software & Technical Professional</p>
              <div className="about__card-meta">
                <div className="about__meta-item">
                  <span className="about__meta-icon">📍</span>
                  <span>Jamnagar, Gujarat, India</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-icon">🎓</span>
                  <span>M.Sc. IT FinTech</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-icon">💼</span>
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="about__highlights reveal" ref={highlightsRef}>
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              className="about__highlight-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="about__highlight-icon" aria-hidden="true">{h.icon}</span>
              <h4 className="about__highlight-title">{h.title}</h4>
              <p className="about__highlight-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
