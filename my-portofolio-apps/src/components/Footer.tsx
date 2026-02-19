import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portofolio", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://github.com/rwxjejedx/",
    icon: "ri-github-fill",
    label: "GitHub",
    glow: "#ffffff",
  },
  {
    href: "https://www.instagram.com/maulanajulham_/",
    icon: "ri-instagram-fill",
    label: "Instagram",
    glow: "#e1306c",
  },
  {
    href: "https://x.com/Maulanajulham_",
    icon: "ri-twitter-x-fill",
    label: "Twitter/X",
    glow: "#ffffff",
  },
  {
    href: "https://www.linkedin.com/in/julham-maulana/",
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
    glow: "#0a66c2",
  },
];

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .footer-root {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          margin-top: 100px;
          overflow: hidden;
        }

        /* Gradient top divider */
        .footer-gradient-line {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.04) 20%,
            rgba(255,255,255,0.12) 50%,
            rgba(255,255,255,0.04) 80%,
            transparent 100%
          );
          margin-bottom: 0;
        }

        .footer-inner {
          padding: 64px 24px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Big name display */
        .footer-name {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(3rem, 9vw, 7rem);
          color: #f0ede8;
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
          opacity: 0.06;
          user-select: none;
          pointer-events: none;
          position: absolute;
          bottom: 40px;
          left: 20px;
          right: 20px;
          white-space: nowrap;
          overflow: hidden;
        }

        /* Content grid */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 48px;
          align-items: start;
        }

        /* Left: tagline + email */
        .footer-tagline {
          font-family: 'DM Serif Display', serif;
          font-size: 1.6rem;
          color: #f0ede8;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .footer-tagline em {
          font-style: italic;
          color: #686868;
        }

        .footer-email-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #3a3a3a;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          padding: 7px 16px;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          margin-top: 4px;
        }
        .footer-email-link:hover {
          color: #aaa;
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.03);
        }

        /* Nav column */
        .footer-nav-title {
          font-size: 0.65rem;
          color: #2a2a2a;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-link {
          font-size: 0.85rem;
          color: #3a3a3a;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0;
          transition: color 0.2s, gap 0.2s;
          position: relative;
          overflow: hidden;
        }

        .footer-nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: rgba(255,255,255,0.2);
          transition: width 0.25s ease;
        }

        .footer-nav-link:hover {
          color: #909090;
        }
        .footer-nav-link:hover::after {
          width: 100%;
        }

        /* Social column */
        .footer-social-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: #3a3a3a;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }

        .footer-social-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          font-size: 0.95rem;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, color 0.2s;
          color: #3a3a3a;
        }

        .footer-social-link:hover .footer-social-icon {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.12);
        }

        .footer-social-link:hover {
          color: #888;
        }

        /* Individual social glow colors on hover */
        .social-github:hover .footer-social-icon {
          box-shadow: 0 0 12px rgba(255,255,255,0.12);
          color: #fff;
        }
        .social-instagram:hover .footer-social-icon {
          box-shadow: 0 0 12px rgba(225,48,108,0.25);
          color: #e1306c;
        }
        .social-twitter:hover .footer-social-icon {
          box-shadow: 0 0 12px rgba(255,255,255,0.1);
          color: #ddd;
        }
        .social-linkedin:hover .footer-social-icon {
          box-shadow: 0 0 12px rgba(10,102,194,0.35);
          color: #0a66c2;
        }

        /* Bottom bar */
        .footer-bottom {
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-size: 0.73rem;
          color: #252525;
          letter-spacing: 0.03em;
        }

        .footer-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.73rem;
          color: #2a2a2a;
        }

        .footer-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80aa;
          animation: fpulse 2.2s ease-in-out infinite;
        }

        @keyframes fpulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        @media (max-width: 700px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-left { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-gradient-line" />

        <div className="footer-inner">
          <div className="footer-grid">

            {/* Left: tagline + email */}
            <div className="footer-left">
              <div className="footer-tagline">
                Let's build something<br />
                <em>meaningful together.</em>
              </div>
              <a href="mailto:julhammaulana@gmail.com" className="footer-email-link">
                <i className="ri-mail-line" style={{ fontSize: "0.85rem" }} />
                julhammaulana@gmail.com
              </a>
            </div>

            {/* Navigation */}
            <div>
              <div className="footer-nav-title">Navigation</div>
              <ul className="footer-nav-list">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer-nav-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <div className="footer-nav-title">Find me on</div>
              <ul className="footer-social-list">
                {socials.map(({ href, icon, label }) => {
                  const slug = label.toLowerCase().replace("/x", "").replace("/", "");
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`footer-social-link social-${slug}`}
                      >
                        <span className="footer-social-icon">
                          <i className={icon} />
                        </span>
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <span className="footer-copy">
              © {new Date().getFullYear()} Julham Maulana. All rights reserved.
            </span>
            <span className="footer-status">
              <span className="footer-status-dot" />
              Available for work
            </span>
          </div>
        </div>

        {/* Ghost watermark name */}
        <div className="footer-name" aria-hidden="true">Julham</div>
      </footer>
    </>
  );
};

export default Footer;