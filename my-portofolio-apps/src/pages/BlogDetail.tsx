import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, createComment } from "../services/api";
import ReactMarkdown from "react-markdown";

interface Comment {
  id: string;
  authorName: string;
  content: string;
  createdAt: string;
}

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  views: number;
  createdAt: string;
  author: { name: string };
  comments: Comment[];
}

function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Comment form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [commentError, setCommentError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await getArticleBySlug(slug!);
        setArticle(res.data);
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [slug]);

  const handleComment = async () => {
    if (!name || !email || !content) {
      setCommentError("Semua field wajib diisi.");
      return;
    }
    setSubmitting(true);
    setCommentError("");
    try {
      await createComment({ articleId: article!.id, authorName: name, authorEmail: email, content });
      setSubmitted(true);
      setName(""); setEmail(""); setContent("");
    } catch {
      setCommentError("Gagal mengirim komentar. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  if (loading) return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 28, height: 28, border: "2px solid #2a2a2a", borderTop: "2px solid #666", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  if (notFound) return (
    <>
      <div style={{ background: "#0d0d0d", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#444", fontFamily: "'DM Sans', sans-serif" }}>
        <i className="ri-file-unknow-line" style={{ fontSize: "3rem", marginBottom: 12 }} />
        <p style={{ fontSize: "0.95rem" }}>Artikel tidak ditemukan.</p>
        <Link to="/blog" style={{ marginTop: 16, color: "#666", fontSize: "0.85rem", textDecoration: "none" }}>← Kembali ke Blog</Link>
      </div>
    </>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .detail-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
        }

        .detail-cover {
          width: 100%;
          height: clamp(220px, 40vh, 420px);
          object-fit: cover;
        }

        .detail-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: #f0ede8;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .detail-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          font-size: 0.8rem;
          color: #444;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 40px;
        }

        .detail-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .detail-tag {
          font-size: 0.72rem;
          color: #555;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          padding: 2px 8px;
        }

        /* Markdown content styles */
        .prose h1, .prose h2, .prose h3 {
          font-family: 'DM Serif Display', serif;
          color: #f0ede8;
          letter-spacing: -0.02em;
          margin: 2em 0 0.6em;
          line-height: 1.2;
        }
        .prose h1 { font-size: 2rem; }
        .prose h2 { font-size: 1.55rem; }
        .prose h3 { font-size: 1.25rem; }

        .prose p {
          color: #8a8680;
          font-size: 1rem;
          line-height: 1.85;
          margin: 0 0 1.4em;
        }

        .prose a { color: #7c9cff; text-decoration: none; }
        .prose a:hover { text-decoration: underline; }

        .prose code {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 0.87em;
          color: #c8b9f0;
          font-family: 'Courier New', monospace;
        }

        .prose pre {
          background: #111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 20px;
          overflow-x: auto;
          margin: 1.6em 0;
        }
        .prose pre code {
          background: none;
          border: none;
          padding: 0;
          color: #c8c4bd;
          font-size: 0.88rem;
        }

        .prose blockquote {
          border-left: 3px solid rgba(255,255,255,0.12);
          padding-left: 20px;
          margin: 1.6em 0;
          color: #555;
          font-style: italic;
        }

        .prose ul, .prose ol {
          color: #8a8680;
          padding-left: 1.5em;
          margin: 0 0 1.4em;
          line-height: 1.85;
        }

        .prose img {
          width: 100%;
          border-radius: 10px;
          margin: 1.6em 0;
        }

        .prose hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 2.5em 0;
        }

        /* Comment section */
        .comment-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 18px 20px;
        }

        .comment-author {
          font-size: 0.85rem;
          color: #d0ccc5;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .comment-content {
          font-size: 0.88rem;
          color: #666;
          line-height: 1.7;
        }

        .comment-date {
          font-size: 0.72rem;
          color: #333;
          margin-top: 8px;
        }

        .form-field {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 9px;
          padding: 11px 14px;
          color: #e8e4dd;
          font-size: 0.88rem;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.18s;
          box-sizing: border-box;
        }
        .form-field::placeholder { color: #333; }
        .form-field:focus { border-color: rgba(255,255,255,0.18); }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          color: #d8d4cd;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-submit:hover:not(:disabled) { background: rgba(255,255,255,0.12); }
        .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #444;
          font-size: 0.83rem;
          text-decoration: none;
          transition: color 0.18s;
          margin-bottom: 32px;
        }
        .back-link:hover { color: #888; }

        .section-label {
          font-family: 'DM Serif Display', serif;
          font-size: 1.4rem;
          color: #f0ede8;
          margin: 0 0 20px;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.55s ease forwards;
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.3s; }
      `}</style>

      <div className="detail-page">

        {/* Cover image */}
        {article?.coverImage && (
          <img src={article.coverImage} alt={article?.title} className="detail-cover" />
        )}

        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16">

          {/* Back */}
          <Link to="/blog" className="back-link fade-up d1">
            <i className="ri-arrow-left-line" /> Semua Artikel
          </Link>

          {/* Header */}
          <div className="fade-up d2">
            {article?.tags && article.tags.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                {article.tags.map((t) => <span key={t} className="detail-tag">#{t}</span>)}
              </div>
            )}
            <h1 className="detail-title">{article?.title}</h1>
            <div className="detail-meta">
              <span className="detail-meta-item">
                <i className="ri-user-3-line" /> {article?.author.name}
              </span>
              <span className="detail-meta-item">
                <i className="ri-calendar-line" /> {formatDate(article!.createdAt)}
              </span>
              <span className="detail-meta-item">
                <i className="ri-eye-line" /> {article?.views} views
              </span>
              <span className="detail-meta-item">
                <i className="ri-chat-3-line" /> {article?.comments.length} komentar
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose fade-up d3">
            <ReactMarkdown>{article?.content || ""}</ReactMarkdown>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", margin: "56px 0 48px" }} />

          {/* Comments */}
          <div>
            <h2 className="section-label">
              Komentar ({article?.comments.length || 0})
            </h2>

            {article?.comments.length === 0 ? (
              <p style={{ color: "#333", fontSize: "0.88rem", marginBottom: 40 }}>
                Belum ada komentar. Jadilah yang pertama!
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                {article?.comments.map((c) => (
                  <div key={c.id} className="comment-card">
                    <p className="comment-author">{c.authorName}</p>
                    <p className="comment-content">{c.content}</p>
                    <p className="comment-date">{formatDate(c.createdAt)}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Comment form */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", color: "#f0ede8", fontSize: "1.1rem", margin: "0 0 20px" }}>
                Tinggalkan Komentar
              </h3>

              {submitted ? (
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#4ade80", fontSize: "0.88rem" }}>
                  <i className="ri-checkbox-circle-line" />
                  Komentar terkirim! Menunggu moderasi sebelum ditampilkan.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <input
                      className="form-field"
                      placeholder="Nama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="form-field"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <textarea
                    className="form-field"
                    placeholder="Tulis komentar..."
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ resize: "vertical" }}
                  />
                  {commentError && (
                    <p style={{ color: "#f87171", fontSize: "0.8rem", margin: 0 }}>{commentError}</p>
                  )}
                  <div>
                    <button className="btn-submit" onClick={handleComment} disabled={submitting}>
                      {submitting ? <><i className="ri-loader-4-line" /> Mengirim...</> : <>Kirim Komentar <i className="ri-send-plane-line" /></>}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default BlogDetail;
