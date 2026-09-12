export default function AmbientOrbs() {
  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute", top: "-15%", left: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,121,176,0.12) 0%, transparent 70%)",
          animation: "orb-drift 18s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute", top: "35%", right: "-8%",
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,168,130,0.08) 0%, transparent 70%)",
          animation: "orb-drift 24s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "10%", left: "5%",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,121,176,0.07) 0%, transparent 70%)",
          animation: "orb-drift 20s ease-in-out 6s infinite",
        }}
      />
    </div>
  );
}
