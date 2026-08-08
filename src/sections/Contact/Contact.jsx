import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { CONTACT_INFO, SOCIAL_LINKS, SITE_META } from '../../utils/constants';
import './Contact.css';

const CONTACT_CARDS = [
  {
    id: 'email',
    icon: '✉️',
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    mono: true,
  },
  {
    id: 'phone',
    icon: '📱',
    label: 'Phone',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
    mono: true,
  },
  {
    id: 'location',
    icon: '📍',
    label: 'Location',
    value: CONTACT_INFO.location,
    href: null,
    mono: false,
  },
  {
    id: 'github',
    icon: '🐙',
    label: 'GitHub',
    value: `github.com/${SITE_META.githubUsername}`,
    href: SOCIAL_LINKS.github,
    mono: true,
    external: true,
  },
  {
    id: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/sahil-rathod',
    href: SOCIAL_LINKS.linkedin,
    mono: true,
    external: true,
  },
];

const Contact = () => {
  const titleRef = useScrollAnimation();
  const cardsRef = useScrollAnimation({ threshold: 0.1 });
  const ctaRef   = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="reveal" ref={titleRef}>
          <SectionTitle
            label="06 / CONTACT"
            title="Get In Touch"
            subtitle="I'm open to software development roles, IT positions, and technical support opportunities. Feel free to reach out."
            align="center"
          />
        </div>

        {/* Main CTA block */}
        <div className="contact__cta-block reveal" ref={ctaRef}>
          <div className="contact__cta-text">
            <h3>Ready to work together?</h3>
            <p>Send me an email and I'll get back to you as soon as possible.</p>
          </div>
          <Button
            variant="primary"
            href={`mailto:${CONTACT_INFO.email}`}
            icon={
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            }
          >
            Send Email
          </Button>
        </div>

        {/* Contact cards */}
        <div className="contact__cards reveal" ref={cardsRef}>
          {CONTACT_CARDS.map((card, i) => {
            const inner = (
              <>
                <span className="contact__card-icon" aria-hidden="true">{card.icon}</span>
                <div>
                  <p className="contact__card-label">{card.label}</p>
                  <p className={`contact__card-value ${card.mono ? 'font-mono' : ''}`}>
                    {card.value}
                  </p>
                </div>
                {card.href && (
                  <span className="contact__card-arrow" aria-hidden="true">→</span>
                )}
              </>
            );

            return card.href ? (
              <a
                key={card.id}
                href={card.href}
                className="contact__card contact__card--link"
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                style={{ transitionDelay: `${i * 60}ms` }}
                aria-label={`${card.label}: ${card.value}`}
              >
                {inner}
              </a>
            ) : (
              <div
                key={card.id}
                className="contact__card"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
