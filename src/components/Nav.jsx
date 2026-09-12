import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["About", "Skills", "Projects", "Journey", "Certifications", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,6,8,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,121,176,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem",
            color: "#FFFFFF", textDecoration: "none", letterSpacing: "-0.01em",
          }}
        >
          Noluthando<span style={{ color: "#FF79B0" }}>.</span>Zuma
        </a>

        <div className="desktop-nav items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.03em", color: "#FFFFFF" }}
            >
              {l}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "9px 22px", fontSize: "0.78rem" }}>
            Hire Me
          </a>
        </div>

        <button className="mobile-menu flex-col gap-1.5 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 22, height: 1.5, background: "#EDE8E6", display: "block", transition: "all 0.2s",
                transform: i === 0 && mobileOpen ? "rotate(45deg) translateY(5px)" : i === 2 && mobileOpen ? "rotate(-45deg) translateY(-5px)" : "none",
                opacity: i === 1 && mobileOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: "rgba(7,6,8,0.95)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,121,176,0.12)", padding: "1.5rem" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "10px 0", fontFamily: "var(--font-heading)", fontWeight: 500, color: "#FFFFFF", borderBottom: "1px solid rgba(255,121,176,0.08)", textDecoration: "none" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
