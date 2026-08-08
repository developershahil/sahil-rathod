import './SkillCard.css';

/**
 * SkillCard — displays a category of technical skills
 * @param {{ skill: Object }} props - { id, category, icon, items }
 */
const SkillCard = ({ skill }) => {
  const { category, icon, items } = skill;

  return (
    <div className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__icon" aria-hidden="true">{icon}</span>
        <h3 className="skill-card__category">{category}</h3>
      </div>
      <ul className="skill-card__items" aria-label={`${category} skills`}>
        {items.map(({ name }) => (
          <li key={name} className="skill-card__item">
            <span className="skill-card__dot" aria-hidden="true" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
