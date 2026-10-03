import { experience } from "../data";
import { SectionHeading, Tags } from "./Shared";
export default function Experience() {
  return (
    <section
      id="experience"
      className="shell section"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        id="experience-title"
        number="02"
        eyebrow="Professional experience"
        title="Security work, in practice."
        description="Experience across financial services and insurance, from security administration to data protection and investigation support."
      />
      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-entry" key={job.company + job.role}>
            <div className="experience-meta">
              <p className="job-dates">{job.dates}</p>
              <p className="job-company">{job.company}</p>
              {job.context && <p className="job-context">{job.context}</p>}
              {job.current && (
                <span className="current-label">Current role</span>
              )}
            </div>
            <div className="experience-body">
              <h3>{job.role}</h3>
              {job.qualifier && (
                <p className="job-qualifier">{job.qualifier}</p>
              )}
              <p className="job-summary">{job.summary}</p>
              <ul className="job-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Tags items={job.tags} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
