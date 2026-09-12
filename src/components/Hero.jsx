import NetworkBackground from "./NetworkBackground.jsx";

const stats = [
  { label: "Labs Completed", value: "24+", symbol: "⬡" },
  { label: "Certs Earned", value: "3", symbol: "◈" },
  { label: "Projects Built", value: "8", symbol: "◇" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#070608" }}>
      <NetworkBackground />

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#FF79B0", opacity: 0.35 }} />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full" style={{ zIndex: 1 }}>
        <div style={{ maxWidth: 640 }}>
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div style={{ width: 28, height: 1, background: "#C4A882", opacity: 0.7 }} />
            <span className="section-title" style={{ fontSize: "0.66rem" }}>Network Engineering Portfolio</span>
          </div>

          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 4.4rem)", lineHeight: 1.05,
              color: "#FF79B0", letterSpacing: "-0.025em",
              animationDelay: "0.1s", opacity: 0,
            }}
          >
            Noluthando Zuma
          </h1>

          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-heading)", fontWeight: 300,
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)", color: "#FFFFFF",
              marginTop: "0.8rem", animationDelay: "0.2s", opacity: 0,
            }}
          >
            Aspiring{" "}
            <span className="gold-shimmer" style={{ fontWeight: 600 }}>Network Engineer</span>
            {" "}& CCNA Candidate
          </h2>

          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-body)", fontSize: "0.97rem",
              color: "#FFFFFF", marginTop: "1.5rem", lineHeight: 1.8,
              maxWidth: 460, animationDelay: "0.3s", opacity: 0,
            }}
          >
            Designing reliable, scalable networks with precision and purpose.
            I bridge technical complexity with clear communication — building
            infrastructure that just works.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <a href="#projects" className="btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn-outline">Let's Connect</a>
          </div>

          <div className="flex items-center gap-2 mt-8 animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF50", boxShadow: "0 0 8px rgba(76,175,80,0.6)", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#FFFFFF" }}>
              Open to entry-level opportunities & internships
            </span>
          </div>
        </div>

        <div
          className="absolute animate-fade-in"
          style={{ right: "5%", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "1rem", animationDelay: "0.6s", opacity: 0 }}
          aria-hidden="true"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-card" style={{ padding: "1rem 1.25rem", textAlign: "center", minWidth: 122 }}>
              <div style={{ fontSize: "1rem", color: "#FF79B0", marginBottom: 4 }}>{s.symbol}</div>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", color: "#FF79B0" }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "#FFFFFF", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2" style={{ transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "#FFFFFF", letterSpacing: "0.12em", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 28, background: "#FF79B0" }} />
      </div>
    </section>
  );
}
