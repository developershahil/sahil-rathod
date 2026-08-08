import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TimelineItem from '../../components/TimelineItem/TimelineItem';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import experience from '../../data/experience';
import './Journey.css';

const Journey = () => {
  const titleRef    = useScrollAnimation();
  const timelineRef = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="journey" className="journey section section--alt">
      <div className="container">
        <div className="reveal" ref={titleRef}>
          <SectionTitle
            label="03 / JOURNEY"
            title="Professional Journey"
            subtitle="My career path — from IT infrastructure support to software development and SaaS operations."
          />
        </div>

        <div className="journey__timeline reveal" ref={timelineRef}>
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
