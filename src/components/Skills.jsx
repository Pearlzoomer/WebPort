const skillCategories = [
  {
    category: "Routing & Switching",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="7" width="20" height="10" rx="3" />
        <path d="M6 11h.01M6 13h.01M10 11h4M10 13h4" />
        <path d="M17 7V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    skills: [
      { name: "OSPF / EIGRP / BGP", level: 82 },
      { name: "VLANs & STP", level: 88 },
      { name: "Inter-VLAN Routing", level: 85 },
      { name: "ACLs & Route Filters", level: 78 },
    ],
  },
  {
    category: "Network Security",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    skills: [
      { name: "Firewall Configuration", level: 76 },
      { name: "VPN & IPSec", level: 80 },
      { name: "Network Hardening", level: 74 },
      { name: "Threat Analysis", level: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: "Cisco Packet Tracer", level: 92 },
      { name: "GNS3 / EVE-NG", level: 78 },
      { name: "Wireshark", level: 86 },
      { name: "Linux / CLI", level: 80 },
    ],
  },
  {
    category: "Cloud & Automation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: "Python Networking", level: 72 },
      { name: "Ansible Basics", level: 60 },
      { name: "AWS Networking", level: 65 },
      { name: "Bash Scripting", level: 74 },
    ],
  },
];

const protocolTags = ["TCP/IP", "DNS", "DHCP", "NAT/PAT", "MPLS", "QoS", "SSH/Telnet", "HTTP/S", "IPv6", "SDN Basics"];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#070608", padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, rgba(255,121,176,0.12), transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-title mb-3">Technical Skills</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#FF79B0" }}>
            What I Bring to the Network
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#FFFFFF", marginTop: "0.75rem", maxWidth: 420, margin: "0.75rem auto 0" }}>
            Hands-on experience across routing, security, and infrastructure tools — built through labs, projects, and relentless curiosity.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className="glass-card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: 42, height: 42, borderRadius: 11, background: "rgba(255,121,176,0.1)",
                    border: "1px solid rgba(255,121,176,0.15)", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#FF79B0", flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.9rem", color: "#FF79B0", lineHeight: 1.3 }}>{cat.category}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#FFFFFF" }}>{skill.name}</span>
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", color: "#FF79B0", fontWeight: 600 }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 3, borderRadius: 2, background: "rgba(255,121,176,0.1)" }}>
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
          {protocolTags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#FFFFFF",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,121,176,0.15)",
                borderRadius: "50px", padding: "5px 14px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
