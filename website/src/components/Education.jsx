import { SectionHeading } from "./Shared";
export default function Education() {
  return (
    <section
      id="credentials"
      className="shell section credentials"
      aria-labelledby="credentials-title"
    >
      <SectionHeading
        id="credentials-title"
        number="05"
        eyebrow="Education & certification"
        title="A foundation in systems and security."
      />
      <div className="credentials-grid">
        <article className="credential-card cert-card">
          <span className="credential-type">Professional certification</span>
          <h3>Certified in Cybersecurity</h3>
          <p className="credential-provider">ISC2 · CC</p>
          <p>Sep 2024 — Aug 2027</p>
        </article>
        <article className="credential-card">
          <span className="credential-type">Master of Engineering</span>
          <h3>
            Telecommunications &amp;
            <br />
            Information Security
          </h3>
          <p className="credential-provider">University of Victoria</p>
          <p>2023 — 2024</p>
        </article>
        <article className="credential-card">
          <span className="credential-type">Bachelor of Science</span>
          <h3>Computer Science</h3>
          <p className="credential-provider">University of Victoria</p>
          <p>2018 — 2023</p>
        </article>
      </div>
    </section>
  );
}
