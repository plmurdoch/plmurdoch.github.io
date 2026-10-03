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
          Connecting security operations
          <br />
          with data protection.
        </h2>
      </div>
      <div className="about-copy">
        <p>
          Experience spans security administration at TuGo and data security,
          governance, and Security Operations support at Tru Cooperative Bank,
          formerly First West Credit Union.
        </p>
        <p>
          A computer science background and an MEng in Telecommunications and
          Information Security support practical work with security platforms,
          investigation workflows, network analysis, and security controls.
        </p>
        <a className="quiet-link" href="#projects">
          See the technical work below ↓
        </a>
      </div>
    </section>
  );
}
