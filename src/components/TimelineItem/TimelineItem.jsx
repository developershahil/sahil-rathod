import './TimelineItem.css';

/**
 * TimelineItem — a single entry in the professional journey timeline
 * @param {{ item: Object, isLast: boolean }} props
 */
const TimelineItem = ({ item, isLast = false }) => {
  const { company, role, type, period, description, responsibilities, technologies } = item;

  return (
    <div className={`timeline-item ${isLast ? 'timeline-item--last' : ''}`}>
      {/* Line + Dot */}
      <div className="timeline-item__marker">
        <div className="timeline-item__dot">
          <span className="timeline-item__dot-ping" aria-hidden="true" />
        </div>
        {!isLast && <div className="timeline-item__line" aria-hidden="true" />}
      </div>

      {/* Content */}
      <div className="timeline-item__content">
        {/* Header */}
        <div className="timeline-item__header">
          <div>
            <span className="timeline-item__type font-mono text-accent">{type}</span>
            <h3 className="timeline-item__company">{company}</h3>
            <p className="timeline-item__role">{role}</p>
          </div>
          <time className="timeline-item__period font-mono">{period}</time>
        </div>

        {/* Description */}
        <p className="timeline-item__description">{description}</p>

        {/* Responsibilities */}
        {responsibilities && responsibilities.length > 0 && (
          <ul className="timeline-item__responsibilities" aria-label="Key responsibilities">
            {responsibilities.map((resp, i) => (
              <li key={i} className="timeline-item__resp-item">{resp}</li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="timeline-item__tech" aria-label="Technologies used">
            {technologies.map((tech) => (
              <span key={tech} className="badge">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
