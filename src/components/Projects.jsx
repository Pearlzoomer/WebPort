import { useState } from "react";

const projects = [
  { title: "Enterprise VLAN Design", description: "Multi-department VLAN topology for a simulated 200-user enterprise, including inter-VLAN routing, trunking, and access policies.", tags: ["Cisco IOS", "VLANs", "STP", "OSPF"], image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format", category: "Infrastructure" },
  { title: "Firewall Policy Lab", description: "Stateful firewall rules and ACLs segmenting a network into DMZ, internal, and guest zones with strict policy enforcement.", tags: ["Firewall", "ACLs", "DMZ", "Security"], image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format", category: "Security" },
  { title: "Network Monitoring Dashboard", description: "Python + SNMP tool visualizing bandwidth, latency, and device uptime across a simulated network in real time.", tags: ["Python", "SNMP", "Grafana", "Automation"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format", category: "Automation" },
  { title: "BGP Peering Simulation", description: "eBGP and iBGP configurations between three autonomous systems with route filtering, communities, and prefix aggregation.", tags: ["BGP", "GNS3", "Route Policy", "ASN"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format", category: "Infrastructure" },
  { title: "VPN Site-to-Site Tunnel", description: "IPSec tunnels using IKEv2, crypto maps, and GRE encapsulation with failover via floating static routes.", tags: ["IPSec", "IKEv2", "GRE", "VPN"], image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&auto=format", category: "Security" },
  { title: "Ansible Network Automation", description: "Automated router config backups, VLAN provisioning, and interface documentation using Ansible and Jinja2 templates.", tags: ["Ansible", "Python", "YAML", "NetOps"], image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=600&h=400&fit=crop&auto=format", category: "Automation" },
];

const categoryColors = { Infrastructure: "#FF79B0", Security: "#C4A882", Automation: "#A8C4B0" };

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Infrastructure", "Security", "Automation"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" style={{ background: "#0C0A0D", padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, rgba(255,121,176,0.12), transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-title mb-3">Projects & Labs</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#FF79B0" }}>
            Hands-On Network Builds
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#FFFFFF", marginTop: "0.75rem" }}>
            Every project is a real lab — designed, configured, and documented from scratch.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  fontFamily: "var(--font-heading)", fontSize: "0.8rem", fontWeight: 500,
                  padding: "7px 18px", borderRadius: "50px",
                  border: `1px solid ${filter === c ? "#FF79B0" : "rgba(255,121,176,0.15)"}`,
                  background: filter === c ? "#FF79B0" : "rgba(255,255,255,0.03)",
                  color: filter === c ? "#1a1015" : "#FFFFFF",
                  cursor: "pointer", transition: "all 0.2s ease",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {filtered.map((proj) => (
            <div key={proj.title} className="project-card" style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 195, overflow: "hidden", background: "#1a1515" }}>
                <img src={proj.image} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) saturate(0.85)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,6,8,0.75) 0%, transparent 50%)" }} />
                <span
                  style={{
                    position: "absolute", top: 12, left: 12, fontFamily: "var(--font-body)", fontSize: "0.68rem",
                    fontWeight: 600, background: "rgba(7,6,8,0.7)", backdropFilter: "blur(8px)",
                    color: categoryColors[proj.category] || "#FF79B0", borderRadius: 50, padding: "3px 11px",
                    border: `1px solid ${categoryColors[proj.category]}30`,
                  }}
                >
                  {proj.category}
                </span>
                <div className="project-overlay" style={{ position: "absolute", inset: 0, background: "rgba(255,121,176,0.8)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.875rem" }}>
                  {["github", "external"].map((type) => (
                    <a key={type} href="#" style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(7,6,8,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {type === "github" ? (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#EDE8E6" strokeWidth="1.8">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      ) : (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#EDE8E6" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ padding: "1.4rem" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem", color: "#FF79B0", marginBottom: "0.55rem" }}>{proj.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.83rem", color: "#FFFFFF", lineHeight: 1.7, marginBottom: "1rem" }}>{proj.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "#FF79B0", background: "rgba(255,121,176,0.07)", border: "1px solid rgba(255,121,176,0.18)", borderRadius: 6, padding: "3px 9px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
