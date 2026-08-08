import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SkillCard from '../../components/SkillCard/SkillCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import skills from '../../data/skills';
import './Skills.css';

const Skills = () => {
  const titleRef = useScrollAnimation();
  const gridRef  = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="reveal" ref={titleRef}>
          <SectionTitle
            label="02 / SKILLS"
            title="Technical Expertise"
            subtitle="A broad skill set spanning software development, databases, IT operations, and application support."
          />
        </div>

        <div className="skills__grid reveal" ref={gridRef}>
          {skills.map((skill, i) => (
            <div
              key={skill.id}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
