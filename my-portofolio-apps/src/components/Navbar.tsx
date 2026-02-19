import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/portofolio", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap');

        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding: 20px 24px;
          pointer-events: none;
        }

        .navbar-pill {
          pointer-events: all;
          display: flex;
          align-items: center;
          gap: 2px;
          background: rgba(13, 13, 13, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          padding: 6px 8px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          box-shadow: 0 0 0 0 rgba(255,255,255,0);
        }

        .navbar-pill.scrolled {
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 8px 40px rgba(0,0,0,0.6);
          background: rgba(13, 13, 13, 0.92);
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #4a4a4a;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 999px;
          transition: color 0.2s ease, background 0.2s ease;
          letter-spacing: 0.01em;
          position: relative;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #a0a0a0;
          background: rgba(255,255,255,0.04);
        }

        .nav-link.active {
          color: #f0ede8;
          background: rgba(255,255,255,0.08);
        }

        /* Active dot indicator */
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #f0ede8;
          opacity: 0.6;
        }

        /* Divider between logo and links */
        .nav-divider {
          width: 1px;
          height: 18px;
          background: rgba(255,255,255,0.08);
          margin: 0 6px;
          flex-shrink: 0;
        }

        /* Logo text */
        .nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 0.95rem;
          color: #f0ede8;
          text-decoration: none;
          padding: 7px 14px;
          letter-spacing: -0.01em;
          white-space: nowrap;
          opacity: 0.9;
          transition: opacity 0.2s;
        }
        .nav-logo:hover { opacity: 1; }

        /* Mobile hamburger */
        .nav-burger {
          display: none;
          pointer-events: all;
          background: rgba(13,13,13,0.85);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 10px 14px;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          backdrop-filter: blur(16px);
        }

        .burger-line {
          width: 22px;
          height: 1.5px;
          background: #888;
          border-radius: 2px;
          transition: all 0.25s ease;
          transform-origin: center;
        }

        .nav-burger.open .burger-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .nav-burger.open .burger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .nav-burger.open .burger-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 16px;
          right: 16px;
          background: rgba(13,13,13,0.96);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 12px;
          backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
          gap: 2px;
          z-index: 49;
          transform-origin: top center;
          animation: menuIn 0.2s ease forwards;
        }

        @keyframes menuIn {
          from { opacity: 0; transform: scaleY(0.92) translateY(-8px); }
          to   { opacity: 1; transform: scaleY(1) translateY(0); }
        }

        .mobile-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #4a4a4a;
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: color 0.2s, background 0.2s;
        }
        .mobile-nav-link:hover { color: #aaa; background: rgba(255,255,255,0.04); }
        .mobile-nav-link.active { color: #f0ede8; background: rgba(255,255,255,0.07); }

        @media (max-width: 700px) {
          .navbar-pill { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>

      {/* Desktop floating pill */}
      <nav className="navbar-root">
        <div className={`navbar-pill${scrolled ? " scrolled" : ""}`}>
          <NavLink to="/" className="nav-logo">JM</NavLink>
          <div className="nav-divider" />
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile burger button */}
        <button
          className={`nav-burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `mobile-nav-link${isActive ? " active" : ""}`}
            >
              {label}
              <span style={{ fontSize: "0.7rem", opacity: 0.3 }}>→</span>
            </NavLink>
          ))}
        </div>
      )}

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div style={{ height: 80 }} />
    </>
  );
};

export default Navbar;