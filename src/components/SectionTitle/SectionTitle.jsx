import './SectionTitle.css';

/**
 * SectionTitle — consistent heading block for each section
 *
 * @param {string} label     - Small overline text (e.g. "01 / ABOUT")
 * @param {string} title     - Main heading
 * @param {string} subtitle  - Optional supporting paragraph
 * @param {string} align     - 'left' | 'center' (default 'left')
 */
const SectionTitle = ({ label, title, subtitle, align = 'left' }) => {
  return (
    <div className={`section-title section-title--${align}`}>
      {label && (
        <span className="section-title__label font-mono text-accent">
          {label}
        </span>
      )}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
