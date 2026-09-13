import { useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const contactItems = [
  {
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    label: "Email",
    value: "zumat9509@gmail.com",
  },
  {
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    label: "Location",
    value: "Johannesburg, South Africa (Open to Remote)",
  },
  {
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    label: "LinkedIn",
    value: "www.linkedin.com/in/noluthando-zuma-814792232",
  },
  {
    icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
    label: "GitHub",
    value: "https://github.com/Pearlzoomer",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      console.error("Missing VITE_FORMSPREE_ENDPOINT — set it in your .env file (and on Vercel).");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={{ background: "#0C0A0D", padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, rgba(255,121,176,0.12), transparent)" }} />

      <div className="max-w-5xl mx-auto">
        <div className="contact-grid" style={{ alignItems: "start" }}>
          <div>
            <div className="section-title mb-3">Get In Touch</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.3rem)", color: "#FF79B0", lineHeight: 1.2, marginBottom: "1.2rem" }}>
              Let's Build Something Together
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#FFFFFF", lineHeight: 1.85, marginBottom: "2rem" }}>
              I'm actively seeking entry-level network engineering roles, internships, and collaborative
              projects. Whether you're a recruiter, engineer, or fellow student — I'd love to connect.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactItems.map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div
                    style={{
                      width: 38, height: 38, borderRadius: 10, background: "rgba(255,121,176,0.07)",
                      border: "1px solid rgba(255,121,176,0.12)", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "#FF79B0", flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{item.icon}</svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "#FFFFFF", marginBottom: 1 }}>{item.label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "#FFFFFF" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: "2.25rem" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,121,176,0.1)", border: "1px solid rgba(255,121,176,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF79B0" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.2rem", color: "#FF79B0", marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "#FFFFFF" }}>I'll respond within 24 hours.</p>
                <button className="btn-primary" style={{ marginTop: "1.5rem" }} onClick={() => setStatus("idle")}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div className="contact-form-row" style={{ gap: "0.9rem" }}>
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Alex Johnson" },
                    { id: "email", label: "Email", type: "email", placeholder: "alex@company.com" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF", display: "block", marginBottom: 5, fontWeight: 500 }}>{f.label}</label>
                      <input
                        className="form-input"
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        value={formState[f.id]}
                        onChange={(e) => setFormState({ ...formState, [f.id]: e.target.value })}
                        style={{ width: "100%", padding: "9px 13px", borderRadius: 10, border: "1px solid rgba(255,121,176,0.15)", background: "rgba(255,255,255,0.04)", fontFamily: "var(--font-body)", fontSize: "0.86rem", color: "#FFFFFF" }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF", display: "block", marginBottom: 5, fontWeight: 500 }}>Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    required
                    placeholder="Internship Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{ width: "100%", padding: "9px 13px", borderRadius: 10, border: "1px solid rgba(255,121,176,0.15)", background: "rgba(255,255,255,0.04)", fontFamily: "var(--font-body)", fontSize: "0.86rem", color: "#FFFFFF" }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF", display: "block", marginBottom: 5, fontWeight: 500 }}>Message</label>
                  <textarea
                    className="form-input"
                    required
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{ width: "100%", padding: "9px 13px", borderRadius: 10, border: "1px solid rgba(255,121,176,0.15)", background: "rgba(255,255,255,0.04)", fontFamily: "var(--font-body)", fontSize: "0.86rem", color: "#FFFFFF", resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#FF6B6B", background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)", borderRadius: 10, padding: "10px 14px" }}>
                    Something went wrong sending your message. Please try again, or email me directly.
                  </div>
                )}

                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }} disabled={status === "sending"}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
