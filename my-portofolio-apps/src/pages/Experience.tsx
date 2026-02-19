const experiences = [
  {
    period: "MEI 2024 – OKT 2025",
    duration: "1 yr 5 mos",
    title: "IT Support & Data Specialist",
    company: "PT. Panen Unduh Kencana",
    location: "Bekasi, Indonesia",
    description: "A property company specializing in housing development in the Bekasi and Subang regions.",
    bullets: [
      "Oversaw office IT infrastructure including hardware maintenance and LAN configuration, ensuring zero operational downtime.",
      "Designed and deployed a Centralized File Sharing Server for Legality and Marketing divisions, improving cross-departmental collaboration efficiency by 80%.",
      "Managed large-scale consumer database (Sertifikat, IMB, and Akta Jual Beli) with high precision and confidentiality.",
      "Streamlined the weekly sales reporting process by migrating manual records to a digital database, reducing reporting time by 50%.",
      "Provided rapid hardware/software troubleshooting for all company workstations, minimizing staff productivity loss.",
      "Managed systematic database of consumer financial transactions including booking fees and down payments.",
      "Collaborated with marketing team for daily reconciliation of sold units and inventory status.",
    ],
  },
];

const bootcamps = [
  {
    period: "NOV 2025 – FEB 2026",
    title: "Full Stack Software Developer",
    company: "Purwadhika Digital Technology School",
    bullets: [
      "Developed responsive web applications using React.js, Vite, and Tailwind CSS.",
      "Built robust backend services with Node.js and Express.js, integrating RESTful APIs.",
      "Implemented CI/CD pipelines to automate testing and deployment workflows.",
    ],
  },
  {
    period: "OKT 2025 – DES 2025",
    title: "AWS re/Start Graduate",
    company: "Amazon Web Services (AWS)",
    bullets: [
      "Mastered AWS core services (EC2, S3, IAM, VPC) and Linux system administration.",
      "Completed 20+ hands-on labs focused on cloud architecture and security best practices.",
    ],
  },
  {
    period: "JUN 2025 – AGS 2025",
    title: "Fullstack Web Programming",
    company: "Jabar Digital Academy",
    bullets: [
      "Focused on building high-performance, SEO-friendly web applications using Next.js.",
      "Mastered modern state management and component-based architecture.",
    ],
  },
];

const certifications = [
  { name: "Junior Web Programming – BNSP", year: "2023" },
  { name: "Fullstack Web Programming – Alkademi", year: "2025" },
  { name: "AWS re/Start Program – Orbit Future Academy", year: "2025" },
];

const skills = [
  { label: "Frontend", value: "JavaScript (ES6+), React.js, Next.js, Tailwind CSS, Vite, HTML5, CSS3" },
  { label: "Backend", value: "Node.js, Express.js, RESTful APIs, MySQL, PostgreSQL" },
  { label: "Cloud & DevOps", value: "AWS (EC2, S3, IAM, VPC), Linux Administration, Git/GitHub" },
  { label: "IT Operations", value: "System Troubleshooting, Network Configuration (LAN/TCP/IP), Hardware & Software Maintenance" },
];

