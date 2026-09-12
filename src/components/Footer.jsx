const socials = [
  { label: "LinkedIn", d: (<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>) },
  { label: "GitHub", d: (<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />) },
  { label: "Email", d: (<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>) },
];

export default function Footer() {
  return (
    <footer style={{ background: "#070608", padding: "2.5rem 1.5rem", borderTop: "1px solid rgba(255,121,176,0.08)" }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", marginBottom: "0.2rem" }}>
              Noluthando<span style={{ color: "#FF79B0" }}>.</span>Zuma
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF" }}>Aspiring Network Engineer · Johannesburg, SA</div>
          </div>

          <div style={{ display: "flex", gap: "0.875rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,121,176,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", transition: "all 0.2s ease", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FF79B0";
                  e.currentTarget.style.color = "#FF79B0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,121,176,0.15)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{s.d}</svg>
              </a>
            ))}
          </div>

          <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF" }}>© 2026 Noluthando Zuma</div>
        </div>
      </div>
    </footer>
  );
}
