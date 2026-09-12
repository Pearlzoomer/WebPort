export default function About() {
  return (
    <section id="about" style={{ background: "#0C0A0D", padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, rgba(255,121,176,0.15), transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: -14, right: 14, bottom: 14, borderRadius: 22, border: "1px solid rgba(196,168,130,0.2)" }} />
            <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
              <img
                src="src/image.jpeg"
                alt="Noluthando Zuma — network engineer"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) saturate(0.9)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,121,176,0.1) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, rgba(7,6,8,0.7), transparent)" }} />
            </div>g
          </div>

          <div>
            <div className="section-title mb-3">About Me</div>
            <div className="gold-divider mb-6" style={{ width: 44 }} />
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: "#FF79B0", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              I'm becoming the engineer I once only dreamed of being.
            </h2>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.93rem", color: "#FFFFFF", lineHeight: 1.9, maxHeight: 420, overflowY: "auto", paddingRight: "0.5rem" }}>
              <p style={{ marginBottom: "1.1rem" }}>
                Sometimes I stop and wonder, <strong style={{ color: "#FFFFFF" }}>"What if all this effort doesn't work out?"</strong>
              </p>
              <p style={{ marginBottom: "1.1rem" }}>
                What if I study, learn, practice, build projects, spend nights trying to understand things
                that once seemed impossible — and I still don't make it where I want to go? Honestly, that thought scares me.
              </p>
              <p style={{ marginBottom: "1.1rem" }}>
                I'm not someone who has everything figured out. I'm still a student, still learning, still making mistakes,
                and still trying to find my place in the technology industry. There are days when I feel confident about
                my future, and other days when I question whether I'm good enough.
              </p>
              <p style={{ marginBottom: "1.1rem", color: "#FFFFFF", fontStyle: "italic" }}>
                But I keep going.
              </p>
              <p style={{ marginBottom: "1.1rem" }}>
                My journey started with Business Information Technology, and along the way I discovered how much I enjoy
                understanding the systems behind the technology we use every day. I became especially interested in{" "}
                <strong style={{ color: "#FFFFFF" }}>networking, infrastructure and cybersecurity</strong> — how devices
                communicate, how networks are designed, how problems are found, and how systems can be protected.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                So I started building. I learned through labs. I experimented with networks.
                I worked with Cisco Packet Tracer. I explored Wireshark. I built projects. I made mistakes. Then I tried again.
              </p>
              <p style={{ marginBottom: "1.1rem", color: "#FFFFFF" }}>
                Every small project became proof to myself that I was moving forward.
              </p>
              <p style={{ marginBottom: "1.1rem" }}>
                I know I still have a long way to go. I don't have years of industry experience. I don't have every
                certification yet. I don't know exactly where this journey will take me.
              </p>
              <p style={{ marginBottom: "1.1rem" }}>
                But I know where I want to go. <strong style={{ color: "#FF79B0" }}>I want to become a Network Engineer.</strong>{" "}
                And eventually, combine networking with cybersecurity — not just understanding how technology works,
                but understanding how to protect it.
              </p>
              <p style={{ marginBottom: "1.1rem", color: "#FFFFFF", fontStyle: "italic" }}>
                The person I am today is already living through a dream that the younger version of me could only imagine.
              </p>
              <p style={{ marginBottom: "1.1rem" }}>
                So this portfolio isn't meant to show that I've already made it. It's meant to show that{" "}
                <strong style={{ color: "#FFFFFF" }}>I'm becoming.</strong> Every project, every lab, every late night,
                every mistake and every lesson is another step toward the engineer I want to become.
              </p>
              <p style={{ color: "#FF79B0", fontWeight: 600 }}>
                I kept going anyway.
              </p>
            </div>

            <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem" }}>
              {[{ label: "GPA", value: "3.87" }, { label: "Cisco Labs", value: "24+" }, { label: "GitHub Stars", value: "142" }].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", color: "#FF79B0" }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#FFFFFF", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="/resume.pdf" className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">Say Hello</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