function Experience() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .exp-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          color: #c8c4bc;
        }

        .exp-inner {
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
          margin-bottom: 56px;
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
          margin-bottom: 28px;
        }

        /* Timeline items */
        .timeline-list {
          display: flex;
          flex-direction: column;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 28px;
          padding: 32px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }

        .timeline-item:first-child { padding-top: 0; }
        .timeline-item:last-child { border-bottom: none; }

        .tl-meta { padding-top: 3px; }

        .tl-period {
          font-size: 0.7rem;
          color: #3a3a3a;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.5;
          margin-bottom: 4px;
        }

        .tl-duration {
          font-size: 0.68rem;
          color: #2e2e2e;
        }

        .tl-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.1rem;
          color: #e8e4dd;
          margin-bottom: 4px;
        }

        .tl-company {
          font-size: 0.82rem;
          color: #505050;
          margin-bottom: 3px;
        }

        .tl-location {
          font-size: 0.74rem;
          color: #363636;
          margin-bottom: 12px;
        }

        .tl-desc {
          font-size: 0.87rem;
          color: #4a4a4a;
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 14px;
        }

        .tl-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tl-bullets li {
          font-size: 0.86rem;
          color: #646464;
          line-height: 1.75;
          padding-left: 16px;
          position: relative;
        }

        .tl-bullets li::before {
          content: '·';
          position: absolute;
          left: 0;
          color: #2e2e2e;
          font-size: 1.2rem;
          line-height: 1.4;
        }

        /* Education */
        .edu-block {
          padding: 24px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .edu-block:last-child { border-bottom: none; }
        .edu-degree {
          font-size: 0.95rem;
          color: #c8c4bc;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .edu-uni {
          font-size: 0.84rem;
          color: #505050;
          margin-bottom: 3px;
        }
        .edu-year {
          font-size: 0.74rem;
          color: #363636;
          margin-bottom: 10px;
        }
        .edu-note {
          font-size: 0.82rem;
          color: #464646;
          line-height: 1.7;
        }

        /* Certifications */
        .cert-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 0.87rem;
          color: #686868;
        }
        .cert-item:last-child { border-bottom: none; }
        .cert-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2a5a3a;
          flex-shrink: 0;
        }
        .cert-year {
          margin-left: auto;
          color: #2e2e2e;
          font-size: 0.74rem;
          flex-shrink: 0;
        }

        /* Technical skills */
        .skill-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 20px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .skill-row:last-child { border-bottom: none; }
        .skill-label {
          font-size: 0.7rem;
          color: #363636;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          padding-top: 2px;
        }
        .skill-value {
          font-size: 0.86rem;
          color: #626262;
          line-height: 1.75;
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
        .d3 { animation-delay: 0.25s; }
        .d4 { animation-delay: 0.35s; }
        .d5 { animation-delay: 0.45s; }
        .d6 { animation-delay: 0.55s; }

        @media (max-width: 600px) {
          .timeline-item { grid-template-columns: 1fr; gap: 4px; }
          .skill-row { grid-template-columns: 1fr; gap: 4px; }
        }
      `}</style>

      <div className="exp-page">
        <div className="exp-inner">

          {/* Header */}
          <div className="fade-in d1">
            <h1 className="page-title">Experience</h1>
            <p className="page-subtitle">Career, training, and the skills I've built along the way.</p>
          </div>

          {/* Professional Experience */}
          <div className="fade-in d2">
            <h2 className="section-heading">Professional Experience</h2>
            <div className="timeline-list">
              {experiences.map((exp) => (
                <div className="timeline-item" key={exp.title}>
                  <div className="tl-meta">
                    <div className="tl-period">{exp.period}</div>
                    {exp.duration && <div className="tl-duration">{exp.duration}</div>}
                  </div>
                  <div>
                    <div className="tl-title">{exp.title}</div>
                    <div className="tl-company">{exp.company}</div>
                    <div className="tl-location">{exp.location}</div>
                    <div className="tl-desc">{exp.description}</div>
                    <ul className="tl-bullets">
                      {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          {/* Bootcamps */}
          <div className="fade-in d3">
            <h2 className="section-heading">Bootcamps & Training</h2>
            <div className="timeline-list">
              {bootcamps.map((b) => (
                <div className="timeline-item" key={b.title}>
                  <div className="tl-meta">
                    <div className="tl-period">{b.period}</div>
                  </div>
                  <div>
                    <div className="tl-title">{b.title}</div>
                    <div className="tl-company">{b.company}</div>
                    <ul className="tl-bullets" style={{ marginTop: 12 }}>
                      {b.bullets.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          {/* Education */}
          <div className="fade-in d4">
            <h2 className="section-heading">Education</h2>
            <div className="edu-block">
              <div className="edu-degree">Bachelor of Informatics Engineering</div>
              <div className="edu-uni">Universitas Mercu Buana Jakarta</div>
              <div className="edu-year">2019 – 2024</div>
              <div className="edu-note">
                Relevant courses: Web Programming, Data Structures, Computer Networks, Database Management Systems, System Analysis & Design.
              </div>
            </div>
          </div>

          <hr className="section-divider" />

          {/* Certifications */}
          <div className="fade-in d5">
            <h2 className="section-heading">Certifications</h2>
            <div>
              {certifications.map((cert) => (
                <div className="cert-item" key={cert.name}>
                  <span className="cert-dot" />
                  <span>{cert.name}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          {/* Technical Skills */}
          <div className="fade-in d6">
            <h2 className="section-heading">Technical Skills</h2>
            <div>
              {skills.map((skill) => (
                <div className="skill-row" key={skill.label}>
                  <span className="skill-label">{skill.label}</span>
                  <span className="skill-value">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Experience;