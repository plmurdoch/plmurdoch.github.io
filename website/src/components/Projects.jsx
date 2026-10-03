import { projects, profile } from "../data";
import { SectionHeading, Tags, Arrow } from "./Shared";
export default function Projects() {
  return (
    <section
      id="projects"
      className="shell section"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        id="projects-title"
        number="04"
        eyebrow="Selected technical work"
        title="From security concepts to evidence."
        description="Academic projects and labs with public code or reports. Each entry identifies its context and the work performed."
      />
      <div className="project-grid">
        {projects.map((project, i) => (
          <article className="project-card" key={project.id}>
            <div className="project-top">
              <p>{project.category}</p>
              <span aria-hidden="true">0{i + 1}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-detail">{project.detail}</p>
            <Tags items={project.tools} />
            <a className="project-link" href={project.link}>
              {project.action}
              <Arrow diagonal />
            </a>
          </article>
        ))}
      </div>
      <div className="more-work">
        <p>
          Additional work in networking, databases, and software development.
        </p>
        <a className="text-link" href={profile.github}>
          Explore GitHub <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
