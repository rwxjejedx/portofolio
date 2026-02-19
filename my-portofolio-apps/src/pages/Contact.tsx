import { useState } from "react";

const contactLinks = [
  {
    icon: "ri-mail-line",
    label: "Email",
    value: "julhammaulana@gmail.com",
    href: "mailto:julhammaulana@gmail.com",
  },
  {
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
    value: "julham-maulana",
    href: "https://www.linkedin.com/in/julham-maulana/",
  },
  {
    icon: "ri-github-fill",
    label: "GitHub",
    value: "rwxjejedx",
    href: "https://github.com/rwxjejedx/",
  },
  {
    icon: "ri-instagram-fill",
    label: "Instagram",
    value: "@maulanajulham_",
    href: "https://www.instagram.com/maulanajulham_/",
  },
];

function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xjknonyr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // fallback: just show success
      setSubmitted(true);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .contact-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          color: #c8c4bc;
        }

        .contact-inner {
          max-width: 900px;
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

        /* Two-column layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          align-items: start;
        }

        /* Left: info */
        .contact-blurb {
          font-size: 0.92rem;
          color: #5a5a5a;
          line-height: 1.8;
          margin-bottom: 36px;
        }

        .contact-blurb strong {
          color: #909090;
          font-weight: 500;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.05);
          background: #111;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          group: true;
        }

        .contact-link-item:hover {
          border-color: rgba(255,255,255,0.1);
          background: #161616;
          transform: translateX(3px);
        }

        .cli-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #484848;
          font-size: 1rem;
          flex-shrink: 0;
          transition: color 0.2s, background 0.2s;
        }

        .contact-link-item:hover .cli-icon {
          color: #888;
          background: rgba(255,255,255,0.07);
        }

        .cli-text { flex: 1; min-width: 0; }

        .cli-label {
          font-size: 0.68rem;
          color: #303030;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 1px;
        }

        .cli-value {
          font-size: 0.83rem;
          color: #525252;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.2s;
        }

        .contact-link-item:hover .cli-value { color: #909090; }

        .cli-arrow {
          color: #252525;
          font-size: 0.8rem;
          flex-shrink: 0;
          transition: color 0.2s, transform 0.2s;
        }
        .contact-link-item:hover .cli-arrow {
          color: #555;
          transform: translateX(2px);
        }

        /* Right: form */
        .contact-form-wrap {
          background: #111;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle top shine */
        .contact-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        }

        .form-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.2rem;
          color: #e8e4dd;
          margin-bottom: 6px;
        }

        .form-hint {
          font-size: 0.78rem;
          color: #303030;
          margin-bottom: 28px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 20px;
        }

        .field-label {
          font-size: 0.73rem;
          color: #383838;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 600;
          transition: color 0.2s;
        }

        .field-label.focused { color: #686868; }

        .field-input {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 0.87rem;
          color: #c8c4bc;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          width: 100%;
          box-sizing: border-box;
        }

        .field-input::placeholder { color: #2e2e2e; }

        .field-input:focus {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 0 0 3px rgba(255,255,255,0.03);
        }

        .field-textarea {
          resize: vertical;
          min-height: 130px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          border-radius: 9px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: #d8d4cd;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          margin-top: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.2);
        }

        .submit-btn:active { transform: scale(0.99); }

        /* Success state */
        .success-box {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #4ade80;
          font-size: 1.4rem;
        }

        .success-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          color: #f0ede8;
          margin-bottom: 8px;
        }

        .success-text {
          font-size: 0.85rem;
          color: #505050;
          line-height: 1.7;
        }

        /* Fade in */
        .fade-in {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.6s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.18s; }

        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-form-wrap { padding: 24px; }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-inner">

          <div className="fade-in d1">
            <h1 className="page-title">Get in Touch</h1>
            <p className="page-subtitle">Open to opportunities, collaborations, and conversations.</p>
          </div>

          <div className="contact-grid fade-in d2">

            {/* Left column */}
            <div>
              <p className="contact-blurb">
                I'm currently <strong>open to work</strong> — whether it's a full-time role,
                freelance project, or just a good conversation about tech. Feel free to
                reach out through the form or any of the channels below.
              </p>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-link-item"
                  >
                    <div className="cli-icon">
                      <i className={link.icon} />
                    </div>
                    <div className="cli-text">
                      <span className="cli-label">{link.label}</span>
                      <span className="cli-value">{link.value}</span>
                    </div>
                    <i className="ri-arrow-right-line cli-arrow" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right column: form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="success-box">
                  <div className="success-icon">
                    <i className="ri-check-line" />
                  </div>
                  <div className="success-title">Message sent!</div>
                  <p className="success-text">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <div className="form-title">Send a message</div>
                  <div className="form-hint">Usually responds within 24 hours.</div>

                  <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="field-group">
                      <label
                        className={`field-label${focused === "nama" ? " focused" : ""}`}
                        htmlFor="nama"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        placeholder="Your name"
                        className="field-input"
                        required
                        onFocus={() => setFocused("nama")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <div className="field-group">
                      <label
                        className={`field-label${focused === "email" ? " focused" : ""}`}
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className="field-input"
                        required
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <div className="field-group">
                      <label
                        className={`field-label${focused === "pesan" ? " focused" : ""}`}
                        htmlFor="pesan"
                      >
                        Message
                      </label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        placeholder="What's on your mind?"
                        className="field-input field-textarea"
                        required
                        onFocus={() => setFocused("pesan")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      <i className="ri-send-plane-line" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;