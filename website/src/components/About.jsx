export default function About() {
  return (
    <section
      id="about"
      className="about shell section"
      aria-labelledby="about-title"
    >
      <div>
        <p className="eyebrow">
          <span>01</span>About
        </p>
        <h2 id="about-title">
          Connecting investigations
          <br />
          with security engineering.
        </h2>
      </div>
      <div className="about-copy">
        <p>
          Experience spans security administration at TuGo and data security,
          governance, and hands-on SOC investigations at Tru Cooperative Bank,
          formerly First West Credit Union.
        </p>
        <p>
          A BSc in Computer Science and an MEng in Telecommunications and
          Information Security provide a foundation in programming, networking,
          and security. That background supports current work in threat
          investigation, SOC alert and report tuning, Azure identity
          configuration, and data protection.
        </p>
        <p>
          This operational experience informs an interest in cybersecurity
          engineering: improving threat detection and security automation,
          including practical applications of AI. Python detection projects and
          firewall labs complement that experience with hands-on work in
          building, evaluating, and validating security controls.
        </p>
        <a className="quiet-link" href="#projects">
          See the technical work below ↓
        </a>
      </div>
    </section>
  );
}
