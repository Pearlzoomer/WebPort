const timelineItems = [
  { year: "2023", title: "Completed Matric", org: "High School", description: "Successfully finished my matric — a milestone that opened the door to everything that followed.", type: "education" },
  { year: "2025", title: "Enrolled at UJ", org: "University of Johannesburg", description: "Got accepted into Business Information Technology at UJ — the beginning of my formal journey in the tech industry.", type: "education" },
  { year: "2025", title: "Finished First Year", org: "University of Johannesburg", description: "Successfully completed my first year of study. A full year of learning, adapting, and proving to myself that I belong here.", type: "cert" },
  { year: "2026", title: "Discovered Network Engineering", org: "Self-Directed Learning", description: "Developed a deep interest in networking — how devices communicate, how infrastructure is built, and how systems are protected. Started learning the basics and I'm still going.", type: "current" },
];

const typeStyles = {
  education: { dot: "#FF79B0", label: "Education" },
  cert: { dot: "#C4A882", label: "Certification" },
  work: { dot: "#A8B0C4", label: "Experience" },
  current: { dot: "#4CAF50", label: "In Progress" },
};

export default function Journey() {
  return (
    <section id="journey" style={{ background: "#070608", padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, rgba(255,121,176,0.12), transparent)" }} />

      <div className="max-w-4xl mx-auto">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-title mb-3">My Journey</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#FF79B0" }}>The Path So Far</h2>
        </div>

        <div className="journey-timeline">
          <div className="timeline-line journey-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              const ts = typeStyles[item.type];
              return (
                <div key={item.year + item.title} className="journey-row">
                  {isLeft ? (
                    <div className="journey-card glass-card" style={{ padding: "1.2rem 1.4rem", textAlign: "right" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600, color: ts.dot, background: `${ts.dot}15`, borderRadius: 50, padding: "2px 10px" }}>{ts.label}</span>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.9rem", color: "#FF79B0", margin: "0.55rem 0 0.2rem" }}>{item.title}</h3>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF", marginBottom: "0.45rem" }}>{item.org}</div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.81rem", color: "#FFFFFF", lineHeight: 1.65 }}>{item.description}</p>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="journey-marker">
                    <div style={{ width: 13, height: 13, borderRadius: "50%", background: ts.dot, border: "2.5px solid #070608", boxShadow: `0 0 0 2px ${ts.dot}40, 0 0 12px ${ts.dot}30` }} />
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.68rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.04em" }}>{item.year}</div>
                  </div>

                  {!isLeft ? (
                    <div className="journey-card glass-card" style={{ padding: "1.2rem 1.4rem" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600, color: ts.dot, background: `${ts.dot}15`, borderRadius: 50, padding: "2px 10px" }}>{ts.label}</span>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.9rem", color: "#FF79B0", margin: "0.55rem 0 0.2rem" }}>{item.title}</h3>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF", marginBottom: "0.45rem" }}>{item.org}</div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.81rem", color: "#FFFFFF", lineHeight: 1.65 }}>{item.description}</p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}