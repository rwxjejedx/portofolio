import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAdminArticles, deleteArticle } from "../../services/api";

function AdminArticles() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("blog_token");
    if (!token) { navigate("/admin"); return; }
    getAdminArticles()
      .then(r => setArticles(r.data))
      .catch(() => { localStorage.removeItem("blog_token"); navigate("/admin"); })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Hapus artikel "${title}"?`)) return;
    await deleteArticle(id);
    setArticles(a => a.filter(x => x.id !== id));
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        .admin-page { font-family: 'DM Sans', sans-serif; background: #0d0d0d; min-height: 100vh; }
        .admin-header { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 18px 0; }
        .admin-title { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: #f0ede8; margin: 0; }
        .admin-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: 8px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          color: #aaa; font-size: 0.82rem; text-decoration: none;
          cursor: pointer; transition: background 0.18s; font-family: 'DM Sans', sans-serif;
        }
        .admin-btn:hover { background: rgba(255,255,255,0.1); }
        .admin-btn.danger { color: #f87171; border-color: rgba(248,113,113,0.2); background: transparent; }
        .admin-btn.danger:hover { background: rgba(248,113,113,0.08); }
        .admin-btn.primary { color: #d8d4cd; }
        .article-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.04); gap: 16px;
        }
        .article-row:last-child { border-bottom: none; }
        .article-row-title { font-size: 0.9rem; color: #d0ccc5; flex: 1; }
        .article-row-meta { font-size: 0.75rem; color: #444; }
        .status-badge {
          font-size: 0.7rem; padding: 3px 9px; border-radius: 999px;
          border: 1px solid; white-space: nowrap;
        }
        .status-published { color: #4ade80; border-color: rgba(74,222,128,0.25); background: rgba(74,222,128,0.06); }
        .status-draft { color: #666; border-color: rgba(255,255,255,0.08); background: transparent; }
        .skeleton { background: linear-gradient(90deg,#1a1a1a 25%,#222 50%,#1a1a1a 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 6px; }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      `}</style>

      <div className="admin-page">
        <div className="admin-header">
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Link to="/admin/dashboard" style={{ color: "#444", textDecoration: "none", fontSize: "0.85rem" }}>
                <i className="ri-arrow-left-line" />
              </Link>
              <h1 className="admin-title">Semua Artikel</h1>
            </div>
            <Link to="/admin/editor" className="admin-btn primary">
              <i className="ri-add-line" /> Tulis Baru
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="skeleton" style={{ height: 52 }} />
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#333" }}>
              <i className="ri-article-line" style={{ fontSize: "2.5rem", display: "block", marginBottom: 12 }} />
              <p style={{ fontSize: "0.9rem" }}>Belum ada artikel.</p>
              <Link to="/admin/editor" className="admin-btn" style={{ marginTop: 16, display: "inline-flex" }}>
                <i className="ri-add-line" /> Tulis Artikel Pertama
              </Link>
            </div>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "4px 20px" }}>
              {articles.map((a) => (
                <div key={a.id} className="article-row">
                  <div style={{ flex: 1 }}>
                    <p className="article-row-title">{a.title}</p>
                    <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
                      <span className="article-row-meta">
                        <i className="ri-calendar-line" style={{ marginRight: 4 }} />{formatDate(a.createdAt)}
                      </span>
                      <span className="article-row-meta">
                        <i className="ri-eye-line" style={{ marginRight: 4 }} />{a.views}
                      </span>
                      <span className="article-row-meta">
                        <i className="ri-chat-3-line" style={{ marginRight: 4 }} />{a._count.comments}
                      </span>
                    </div>
                  </div>
                  <span className={`status-badge ${a.published ? "status-published" : "status-draft"}`}>
                    {a.published ? "Published" : "Draft"}
                  </span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Link to={`/admin/editor/${a.id}`} className="admin-btn">
                      <i className="ri-edit-line" /> Edit
                    </Link>
                    <button className="admin-btn danger" onClick={() => handleDelete(a.id, a.title)}>
                      <i className="ri-delete-bin-line" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminArticles;
