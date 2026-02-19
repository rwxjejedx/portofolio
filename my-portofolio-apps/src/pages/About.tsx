import Foto1 from "@/assets/img/1.jpeg";
import Foto2 from "@/assets/img/2.jpeg";
import Js from "@/assets/tools/js.png";
import Nextjs from "@/assets/tools/nextjs.png";
import Tailwind from "@/assets/tools/tailwind.png";
import Node from "@/assets/tools/nodejs.png";
import React from "@/assets/tools/reactjs.png";

const techStack = [
  { src: Js, alt: "JavaScript" },
  { src: Nextjs, alt: "Next.js" },
  { src: Tailwind, alt: "Tailwind CSS" },
  { src: Node, alt: "Node.js" },
  { src: React, alt: "React" },
];

function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .about-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          color: #c8c4bc;
          position: relative;
        }

        .about-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        .about-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          padding: 80px 24px 120px;
        }

        .page-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          color: #f0ede8;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #505050;
          font-size: 0.92rem;
          font-style: italic;
          font-family: 'DM Serif Display', serif;
          margin-bottom: 48px;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }

        .photo-main {
          grid-row: span 2;
          aspect-ratio: 3/4;
          overflow: hidden;
          border-radius: 12px;
          background: #1a1a1a;
        }

        .photo-side {
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 12px;
          background: #1a1a1a;
        }

        .photo-main img, .photo-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.3s ease, transform 0.4s ease;
        }

        .photo-main:hover img, .photo-side:hover img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }

        .bio-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.5rem;
          color: #f0ede8;
          margin-bottom: 4px;
        }

        .bio-role {
          font-size: 0.85rem;
          color: #4a4a4a;
          margin-bottom: 28px;
        }

        .bio-body {
          font-size: 0.95rem;
          line-height: 1.85;
          color: #787878;
          margin-bottom: 20px;
        }

        .bio-body strong {
          color: #c8c4bc;
          font-weight: 500;
        }

        .stack-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .stack-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
          opacity: 0.75;
          transition: opacity 0.2s, transform 0.2s;
          filter: grayscale(30%);
        }
        .stack-icon:hover {
          opacity: 1;
          transform: translateY(-3px);
          filter: grayscale(0%);
        }

        .section-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 52px 0;
        }

        .section-heading {
          font-family: 'DM Serif Display', serif;
          font-size: 1.5rem;
          color: #f0ede8;
          margin-bottom: 24px;
        }

        .up-to-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .up-to-list li {
          display: block;
          padding-left: 18px;
          position: relative;
          font-size: 0.93rem;
          color: #787878;
          line-height: 1.8;
        }

        .up-to-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #333;
        }

        .up-to-list li strong {
          color: #b0aca4;
          font-weight: 500;
          display: inline;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }
        .d3 { animation-delay: 0.25s; }
        .d4 { animation-delay: 0.35s; }

        @media (max-width: 600px) {
          .photo-grid { grid-template-columns: 1fr; }
          .photo-main { grid-row: auto; }
        }
      `}</style>

      <div className="about-page">
        <div className="about-inner">

          <div className="fade-in d1">
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">A story of growth and discovery</p>
          </div>

          <div className="photo-grid fade-in d2">
            <div className="photo-main">
              <img src={Foto2} alt="Julham Maulana" loading="lazy" />
            </div>
            <div className="photo-side">
              <img src={Foto1} alt="Julham Maulana" loading="lazy"
                style={{ objectPosition: "top", filter: "grayscale(60%) brightness(0.7)" }} />
            </div>
            <div className="photo-side" style={{ background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "0.7rem", color: "#2a2a2a", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Bekasi, Indonesia
              </span>
            </div>
          </div>

          <div className="fade-in d3">
            <h2 className="bio-name">Julham Maulana</h2>
            <p className="bio-role">Informatics Engineering Graduate · Full Stack Developer</p>

            <p className="bio-body">
              Hello! You can call me <strong>Julham</strong>. I am a Software Engineer who works with the React ecosystem, building things from pixel-perfect frontends to robust backend systems.
            </p>
            <p className="bio-body">
              I was born in 1999 in Batang, Indonesia. When the pandemic hit, my university closed and I started learning web development out of boredom. That spark turned into a passion.
            </p>
            <p className="bio-body">
              I hold a Bachelor's degree in Informatics Engineering from <strong>Universitas Mercu Buana Jakarta</strong> and have deepened my skills through bootcamps at <strong>Purwadhika</strong>, <strong>AWS re/Start</strong>, and <strong>Jabar Digital Academy</strong>.
            </p>
            <p className="bio-body">Here are my current favorite tools:</p>
            <div className="stack-row">
              {techStack.map((t) => (
                <img key={t.alt} src={t.src} alt={t.alt} className="stack-icon" title={t.alt} loading="lazy" />
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          <div className="fade-in d4">
            <h2 className="section-heading">What I'm up to now</h2>
            <ul className="up-to-list">
              <li>Completing the <strong>Full Stack Developer bootcamp at Purwadhika</strong>, building production-ready web apps with React and Node.js</li>
              <li>An <strong>AWS re/Start graduate</strong> — certified in cloud architecture with hands-on experience in EC2, S3, IAM, and VPC</li>
              <li>Building my <strong>personal portfolio</strong> to showcase full-stack projects and document my learning journey</li>
              <li>Actively looking for opportunities in <strong>Full Stack Development</strong> or <strong>Cloud Computing</strong> roles</li>
              <li>Leveling up in <strong>Next.js</strong> and exploring backend performance patterns with Express.js and PostgreSQL</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;