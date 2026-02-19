import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Foto1 from "@/assets/img/1.jpeg";

function Home() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .home-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-name {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(3.2rem, 8vw, 5.8rem);
          line-height: 1.06;
          color: #f0ede8;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          -webkit-mask-image: radial-gradient(ellipse 90% 70% at 60% 30%, black 30%, transparent 80%);
          mask-image: radial-gradient(ellipse 90% 70% at 60% 30%, black 30%, transparent 80%);
          pointer-events: none;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 0.78rem;
          color: #909090;
          letter-spacing: 0.01em;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80aa;
          animation: blink 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .body-text {
          color: #686868;
          font-size: 0.97rem;
          line-height: 1.8;
          max-width: 38ch;
          font-weight: 300;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          color: #d8d4cd;
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-primary:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.22);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          color: #5a5a5a;
          font-size: 0.88rem;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-ghost:hover {
          color: #aaa;
          border-color: rgba(255,255,255,0.16);
        }

        .social-link {
          color: #444;
          font-size: 1.15rem;
          transition: color 0.2s;
          line-height: 1;
        }
        .social-link:hover { color: #999; }

        .orb-cluster {
          position: relative;
          width: 340px;
          height: 340px;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.045);
        }

        .icon-bubble {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #181818;
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .icon-bubble:hover {
          transform: scale(1.18) !important;
          box-shadow: 0 6px 28px rgba(0,0,0,0.7);
        }

        @keyframes floatA {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatC {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .fa { animation: floatA 4.2s ease-in-out infinite; }
        .fb { animation: floatB 5.1s ease-in-out 0.4s infinite; }
        .fc { animation: floatC 3.8s ease-in-out 0.9s infinite; }
        .fd { animation: floatA 4.7s ease-in-out 1.3s infinite; }
        .fe { animation: floatB 4s ease-in-out 0.2s infinite; }
        .ff { animation: floatC 5.5s ease-in-out 0.7s infinite; }

        .hello-bubble {
          position: absolute;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 5px 11px;
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          color: #666;
          white-space: nowrap;
          backdrop-filter: blur(6px);
          animation: floatC 4.5s ease-in-out 0.6s infinite;
        }

        /* Page entrance animation */
        .fade-up {
          opacity: 0;
          transform: translateY(22px);
          animation: fadeUp 0.65s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.32s; }
        .d4 { animation-delay: 0.46s; }
        .d5 { animation-delay: 0.60s; }
      `}</style>

      <div className="home-page">
        {/* Decorative elements */}
        <div className="grid-lines" />
        <div className="glow" style={{ width: 600, height: 600, background: "#1d4ed8", opacity: 0.07, top: "-20%", right: "15%" }} />
        <div className="glow" style={{ width: 350, height: 350, background: "#059669", opacity: 0.08, bottom: "0%", left: "-5%" }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 max-w-lg">

            {/* Status badge */}
            <div className="fade-up d1 mb-8">
              <span className="status-pill">
                <span className="pulse-dot" />
                Available for opportunities
              </span>
            </div>

            {/* Headline */}
            <div className="fade-up d2 mb-6">
              <h1 className="hero-name">
                I'm Julham<br />Maulana
              </h1>
            </div>

            {/* Body */}
            <div className="fade-up d3 mb-10">
              <p className="body-text">
                I work with the React ecosystem and build full-stack web applications — writing clean code and shipping experiences people actually enjoy using.
              </p>
            </div>

            {/* CTA */}
            <div className="fade-up d4 flex items-center gap-3 flex-wrap mb-12">
              <Link to="/portofolio" className="btn-primary">
                View Projects <span style={{ opacity: 0.5, fontSize: "0.9em" }}>↓</span>
              </Link>
              <Link to="/about" className="btn-ghost">
                More about me
              </Link>
            </div>

            {/* Social links */}
            <div className="fade-up d5 flex items-center gap-5">
              <a href="https://github.com/rwxjejedx/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="ri-github-fill" />
              </a>
              <a href="https://x.com/Maulanajulham_" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="ri-twitter-x-fill" />
              </a>
              <a href="https://www.instagram.com/maulanajulham_/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="ri-instagram-fill" />
              </a>
              <a href="https://www.linkedin.com/in/julham-maulana/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="ri-linkedin-fill" />
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: floating icon cluster ── */}
          <div className="flex-1 flex justify-center items-center">
            <div ref={orbRef} className="orb-cluster">

              {/* Decorative rings */}
              <div className="ring" style={{ inset: "0%" }} />
              <div className="ring" style={{ inset: "14%" }} />
              <div className="ring" style={{ inset: "28%" }} />

              {/* Center: profile photo */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 104, height: 104,
                borderRadius: "50%",
                overflow: "hidden",
                border: "1.5px solid rgba(255,255,255,0.12)",
                background: "#1a1a1a",
                zIndex: 2,
              }}>
                <img src={Foto1} alt="Julham Maulana" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>

              {/* Floating icons */}
              {/* React - top */}
              <div className="icon-bubble fa" style={{ width: 48, height: 48, top: "-2%", left: "50%" }}>
                <i className="ri-reactjs-line" style={{ color: "#67e8f9", fontSize: "1.3rem" }} />
              </div>

              {/* JS - top right */}
              <div className="icon-bubble fb" style={{ width: 44, height: 44, top: "16%", left: "80%" }}>
                <i className="ri-javascript-fill" style={{ color: "#facc15", fontSize: "1.15rem" }} />
              </div>

              {/* Next.js - right */}
              <div className="icon-bubble fc" style={{ width: 42, height: 42, top: "55%", left: "85%" }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "-0.03em" }}>N▲</span>
              </div>

              {/* Node - bottom */}
              <div className="icon-bubble fd" style={{ width: 46, height: 46, top: "88%", left: "48%" }}>
                <i className="ri-nodejs-fill" style={{ color: "#4ade80", fontSize: "1.2rem" }} />
              </div>

              {/* GitHub - bottom left */}
              <div className="icon-bubble fe" style={{ width: 42, height: 42, top: "68%", left: "8%" }}>
                <i className="ri-github-fill" style={{ color: "#d4d4d4", fontSize: "1.15rem" }} />
              </div>

              {/* Figma - top left */}
              <div className="icon-bubble ff" style={{ width: 40, height: 40, top: "20%", left: "6%" }}>
                <i className="ri-figma-fill" style={{ color: "#f472b6", fontSize: "1rem" }} />
              </div>

              {/* Hello world bubble */}
              <div className="hello-bubble" style={{ top: "36%", left: "-18%" }}>
                hello world!
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;