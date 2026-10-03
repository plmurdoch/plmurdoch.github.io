import { profile } from "../data";
import { Arrow } from "./Shared";
export default function Intro() {
  return (
    <section id="intro" className="hero shell" aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="location-dot" aria-hidden="true" />
          Cybersecurity · Vancouver, BC
        </p>
        <h1 id="hero-name">
          Payton Murdoch<span>.</span>
        </h1>
        <p className="hero-position">
          Security operations.
          <br />
          <span>Data protection.</span>
        </p>
        <p className="hero-summary">
          Hands-on SOC investigations, shift coverage, and on-call rotations
          in financial services. Experience spans endpoint and email security,
          identity and access, data protection, and phishing simulations.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#experience">
            Explore experience <Arrow />
          </a>
          <a className="button secondary" href="#contact">
            Contact me <Arrow />
          </a>
        </div>
        <p className="hero-focus">
          Focused on cybersecurity analyst and defensive security roles.
        </p>
      </div>
      <aside className="profile-card" aria-label="Professional background">
        <div className="profile-card-top">
          <span className="eyebrow">Professional profile</span>
          <span className="card-mark" aria-hidden="true">
            PM
          </span>
        </div>
        <p className="profile-role">
          Data Security &amp;
          <br />
          Governance Analyst
        </p>
        <p className="profile-company">Tru Cooperative Bank</p>
        <div className="profile-divider" />
        <dl className="profile-facts">
          <div>
            <dt>Operational experience</dt>
            <dd>
              SOC shifts &amp; on-call rotations
              <br />
              Security investigations
            </dd>
          </div>
          <div>
            <dt>Data protection</dt>
            <dd>Microsoft Purview · DLP · IAM</dd>
          </div>
          <div>
            <dt>Credentials</dt>
            <dd>MEng · BSc · ISC2 CC</dd>
          </div>
        </dl>
        <a className="text-link" href={profile.linkedin}>
          View LinkedIn profile <Arrow diagonal />
        </a>
      </aside>
      <div className="platform-strip">
        <span>Platforms &amp; tools</span>
        <ul>
          <li>Microsoft 365 Defender</li>
          <li>CrowdStrike Falcon</li>
          <li>Darktrace</li>
          <li>Microsoft Purview</li>
          <li>Microsoft Sentinel</li>
        </ul>
      </div>
    </section>
  );
}
