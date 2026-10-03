import { useRef, useState } from "react";
import { profile } from "../data";
import { Arrow } from "./Shared";
export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");
  async function sendEmail(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(
        "service_uvmvbol",
        "template_y6d8z3l",
        form.current,
        { publicKey: "We_nI3RpsBf0s5rmq" },
      );
      form.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return (
    <section
      id="contact"
      className="contact-section section"
      aria-labelledby="contact-title"
    >
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">
            <span>06</span>Contact
          </p>
          <h2 id="contact-title">
            Let's talk
            <br />
            security.
          </h2>
          <p className="contact-summary">
            For cybersecurity analysis, SOC, and security operations
            opportunities, email me to request my resume or discuss my experience.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Arrow diagonal />
          </a>
          <div className="contact-links">
            <a href={profile.linkedin}>
              LinkedIn <Arrow diagonal />
            </a>
            <a href={profile.github}>
              GitHub <Arrow diagonal />
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          aria-label="Contact Payton"
        >
          <div className="form-row">
            <div>
              <label htmlFor="from-name">Name</label>
              <input
                id="from-name"
                type="text"
                name="from_name"
                autoComplete="name"
                maxLength="120"
                required
                disabled={status === "sending"}
              />
            </div>
            <div>
              <label htmlFor="from-email">Email</label>
              <input
                id="from-email"
                type="email"
                name="from_email"
                autoComplete="email"
                maxLength="254"
                required
                disabled={status === "sending"}
              />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            maxLength="5000"
            required
            disabled={status === "sending"}
          />
          <p className="form-note">
            Messages are delivered through EmailJS. You can also email directly.
          </p>
          <button
            className="button primary"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <Arrow />
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status === "sent"
              ? "Message sent. Thank you for getting in touch."
              : status === "error"
                ? "Your message could not be sent. Please try again or use the email link."
                : status === "sending"
                  ? "Sending your message."
                  : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
