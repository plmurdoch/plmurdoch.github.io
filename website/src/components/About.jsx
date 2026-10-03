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
          Information Security underpin work with detection models, network
          controls, and identity configuration. Current work includes SOC alert
          and report tuning through Log Analytics and Logic Apps.
        </p>
        <p>
          Technical interests include cybersecurity engineering, detection, and
          automation, building on operational investigations, Python projects,
          and firewall labs.
        </p>
        <a className="quiet-link" href="#projects">
          See the technical work below ↓
        </a>
      </div>
    </section>
  );
}
