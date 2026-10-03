import { useEffect, useRef, useState } from "react";
const links = [
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["credentials", "Credentials"],
  ["contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  useEffect(() => {
    function close(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    function resize() {
      if (window.innerWidth > 900) setOpen(false);
    }
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a href="#intro" className="brand" aria-label="Payton Murdoch home">
            <span className="monogram" aria-hidden="true">
              PM<span>.</span>
            </span>
            <span className="brand-name">Payton Murdoch</span>
          </a>
          <button
            ref={button}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? "×" : "+"}</span>
          </button>
          <nav
            id="site-navigation"
            className={`navigation ${open ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
