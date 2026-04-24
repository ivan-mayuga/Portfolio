import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { skillsSectionData } from "../data/portfolioData";

function Skills() {
  return (
    <section className="skills-section section-anchor" id="skills">
      <div className="skills-container">
        <Reveal delay={20}>
          <SectionTitle
            title={skillsSectionData.title}
            subtitle={skillsSectionData.subtitle}
          />
        </Reveal>

        <div className="tech-grid">
          {skillsSectionData.items.map((skill, index) => (
            <Reveal key={skill.name} delay={80 + index * 60}>
              <SkillCard icon={skill.icon} name={skill.name} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
