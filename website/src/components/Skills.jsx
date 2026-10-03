import { skills } from "../data";
import { SectionHeading, Tags } from "./Shared";
export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section section"
      aria-labelledby="skills-title"
    >
      <div className="shell">
        <SectionHeading
          id="skills-title"
          number="03"
          eyebrow="Capabilities & tools"
          title="A practical security toolkit."
          description="Workplace capabilities supported by programming, networking, and hands-on academic security labs."
        />
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <span className="skill-number" aria-hidden="true">
                {skill.number}
              </span>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
              <Tags items={skill.tools} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
