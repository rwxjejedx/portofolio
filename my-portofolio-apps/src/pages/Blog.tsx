import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../services/api";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  views: number;
  createdAt: string;
  author: { name: string };
  _count: { comments: number };
}

function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [allTags, setAllTags] = useState<string[]>([]);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getArticles({ search, tag: activeTag, page, limit: 9 });
      setArticles(res.data.articles);
      setTotalPages(res.data.pagination.totalPages);
      const tags = Array.from(
        new Set(res.data.articles.flatMap((a: Article) => a.tags))
      ) as string[];
      if (page === 1) setAllTags(tags);
    } catch {
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [search, activeTag, page]);

  useEffect(() => {
    const timer = setTimeout(fetchArticles, 300);
    return () => clearTimeout(timer);
  }, [fetchArticles]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .blog-page {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          position: relative;
        }

        /* ── Matches .projects-inner exactly ── */
        .blog-inner {
          max-width: 820px;
          margin: auto;
          padding: 80px 24px 120px;
        }

        .blog-page-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          color: #f0ede8;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .blog-page-sub {
          font-size: 0.9rem;
          color: #484848;
          font-style: italic;
          font-family: 'DM Serif Display', serif;
          margin-bottom: 40px;
        }

        /* Search */
        .search-wrap {
          position: relative;
          width: 100%;
        }

        .search-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 9px 40px 9px 14px;
          color: #e8e4dd;
          font-size: 0.88rem;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .search-input::placeholder { color: #383838; }
        .search-input:focus {
          border-color: rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.05);
        }

        .search-icon {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #383838;
          font-size: 0.95rem;
          pointer-events: none;
        }

        /* Tags */
        .tag-pill {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.07);
          font-size: 0.72rem;
          color: #606060;
          background: rgba(255,255,255,0.03);
          cursor: pointer;
          transition: all 0.18s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
          font-weight: 500;
        }
        .tag-pill:hover { color: #aaa; border-color: rgba(255,255,255,0.15); }
        .tag-pill.active {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.18);
          color: #c8c4bc;
        }

        /* Article card — matches .proj-card */
        .article-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          overflow: hidden;
          background: #111;
          margin-bottom: 24px;
          transition: border-color 0.25s ease, transform 0.25s ease;
          text-decoration: none;
          display: block;
          position: relative;
        }
        .article-card:hover {
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-3px);
        }

        .article-cover {
          width: 100%;
          aspect-ratio: 16/7;
          object-fit: cover;
          filter: grayscale(20%) brightness(0.85);
          transition: filter 0.4s ease, transform 0.4s ease;
          display: block;
        }
        .article-card:hover .article-cover {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.03);
        }

        /* Placeholder — matches .proj-img-placeholder */
        .article-cover-placeholder {
          aspect-ratio: 16/7;
          background: #141414;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .placeholder-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 6px;
          opacity: 0.07;
          width: 70%;
        }
        .placeholder-grid span {
          aspect-ratio: 1;
          background: #fff;
          border-radius: 3px;
        }

        /* Card body — matches .proj-body */
        .article-body {
          padding: 28px 30px 30px;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 10px;
        }

        .article-tag {
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
        .article-card:hover .article-tag {
          color: #888;
          border-color: rgba(255,255,255,0.12);
        }

        .article-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.35rem;
          color: #f0ede8;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }

        .article-excerpt {
          font-size: 0.88rem;
          color: #5c5c5c;
          line-height: 1.8;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.75rem;
          color: #383838;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .article-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* Read more link — matches .proj-link-ghost */
        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          padding: 7px 16px;
          border-radius: 7px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: #c8c4bc;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .read-more:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.2);
        }

        /* Section divider — matches .section-sep */
        .section-sep {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin: 48px 0 40px;
        }

        /* Empty & skeleton */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          color: #3a3a3a;
        }
        .empty-state i { font-size: 2.5rem; margin-bottom: 12px; display: block; }
        .empty-state p { font-size: 0.9rem; }

        .skeleton {
          background: linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        /* Pagination */
        .pagination {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }

        .page-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent;
          color: #555;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.18s;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .page-btn:hover:not(:disabled) { color: #ccc; border-color: rgba(255,255,255,0.18); }
        .page-btn.active { background: rgba(255,255,255,0.07); color: #c8c4bc; border-color: rgba(255,255,255,0.15); }
        .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }

        /* Fade in — matches Portofolio */
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

        @media (max-width: 600px) {
          .article-body { padding: 20px; }
        }
      `}</style>

      <div className="blog-page">
        <div className="blog-inner">

          {/* Header — sama persis dengan Portofolio */}
          <div className="fade-in d1">
            <h1 className="blog-page-title">Blog</h1>
            <p className="blog-page-sub">Tulisan seputar web development, pengalaman, dan hal-hal yang sedang saya pelajari.</p>
          </div>

          {/* Search + Tags */}
          <div className="fade-in d2" style={{ marginBottom: 40 }}>
            <div className="search-wrap" style={{ marginBottom: 16 }}>
              <input
                className="search-input"
                type="text"
                placeholder="Cari artikel..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              />
              <i className="ri-search-line search-icon" />
            </div>

            {allTags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <button
                  className={`tag-pill ${activeTag === "" ? "active" : ""}`}
                  onClick={() => { setActiveTag(""); setPage(1); }}
                >All</button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className={`tag-pill ${activeTag === tag ? "active" : ""}`}
                    onClick={() => { setActiveTag(tag); setPage(1); }}
                  >#{tag}</button>
                ))}
              </div>
            )}
          </div>

          {/* Articles */}
          {loading ? (
            <div className="fade-in d3">
              {[...Array(3)].map((_, i) => (
                <div key={i} style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden", background: "#111", marginBottom: 24 }}>
                  <div className="skeleton" style={{ aspectRatio: "16/7", width: "100%" }} />
                  <div style={{ padding: "28px 30px" }}>
                    <div className="skeleton" style={{ height: 12, width: "25%", marginBottom: 14 }} />
                    <div className="skeleton" style={{ height: 22, width: "80%", marginBottom: 10 }} />
                    <div className="skeleton" style={{ height: 14, width: "100%", marginBottom: 6 }} />
                    <div className="skeleton" style={{ height: 14, width: "65%", marginBottom: 22 }} />
                    <div className="skeleton" style={{ height: 10, width: "40%" }} />
                  </div>
                </div>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="empty-state fade-in d3">
              <i className="ri-article-line" />
              <p>Belum ada artikel{search ? ` untuk "${search}"` : ""}.</p>
            </div>
          ) : (
            <div className="fade-in d3">
              {articles.map((article) => (
                <Link key={article.id} to={`/blog/${article.slug}`} className="article-card">
                  {article.coverImage ? (
                    <img src={article.coverImage} alt={article.title} className="article-cover" loading="lazy" />
                  ) : (
                    <div className="article-cover-placeholder">
                      <div className="placeholder-grid">
                        {Array.from({ length: 24 }).map((_, j) => <span key={j} />)}
                      </div>
                    </div>
                  )}
                  <div className="article-body">
                    {article.tags.length > 0 && (
                      <div className="article-tags">
                        {article.tags.slice(0, 3).map((t) => (
                          <span key={t} className="article-tag">#{t}</span>
                        ))}
                      </div>
                    )}
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                      <div className="article-meta">
                        <span className="article-meta-item">
                          <i className="ri-calendar-line" />{formatDate(article.createdAt)}
                        </span>
                        <span className="article-meta-item">
                          <i className="ri-eye-line" />{article.views}
                        </span>
                        <span className="article-meta-item">
                          <i className="ri-chat-3-line" />{article._count.comments}
                        </span>
                      </div>
                      <span className="read-more">
                        Baca <i className="ri-arrow-right-line" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination" style={{ marginTop: 40 }}>
              <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                <i className="ri-arrow-left-s-line" />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} className={`page-btn ${page === i + 1 ? "active" : ""}`} onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              ))}
              <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
                <i className="ri-arrow-right-s-line" />
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <hr className="section-sep" />
          <div className="fade-in d4" style={{ textAlign: "center" }}>
            <p style={{ color: "#3a3a3a", fontSize: "0.85rem", marginBottom: 16 }}>
              Semua tulisan tersedia di blog ini
            </p>
            <Link to="/contact" className="read-more">
              <i className="ri-mail-line" /> Diskusi bareng
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Blog;