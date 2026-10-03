import { profile } from "../data";
export default function Footer() {
  return (
    <footer className="shell footer">
      <div>
        <a className="brand" href="#intro">
          <span className="monogram" aria-hidden="true">
            PM<span>.</span>
          </span>
          <span>{profile.name}</span>
        </a>
        <p>Cybersecurity · Vancouver, BC</p>
      </div>
      <div className="footer-detail">
        <p>
          Target roles: Cybersecurity Analyst · Senior Cybersecurity Analyst ·
          SOC Analyst · Security Operations
        </p>
        <p>© {new Date().getFullYear()} Payton Murdoch. All rights reserved.</p>
      </div>
    </footer>
  );
}
