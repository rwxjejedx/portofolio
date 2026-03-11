import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStats, getPendingComments, approveComment, deleteComment } from "../../services/api";

interface Stats {
  totalArticles: number;
  totalViews: number;
  totalComments: number;
  topArticles: { title: string; slug: string; views: number }[];
}

function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [pending, setPending] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("blog_token");
    if (!token) { navigate("/admin"); return; }
    getStats().then(r => setStats(r.data)).catch(() => { localStorage.removeItem("blog_token"); navigate("/admin"); });
    getPendingComments().then(r => setPending(r.data)).catch(() => {});
  }, [navigate]);

  const handleApprove = async (id: string) => {
    await approveComment(id);
    setPending(p => p.filter(c => c.id !== id));
  };

  const handleDeleteComment = async (id: string) => {
    await deleteComment(id);
    setPending(p => p.filter(c => c.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("blog_token");
    navigate("/admin");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        .admin-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
        }
        .admin-header {
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 18px 0;
        }
        .admin-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.6rem;
          color: #f0ede8;
          margin: 0;
        }
        .stat-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 22px 24px;
        }
        .stat-value {
          font-family: 'DM Serif Display', serif;
          font-size: 2.2rem;
          color: #f0ede8;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label { font-size: 0.8rem; color: #444; }
        .admin-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #aaa;
          font-size: 0.82rem;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.18s;
          font-family: 'DM Sans', sans-serif;
        }
        .admin-btn:hover { background: rgba(255,255,255,0.1); }
        .admin-btn.danger { color: #f87171; border-color: rgba(248,113,113,0.2); }
        .admin-btn.danger:hover { background: rgba(248,113,113,0.08); }
        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          color: #f0ede8;
          margin: 0 0 16px;
        }
        .pending-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 16px 18px;
        }
        .pending-author { font-size: 0.85rem; color: #d0ccc5; font-weight: 500; }
        .pending-article { font-size: 0.75rem; color: #444; margin: 3px 0 8px; }
        .pending-content { font-size: 0.85rem; color: #666; line-height: 1.6; }
        .top-article-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .top-article-row:last-child { border-bottom: none; }
      `}</style>

      <div className="admin-page">
        {/* Header */}
        <div className="admin-header">
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
            <h1 className="admin-title">Dashboard</h1>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Link to="/admin/articles" className="admin-btn">
                <i className="ri-article-line" /> Artikel
              </Link>
              <Link to="/admin/editor" className="admin-btn">
                <i className="ri-add-line" /> Tulis
              </Link>
              <Link to="/blog" className="admin-btn">
                <i className="ri-external-link-line" /> Lihat Blog
              </Link>
              <button className="admin-btn danger" onClick={handleLogout}>
                <i className="ri-logout-box-line" /> Keluar
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
            <div className="stat-card">
              <div className="stat-value">{stats?.totalArticles ?? "—"}</div>
              <div className="stat-label">Total Artikel</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats?.totalViews ?? "—"}</div>
              <div className="stat-label">Total Views</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats?.totalComments ?? "—"}</div>
              <div className="stat-label">Total Komentar</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* Top Articles */}
            <div>
              <h2 className="section-title">Artikel Terpopuler</h2>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "8px 20px" }}>
                {stats?.topArticles?.length === 0 && (
                  <p style={{ color: "#333", fontSize: "0.85rem", padding: "12px 0" }}>Belum ada artikel.</p>
                )}
                {stats?.topArticles?.map((a, i) => (
                  <div key={i} className="top-article-row">
                    <span style={{ fontSize: "0.85rem", color: "#888", flex: 1, paddingRight: 12 }}>{a.title}</span>
                    <span style={{ fontSize: "0.78rem", color: "#444", whiteSpace: "nowrap" }}>
                      <i className="ri-eye-line" style={{ marginRight: 4 }} />{a.views}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Comments */}
            <div>
              <h2 className="section-title">
                Komentar Pending
                {pending.length > 0 && (
                  <span style={{ fontSize: "0.75rem", color: "#f87171", marginLeft: 10, fontFamily: "'DM Sans', sans-serif" }}>
                    {pending.length} menunggu
                  </span>
                )}
              </h2>
              {pending.length === 0 ? (
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px", textAlign: "center" }}>
                  <i className="ri-checkbox-circle-line" style={{ color: "#4ade80", fontSize: "1.5rem", display: "block", marginBottom: 8 }} />
                  <p style={{ color: "#444", fontSize: "0.85rem", margin: 0 }}>Tidak ada komentar pending.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10, maxHeight: 400, overflowY: "auto" }}>
                  {pending.map((c) => (
                    <div key={c.id} className="pending-card">
                      <p className="pending-author">{c.authorName}</p>
                      <p className="pending-article">di: {c.article?.title}</p>
                      <p className="pending-content">{c.content}</p>
                      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                        <button className="admin-btn" style={{ color: "#4ade80", borderColor: "rgba(74,222,128,0.2)" }} onClick={() => handleApprove(c.id)}>
                          <i className="ri-check-line" /> Approve
                        </button>
                        <button className="admin-btn danger" onClick={() => handleDeleteComment(c.id)}>
                          <i className="ri-delete-bin-line" /> Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
