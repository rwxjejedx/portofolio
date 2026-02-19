import Js from "@/assets/tools/js.png";
import Nextjs from "@/assets/tools/nextjs.png";
import Tailwind from "@/assets/tools/tailwind.png";
import Node from "@/assets/tools/nodejs.png";
import React from "@/assets/tools/reactjs.png";
import Ai from "@/assets/tools/ai.png";
import Bootstrap from "@/assets/tools/bootstrap.png";
import Canva from "@/assets/tools/canva.png";
import Figma from "@/assets/tools/figma.png";
import Github from "@/assets/tools/github.png";
import Vscode from "@/assets/tools/vscode.png";

const categories = [
  {
    label: "Frontend",
    description: "Building responsive, pixel-perfect interfaces",
    tools: [
      { name: "React.js", img: React, level: 85 },
      { name: "JavaScript", img: Js, level: 80 },
      { name: "Next.js", img: Nextjs, level: 70 },
      { name: "Tailwind CSS", img: Tailwind, level: 85 },
      { name: "Bootstrap", img: Bootstrap, level: 75 },
    ],
  },
  {
    label: "Backend",
    description: "RESTful APIs and server-side architecture",
    tools: [
      { name: "Node.js", img: Node, level: 72 },
      { name: "Express.js", img: null, level: 70 },
      { name: "MySQL", img: null, level: 65 },
      { name: "PostgreSQL", img: null, level: 60 },
    ],
  },
  {
    label: "Cloud & DevOps",
    description: "AWS certified, Linux administration & CI/CD",
    tools: [
      { name: "AWS EC2/S3", img: null, level: 70 },
      { name: "IAM / VPC", img: null, level: 65 },
      { name: "Linux CLI", img: null, level: 75 },
      { name: "Git / GitHub", img: Github, level: 80 },
    ],
  },
  {
    label: "Design & Tools",
    description: "Design, prototyping, and dev environment",
    tools: [
      { name: "Figma", img: Figma, level: 68 },
      { name: "Canva", img: Canva, level: 80 },
      { name: "Illustrator", img: Ai, level: 60 },
      { name: "VS Code", img: Vscode, level: 90 },
    ],
  },
  {
    label: "IT Operations",
    description: "Hardware, networking, and system support",
    tools: [
      { name: "LAN / TCP-IP", img: null, level: 78 },
      { name: "Troubleshooting", img: null, level: 85 },
      { name: "Network Config", img: null, level: 75 },
      { name: "Data Backup", img: null, level: 80 },
    ],
  },
];

function SkillBar({ level }: { level: number }) {
  return (
    <div style={{
      width: "100%", height: 2,
      background: "rgba(255,255,255,0.05)",
      borderRadius: 2, marginTop: 6, overflow: "hidden"
    }}>
      <div style={{
        width: `${level}%`, height: "100%",
        background: "linear-gradient(90deg, #2a2a2a, rgba(255,255,255,0.25))",
        borderRadius: 2,
        animation: "fillBar 1s ease forwards",
      }} />
    </div>
  );
}

function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .skills-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          color: #c8c4bc;
        }

        .skills-inner {
          max-width: 860px;
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
          margin-bottom: 56px;
        }

        /* Category grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .skill-card {
          background: #111;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 28px;
          transition: border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .skill-card:hover {
          border-color: rgba(255,255,255,0.12);
        }
        .skill-card:hover::before { opacity: 1; }

        /* Full-width card for IT Operations */
        .skill-card.wide {
          grid-column: 1 / -1;
        }

        .card-label {
          font-family: 'DM Serif Display', serif;
          font-size: 1.1rem;
          color: #e8e4dd;
          margin-bottom: 4px;
        }

        .card-desc {
          font-size: 0.75rem;
          color: #363636;
          margin-bottom: 24px;
          letter-spacing: 0.01em;
        }

        .tool-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .tool-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tool-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
          opacity: 0.6;
          flex-shrink: 0;
          filter: grayscale(40%);
          transition: opacity 0.2s, filter 0.2s;
        }
        .skill-card:hover .tool-icon {
          opacity: 0.85;
          filter: grayscale(0%);
        }

        .tool-icon-placeholder {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tool-icon-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2a2a2a;
        }

        .tool-name {
          font-size: 0.82rem;
          color: #5a5a5a;
          flex: 1;
          transition: color 0.2s;
        }
        .skill-card:hover .tool-name { color: #848484; }

        .tool-level {
          font-size: 0.68rem;
          color: #2e2e2e;
          flex-shrink: 0;
          font-variant-numeric: tabular-nums;
        }

        .tool-bar-wrap {
          flex: 1;
        }

        @keyframes fillBar {
          from { width: 0; }
        }

        /* Proficiency legend */
        .legend {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
          flex-wrap: wrap;
        }

        .legend-label {
          font-size: 0.7rem;
          color: #2a2a2a;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-right: 4px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: #383838;
        }

        .legend-bar {
          width: 32px;
          height: 2px;
          border-radius: 2px;
          background: rgba(255,255,255,0.15);
        }

        /* Fade in */
        .fade-in {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }

        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr; }
          .skill-card.wide { grid-column: auto; }
        }
      `}</style>

      <div className="skills-page">
        <div className="skills-inner">

          <div className="fade-in d1">
            <h1 className="page-title">Skills & Tools</h1>
            <p className="page-subtitle">Technologies I work with and tools I rely on.</p>
          </div>

          <div className="skills-grid fade-in d2">
            {categories.map((cat, ci) => (
              <div
                key={cat.label}
                className={`skill-card${ci === categories.length - 1 ? " wide" : ""}`}
              >
                <div className="card-label">{cat.label}</div>
                <div className="card-desc">{cat.description}</div>
                <div className="tool-list">
                  {cat.tools.map((tool) => (
                    <div key={tool.name}>
                      <div className="tool-row">
                        {tool.img ? (
                          <img src={tool.img} alt={tool.name} className="tool-icon" loading="lazy" />
                        ) : (
                          <div className="tool-icon-placeholder">
                            <div className="tool-icon-dot" />
                          </div>
                        )}
                        <span className="tool-name">{tool.name}</span>
                        <span className="tool-level">{tool.level}%</span>
                      </div>
                      <SkillBar level={tool.level} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="legend">
            <span className="legend-label">Proficiency</span>
            {[
              { label: "Familiar", w: 30 },
              { label: "Proficient", w: 55 },
              { label: "Advanced", w: 80 },
            ].map((l) => (
              <span className="legend-item" key={l.label}>
                <span className="legend-bar" style={{ width: l.w * 0.6 }} />
                {l.label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;