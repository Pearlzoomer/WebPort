const certs = [
  { name: "CompTIA Network+", issuer: "CompTIA", year: "2024", badge: "N+", color: "#4CAF50", status: "In Progress" },
  { name: "Cisco CCNA 1 & 2", issuer: "Cisco NetAcad", year: "2022", badge: "CNA", color: "#C4A882", status: "Coming Soon" },
  { name: "Google IT Support", issuer: "Google / Coursera", year: "2022", badge: "GIT", color: "#A8B0C4", status: "Coming Soon" },
  { name: "Cisco CCNA 200-301", issuer: "Cisco", year: "2024", badge: "CCNA", color: "#6B9EB0", status: "Coming Soon" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2025", badge: "AWS", color: "#6B9EB0", status: "Coming Soon" },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "#0C0A0D", padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, rgba(255,121,176,0.12), transparent)" }} />

      <div className="max-w-5xl mx-auto">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-title mb-3">Certifications</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#FF79B0" }}>
            Credentials & Milestones
          </h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", justifyContent: "center" }}>
          {certs.map((cert) => (
            <div key={cert.name} className="cert-badge glass-card" style={{ padding: "1.75rem 1.4rem", textAlign: "center", width: 175, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: cert.color, opacity: 0.6 }} />
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${cert.color}12`, border: `1.5px solid ${cert.color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.8rem", color: cert.color }}>{cert.badge}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.82rem", color: "#FF79B0", marginBottom: "0.3rem", lineHeight: 1.3 }}>{cert.name}</h3>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "#FFFFFF", marginBottom: "0.6rem" }}>{cert.issuer}</div>
              <span
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600,
                  color: cert.status === "In Progress" ? "#4CAF50" : "#C9C2C2",
                  background: cert.status === "In Progress" ? "rgba(76,175,80,0.08)" : "rgba(255,255,255,0.06)",
                  borderRadius: 50, padding: "3px 10px",
                }}
              >
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
