import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) { setError("Email dan password wajib diisi."); return; }
    setLoading(true); setError("");
    try {
      const res = await login(email, password);
      localStorage.setItem("blog_token", res.data.token);
      navigate("/admin/dashboard");
    } catch {
      setError("Email atau password salah.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        .login-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-card {
          width: 100%;
          max-width: 380px;
          padding: 40px 36px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
        }
        .login-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.8rem;
          color: #f0ede8;
          margin: 0 0 6px;
        }
        .login-sub { color: #444; font-size: 0.85rem; margin: 0 0 28px; }
        .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
        .field label { font-size: 0.78rem; color: #555; }
        .field input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 10px 14px;
          color: #e8e4dd;
          font-size: 0.9rem;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.18s;
        }
        .field input:focus { border-color: rgba(255,255,255,0.2); }
        .btn-login {
          width: 100%;
          padding: 11px;
          border-radius: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          color: #d8d4cd;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          font-family: 'DM Sans', sans-serif;
          margin-top: 8px;
        }
        .btn-login:hover:not(:disabled) { background: rgba(255,255,255,0.12); }
        .btn-login:disabled { opacity: 0.5; cursor: not-allowed; }
        .error-msg { color: #f87171; font-size: 0.8rem; margin: 0 0 12px; }
      `}</style>

      <div className="login-page">
        <div className="login-card">
          <div style={{ fontSize: "1.5rem", color: "#333", marginBottom: 16 }}>
            <i className="ri-lock-line" />
          </div>
          <h1 className="login-title">Admin</h1>
          <p className="login-sub">Masuk ke dashboard blog</p>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()} />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()} />
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button className="btn-login" onClick={handleLogin} disabled={loading}>
            {loading ? "Masuk..." : "Masuk →"}
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
