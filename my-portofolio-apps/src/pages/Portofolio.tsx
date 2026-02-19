const projects = [
  {
    id: "porto-website",
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio built with React, Vite, and Tailwind CSS. Features multi-page routing, AOS scroll animations, and a dark editorial design inspired by modern developer portfolios.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: null,
    github: "https://github.com/rwxjejedx/portofolio",
    live: "https://porto-orcin-three.vercel.app",
    featured: true,
  },
  {
    id: "company-app",
    title: "Company Web App",
    description:
      "A full-featured company application built with TypeScript. Structured for scalability with component-based architecture and clean separation of concerns.",
    tags: ["TypeScript", "React", "Node.js"],
    image: null,
    github: "https://github.com/rwxjejedx/companyApp",
    live: "https://company-six-plum.vercel.app/",
    featured: true,
  },
  {
    id: "backend-api",
    title: "Backend REST API",
    description:
      "A learning project focused on building robust backend services with Node.js and Express.js. Covers RESTful API design, middleware patterns, authentication, and database integration.",
    tags: ["TypeScript", "Node.js", "Express.js", "REST API"],
    image: null,
    github: "https://github.com/rwxjejedx/backend",
    live: null,
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  "React": "#61dafb22",
  "TypeScript": "#3178c622",
  "Tailwind CSS": "#38bdf822",
  "Vite": "#a78bfa22",
  "Node.js": "#4ade8022",
  "Express.js": "#86efac22",
  "REST API": "#fbbf2422",
};

function Portofolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .projects-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          position: relative;
        }

        .projects-inner {
          max-width: 820px;
          margin: 0 auto;
          padding: 80px 24px 120px;
        }

        .proj-page-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          color: #f0ede8;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .proj-page-sub {
          font-size: 0.9rem;
          color: #484848;
          font-style: italic;
          font-family: 'DM Serif Display', serif;
          margin-bottom: 56px;
        }

        /* Project card */
        .proj-card {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          overflow: hidden;
          background: #111;
          margin-bottom: 24px;
          transition: border-color 0.25s ease, transform 0.25s ease;
          position: relative;
        }
        .proj-card:hover {
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-3px);
        }

        /* Featured cards have a landscape image on top */
        .proj-card.featured {
          display: grid;
        }

        .proj-img-wrap {
          aspect-ratio: 16/7;
          overflow: hidden;
          background: #1a1a1a;
          position: relative;
        }

        .proj-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%) brightness(0.85);
          transition: filter 0.4s ease, transform 0.4s ease;
        }
        .proj-card:hover .proj-img-wrap img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.03);
        }

        /* No-image placeholder */
        .proj-img-placeholder {
          aspect-ratio: 16/7;
          background: #141414;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .proj-img-placeholder-inner {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 6px;
          opacity: 0.07;
          width: 70%;
        }
        .proj-img-placeholder-inner span {
          aspect-ratio: 1;
          background: #fff;
          border-radius: 3px;
        }

        .proj-body {
          padding: 28px 30px 30px;
        }

        .proj-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.35rem;
          color: #f0ede8;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .proj-desc {
          font-size: 0.88rem;
          color: #5c5c5c;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .proj-tag {
          font-size: 0.72rem;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.07);
          color: #606060;
          background: rgba(255,255,255,0.03);
          letter-spacing: 0.02em;
          font-weight: 500;
          transition: color 0.2s, border-color 0.2s;
        }
        .proj-card:hover .proj-tag {
          color: #888;
          border-color: rgba(255,255,255,0.12);
        }

        .proj-links {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .proj-link-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 500;
          padding: 7px 16px;
          border-radius: 7px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: #c8c4bc;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .proj-link-primary:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.2);
        }

        .proj-link-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          padding: 7px 16px;
          border-radius: 7px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.07);
          color: #484848;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }
        .proj-link-ghost:hover {
          color: #aaa;
          border-color: rgba(255,255,255,0.15);
        }

        /* Section divider */
        .section-sep {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin: 48px 0 40px;
        }

        .other-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.2rem;
          color: #f0ede8;
          margin-bottom: 20px;
        }

        /* Fade in */
        .fade-in {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }
        .d3 { animation-delay: 0.25s; }
        .d4 { animation-delay: 0.35s; }
        .d5 { animation-delay: 0.45s; }

        /* "Open to work" banner */
        .open-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(74, 222, 128, 0.04);
          border: 1px solid rgba(74, 222, 128, 0.12);
          border-radius: 10px;
          padding: 14px 20px;
          margin-bottom: 48px;
          font-size: 0.85rem;
          color: #5a5a5a;
        }
        .open-banner strong { color: #4ade80; font-weight: 500; }
        .open-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80aa;
          flex-shrink: 0;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

        @media (max-width: 600px) {
          .proj-body { padding: 20px; }
        }
      `}</style>

      <div className="projects-page">
        <div className="projects-inner">

          {/* Header */}
          <div className="fade-in d1">
            <h1 className="proj-page-title">Curated Projects</h1>
            <p className="proj-page-sub">Showcase of my projects that I'm proud of.</p>
          </div>

          {/* Open to work banner */}
          <div className="open-banner fade-in d2">
            <span className="open-dot" />
            <span>
              <strong>Open to work</strong> — actively looking for Full Stack or Cloud opportunities.
              {" "}
              <a href="mailto:julhammaulana@gmail.com" style={{ color: "#4a6a5a", textDecoration: "underline", textUnderlineOffset: 3 }}>
                Get in touch
              </a>
            </span>
          </div>

          {/* Featured projects */}
          <div>
            {projects.filter(p => p.featured).map((project, i) => (
              <div
                key={project.id}
                className={`proj-card featured fade-in d${i + 2}`}
              >
                {project.image ? (
                  <div className="proj-img-wrap">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                ) : (
                  <div className="proj-img-placeholder">
                    <div className="proj-img-placeholder-inner">
                      {Array.from({ length: 24 }).map((_, j) => <span key={j} />)}
                    </div>
                  </div>
                )}
                <div className="proj-body">
                  <h2 className="proj-title">{project.title}</h2>
                  <p className="proj-desc">{project.description}</p>
                  <div className="proj-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="proj-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link-primary"
                    >
                      <i className="ri-github-fill" style={{ fontSize: "0.95rem" }} />
                      Repository
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-ghost"
                      >
                        <i className="ri-external-link-line" style={{ fontSize: "0.9rem" }} />
                        Open Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider + other projects */}
          <hr className="section-sep" />
          <h3 className="other-title fade-in d4">Other Projects</h3>

          <div>
            {projects.filter(p => !p.featured).map((project, i) => (
              <div
                key={project.id}
                className={`proj-card fade-in d${i + 4}`}
              >
                <div className="proj-img-placeholder" style={{ aspectRatio: "16/5" }}>
                  <div className="proj-img-placeholder-inner">
                    {Array.from({ length: 24 }).map((_, j) => <span key={j} />)}
                  </div>
                </div>
                <div className="proj-body">
                  <h2 className="proj-title">{project.title}</h2>
                  <p className="proj-desc">{project.description}</p>
                  <div className="proj-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="proj-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link-primary"
                    >
                      <i className="ri-github-fill" style={{ fontSize: "0.95rem" }} />
                      Repository
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-ghost"
                      >
                        <i className="ri-external-link-line" style={{ fontSize: "0.9rem" }} />
                        Open Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <hr className="section-sep" />
          <div className="fade-in d5" style={{ textAlign: "center" }}>
            <p style={{ color: "#3a3a3a", fontSize: "0.85rem", marginBottom: 16 }}>
              More repositories on GitHub
            </p>
            <a
              href="https://github.com/rwxjejedx"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link-primary"
              style={{ display: "inline-flex" }}
            >
              <i className="ri-github-fill" />
              View GitHub Profile
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Portofolio;