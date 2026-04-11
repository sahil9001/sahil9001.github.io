"use client";

export default function AuroraBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(196,150,58,0.25) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Central glow — gold tint */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(ellipse at center, var(--accent-dim) 0%, transparent 68%)",
          borderRadius: "50%",
        }}
      />
      {/* Secondary glow — blue tint for navy depth */}
      <div
        className="absolute"
        style={{
          top: "70%",
          left: "75%",
          transform: "translate(-50%, -50%)",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(ellipse at center, rgba(30, 50, 120, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "16rem",
          background: "linear-gradient(to top, var(--bg), transparent)",
        }}
      />
    </div>
  );
}
