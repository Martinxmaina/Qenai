"use client";

export function AnimatedSphere() {
  return (
    <>
      <style>{`
        .sphere-stage {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }
        
        .sphere {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          position: relative;
          background:
            radial-gradient(circle at 32% 28%, #A9B4FF 0%, #5457FF 28%, #1B1BC7 62%, #0B0B6B 100%);
          box-shadow:
            0 0 130px 16px rgba(43, 43, 255, 0.55),
            inset -26px -26px 60px rgba(0, 0, 10, 0.5);
          z-index: 3;
        }
        
        .sphere::after {
          content: "";
          position: absolute;
          top: 14%;
          left: 20%;
          width: 38%;
          height: 26%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
          filter: blur(9px);
        }
        
        .sphere-ring {
          position: absolute;
          border: 1.4px solid rgba(140, 150, 255, 0.4);
          border-radius: 50%;
        }
        
        .sphere-ring1 {
          width: 380px;
          height: 380px;
          transform: rotateX(72deg);
          animation: sphere-spin 8s linear infinite;
        }
        
        .sphere-ring2 {
          width: 480px;
          height: 480px;
          border-color: rgba(140, 150, 255, 0.22);
          animation: sphere-spin2 8s linear infinite;
        }
        
        .sphere-dot {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #FFB84D;
          box-shadow: 0 0 16px 5px rgba(255, 184, 77, 0.75);
          top: -7px;
          left: 50%;
          margin-left: -7px;
        }
        
        .sphere-ring2 .sphere-dot {
          background: #fff;
          box-shadow: 0 0 16px 5px rgba(255, 255, 255, 0.65);
        }
        
        @keyframes sphere-spin {
          from {
            transform: rotateX(72deg) rotate(0deg);
          }
          to {
            transform: rotateX(72deg) rotate(360deg);
          }
        }
        
        @keyframes sphere-spin2 {
          from {
            transform: rotateX(72deg) rotate(35deg);
          }
          to {
            transform: rotateX(72deg) rotate(395deg);
          }
        }
      `}</style>
      
      <div className="sphere-stage">
        <div className="sphere-ring sphere-ring1">
          <div className="sphere-dot"></div>
        </div>
        <div className="sphere-ring sphere-ring2">
          <div className="sphere-dot"></div>
        </div>
        <div className="sphere"></div>
      </div>
    </>
  );
}
