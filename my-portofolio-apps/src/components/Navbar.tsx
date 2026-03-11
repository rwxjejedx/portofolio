import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/portofolio", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

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
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 999px;
          padding: 6px 8px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        /* Dark pill */
        [data-theme="dark"] .navbar-pill {
          background: rgba(13, 13, 13, 0.75);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 0 0 0 rgba(255,255,255,0);
        }
        [data-theme="dark"] .navbar-pill.scrolled {
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 8px 40px rgba(0,0,0,0.6);
          background: rgba(13, 13, 13, 0.92);
        }

        /* Light pill */
        [data-theme="light"] .navbar-pill {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        [data-theme="light"] .navbar-pill.scrolled {
          border-color: rgba(0,0,0,0.12);
          box-shadow: 0 8px 40px rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.96);
        }

        /* Nav links - dark */
        [data-theme="dark"] .nav-link {
          color: #4a4a4a;
        }
        [data-theme="dark"] .nav-link:hover {
          color: #a0a0a0;
          background: rgba(255,255,255,0.04);
        }
        [data-theme="dark"] .nav-link.active {
          color: #f0ede8;
          background: rgba(255,255,255,0.08);
        }
        [data-theme="dark"] .nav-link.active::after {
          background: #f0ede8;
        }

        /* Nav links - light */
        [data-theme="light"] .nav-link {
          color: #999;
        }
        [data-theme="light"] .nav-link:hover {
          color: #333;
          background: rgba(0,0,0,0.04);
        }
        [data-theme="light"] .nav-link.active {
          color: #111;
          background: rgba(0,0,0,0.06);
        }
        [data-theme="light"] .nav-link.active::after {
          background: #111;
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 999px;
          transition: color 0.2s ease, background 0.2s ease;
          letter-spacing: 0.01em;
          position: relative;
          white-space: nowrap;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          opacity: 0.6;
        }

        .nav-divider {
          width: 1px;
          height: 18px;
          margin: 0 6px;
          flex-shrink: 0;
        }
        [data-theme="dark"] .nav-divider { background: rgba(255,255,255,0.08); }
        [data-theme="light"] .nav-divider { background: rgba(0,0,0,0.1); }

        /* Logo */
        .nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 0.95rem;
          text-decoration: none;
          padding: 7px 14px;
          letter-spacing: -0.01em;
          white-space: nowrap;
          opacity: 0.9;
          transition: opacity 0.2s;
        }
        .nav-logo:hover { opacity: 1; }
        [data-theme="dark"] .nav-logo { color: #f0ede8; }
        [data-theme="light"] .nav-logo { color: #111; }

        /* Theme toggle button */
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          font-size: 0.9rem;
          margin-left: 2px;
          flex-shrink: 0;
        }
        [data-theme="dark"] .theme-toggle {
          background: rgba(255,255,255,0.06);
          color: #888;
        }
        [data-theme="dark"] .theme-toggle:hover {
          background: rgba(255,255,255,0.1);
          color: #f0ede8;
        }
        [data-theme="light"] .theme-toggle {
          background: rgba(0,0,0,0.05);
          color: #888;
        }
        [data-theme="light"] .theme-toggle:hover {
          background: rgba(0,0,0,0.1);
          color: #111;
        }

        /* Mobile burger */
        .nav-burger {
          display: none;
          pointer-events: all;
          backdrop-filter: blur(16px);
          border-radius: 10px;
          padding: 10px 14px;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
        }
        [data-theme="dark"] .nav-burger {
          background: rgba(13,13,13,0.85);
          border: 1px solid rgba(255,255,255,0.1);
        }
        [data-theme="light"] .nav-burger {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
        }

        .burger-line {
          width: 22px;
          height: 1.5px;
          border-radius: 2px;
          transition: all 0.25s ease;
          transform-origin: center;
        }
        [data-theme="dark"] .burger-line { background: #888; }
        [data-theme="light"] .burger-line { background: #666; }

        .nav-burger.open .burger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-burger.open .burger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-burger.open .burger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 16px;
          right: 16px;
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
        [data-theme="dark"] .mobile-menu {
          background: rgba(13,13,13,0.96);
          border: 1px solid rgba(255,255,255,0.08);
        }
        [data-theme="light"] .mobile-menu {
          background: rgba(255,255,255,0.97);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        @keyframes menuIn {
          from { opacity: 0; transform: scaleY(0.92) translateY(-8px); }
          to   { opacity: 1; transform: scaleY(1) translateY(0); }
        }

        .mobile-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: color 0.2s, background 0.2s;
        }
        [data-theme="dark"] .mobile-nav-link { color: #4a4a4a; }
        [data-theme="dark"] .mobile-nav-link:hover { color: #aaa; background: rgba(255,255,255,0.04); }
        [data-theme="dark"] .mobile-nav-link.active { color: #f0ede8; background: rgba(255,255,255,0.07); }

        [data-theme="light"] .mobile-nav-link { color: #999; }
        [data-theme="light"] .mobile-nav-link:hover { color: #333; background: rgba(0,0,0,0.04); }
        [data-theme="light"] .mobile-nav-link.active { color: #111; background: rgba(0,0,0,0.06); }

        /* Mobile theme toggle row */
        .mobile-theme-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 10px;
          margin-top: 4px;
          cursor: pointer;
          transition: background 0.2s;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          border: none;
          width: 100%;
        }
        [data-theme="dark"] .mobile-theme-row {
          color: #4a4a4a;
          background: rgba(255,255,255,0.03);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        [data-theme="dark"] .mobile-theme-row:hover { background: rgba(255,255,255,0.06); }
        [data-theme="light"] .mobile-theme-row {
          color: #888;
          background: rgba(0,0,0,0.02);
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        [data-theme="light"] .mobile-theme-row:hover { background: rgba(0,0,0,0.05); }

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
          <div className="nav-divider" />
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <i className={isDark ? "ri-sun-line" : "ri-moon-line"} />
          </button>
        </div>

        {/* Mobile burger */}
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
          <button className="mobile-theme-row" onClick={toggleTheme}>
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            <i className={isDark ? "ri-sun-line" : "ri-moon-line"} style={{ fontSize: "1rem" }} />
          </button>
        </div>
      )}

      <div style={{ height: 80 }} />
    </>
  );
};

export default Navbar;
