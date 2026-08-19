export function HeroBackgroundMesh({ nodes = "full" }: { nodes?: "full" | "minimal" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes hero-mesh-pulse-a {
          0%, 100% { opacity: 0.14; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.22; transform: scale(1.08) translate(10px, -10px); }
        }
        @keyframes hero-mesh-pulse-b {
          0%, 100% { opacity: 0.10; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.18; transform: scale(1.06) translate(-12px, 8px); }
        }
        @keyframes hero-mesh-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, 6px); }
        }
        .hero-mesh-orb-a {
          animation: hero-mesh-pulse-a 14s ease-in-out infinite;
        }
        .hero-mesh-orb-b {
          animation: hero-mesh-pulse-b 18s ease-in-out infinite;
        }
        .hero-mesh-network {
          animation: hero-mesh-drift 22s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-mesh-orb-a, .hero-mesh-orb-b, .hero-mesh-network {
            animation: none;
          }
        }
      `}</style>

      <div
        className="hero-mesh-orb-a absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full opacity-[0.16] blur-[90px]"
        style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)" }}
      />
      <div
        className="hero-mesh-orb-b absolute top-10 right-1/4 h-[360px] w-[360px] rounded-full opacity-[0.12] blur-[100px]"
        style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
      />

      <svg
        className="hero-mesh-network absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1200 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {nodes === "full" ? (
          <>
            <g stroke="#22d3ee" strokeWidth="1">
              <line x1="150" y1="120" x2="340" y2="70" />
              <line x1="340" y1="70" x2="520" y2="160" />
              <line x1="520" y1="160" x2="760" y2="90" />
              <line x1="760" y1="90" x2="980" y2="140" />
              <line x1="150" y1="120" x2="260" y2="260" />
              <line x1="260" y1="260" x2="480" y2="320" />
              <line x1="480" y1="320" x2="700" y2="260" />
              <line x1="700" y1="260" x2="980" y2="140" />
              <line x1="700" y1="260" x2="900" y2="360" />
            </g>
            <g fill="#67e8f9">
              <circle cx="150" cy="120" r="3.5" />
              <circle cx="340" cy="70" r="3" />
              <circle cx="520" cy="160" r="4" />
              <circle cx="760" cy="90" r="3" />
              <circle cx="980" cy="140" r="3.5" />
              <circle cx="260" cy="260" r="3" />
              <circle cx="480" cy="320" r="3.5" />
              <circle cx="700" cy="260" r="4" />
              <circle cx="900" cy="360" r="3" />
            </g>
          </>
        ) : (
          <>
            <g stroke="#22d3ee" strokeWidth="1">
              <line x1="150" y1="120" x2="340" y2="70" />
              <line x1="980" y1="140" x2="900" y2="360" />
            </g>
            <g fill="#67e8f9">
              <circle cx="150" cy="120" r="3" />
              <circle cx="340" cy="70" r="2.5" />
              <circle cx="980" cy="140" r="3" />
              <circle cx="900" cy="360" r="2.5" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
