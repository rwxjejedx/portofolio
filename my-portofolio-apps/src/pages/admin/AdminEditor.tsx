import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { createArticle, updateArticle, getAdminArticles, uploadImage } from "../../services/api";

function AdminEditor() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");

  useEffect(() => {
    const token = localStorage.getItem("blog_token");
    if (!token) { navigate("/admin"); return; }

    if (isEdit && id) {
      getAdminArticles().then(r => {
        const a = r.data.find((x: any) => x.id === id);
        if (a) {
          setTitle(a.title || "");
          setExcerpt(a.excerpt || "");
          setContent(a.content || "");
          setCoverImage(a.coverImage || "");
          setTags((a.tags || []).join(", "));
          setPublished(a.published || false);
        }
      });
    }
  }, [id, isEdit, navigate]);

  const handleSave = async (pub?: boolean) => {
    if (!title || !excerpt || !content) { setError("Judul, ringkasan, dan konten wajib diisi."); return; }
    setSaving(true); setError("");
    const data = {
      title, excerpt, content,
      coverImage: coverImage || null,
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
      published: pub !== undefined ? pub : published
    };
    try {
      if (isEdit && id) {
        await updateArticle(id, data);
      } else {
        await createArticle(data);
      }
      navigate("/admin/articles");
    } catch (e: any) {
      setError(e?.response?.data?.error || "Gagal menyimpan.");
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImg(true);
    try {
      const res = await uploadImage(file);
      setCoverImage(res.data.url);
    } catch {
      setError("Gagal upload gambar.");
    } finally {
      setUploadingImg(false);
    }
  };

  // Simple markdown preview renderer
  const renderPreview = (md: string) => {
    return md
      .replace(/^### (.+)/gm, '<h3 style="font-family:DM Serif Display,serif;color:#f0ede8;font-size:1.2rem;margin:1.5em 0 0.5em">$1</h3>')
      .replace(/^## (.+)/gm, '<h2 style="font-family:DM Serif Display,serif;color:#f0ede8;font-size:1.5rem;margin:1.8em 0 0.6em">$1</h2>')
      .replace(/^# (.+)/gm, '<h1 style="font-family:DM Serif Display,serif;color:#f0ede8;font-size:2rem;margin:1.8em 0 0.6em">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#e8e4dd">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2px 6px;color:#c8b9f0;font-family:monospace;font-size:0.87em">$1</code>')
      .replace(/^> (.+)/gm, '<blockquote style="border-left:3px solid rgba(255,255,255,0.12);padding-left:16px;color:#555;font-style:italic;margin:1.2em 0">$1</blockquote>')
      .replace(/\n\n/g, '</p><p style="color:#8a8680;line-height:1.85;margin:0 0 1.2em">')
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        .editor-page { font-family: 'DM Sans', sans-serif; background: #0d0d0d; min-height: 100vh; }
        .editor-header { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 16px 0; position: sticky; top: 0; background: #0d0d0d; z-index: 10; }
        .editor-title-input {
          width: 100%; background: transparent; border: none; outline: none;
          font-family: 'DM Serif Display', serif; font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #f0ede8; letter-spacing: -0.02em; line-height: 1.2;
          caret-color: #666;
        }
        .editor-title-input::placeholder { color: #222; }
        .field-input {
          width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px; padding: 10px 14px; color: #e8e4dd; font-size: 0.88rem;
          font-family: 'DM Sans', sans-serif; outline: none; transition: border-color 0.18s;
          box-sizing: border-box;
        }
        .field-input::placeholder { color: #333; }
        .field-input:focus { border-color: rgba(255,255,255,0.16); }
        .content-textarea {
          width: 100%; background: transparent; border: none; outline: none; resize: none;
          color: #8a8680; font-size: 1rem; line-height: 1.85; font-family: 'DM Mono', 'Courier New', monospace;
          min-height: 480px; box-sizing: border-box; caret-color: #666;
        }
        .content-textarea::placeholder { color: #222; }
        .admin-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: 8px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          color: #aaa; font-size: 0.82rem; text-decoration: none;
          cursor: pointer; transition: background 0.18s; font-family: 'DM Sans', sans-serif;
        }
        .admin-btn:hover:not(:disabled) { background: rgba(255,255,255,0.1); }
        .admin-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .admin-btn.primary { color: #d8d4cd; background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.14); }
        .admin-btn.green { color: #4ade80; border-color: rgba(74,222,128,0.25); background: rgba(74,222,128,0.06); }
        .tab-btn {
          padding: 6px 14px; border-radius: 6px; font-size: 0.8rem;
          cursor: pointer; transition: all 0.16s; font-family: 'DM Sans', sans-serif;
          border: 1px solid transparent; color: #444; background: transparent;
        }
        .tab-btn.active { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); color: #d0ccc5; }
        .field-label { font-size: 0.75rem; color: #444; margin-bottom: 6px; }
        .toggle-wrap { display: flex; align-items: center; gap: 10px; cursor: pointer; }
        .toggle {
          width: 38px; height: 22px; border-radius: 999px; position: relative;
          border: 1px solid rgba(255,255,255,0.1); transition: background 0.2s;
        }
        .toggle-knob {
          position: absolute; top: 3px; left: 3px; width: 14px; height: 14px;
          border-radius: 50%; background: #555; transition: transform 0.2s, background 0.2s;
        }
        .cover-preview { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; }
      `}</style>

      <div className="editor-page">
        {/* Header */}
        <div className="editor-header">
          <div className="max-w-4xl mx-auto px-6 md:px-10 flex items-center justify-between">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Link to="/admin/articles" style={{ color: "#444", textDecoration: "none", fontSize: "0.85rem" }}>
                <i className="ri-arrow-left-line" />
              </Link>
              <span style={{ color: "#333", fontSize: "0.85rem" }}>
                {isEdit ? "Edit Artikel" : "Artikel Baru"}
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              {error && <span style={{ color: "#f87171", fontSize: "0.78rem" }}>{error}</span>}
              <button className="admin-btn" onClick={() => handleSave(false)} disabled={saving}>
                <i className="ri-save-line" /> Simpan Draft
              </button>
              <button className="admin-btn green" onClick={() => handleSave(true)} disabled={saving}>
                {saving ? "Menyimpan..." : <><i className="ri-send-plane-line" /> Publish</>}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
          {/* Title */}
          <input
            className="editor-title-input"
            placeholder="Judul artikel..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Meta fields */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "24px 0" }}>
            <div>
              <p className="field-label">Ringkasan (excerpt)</p>
              <input className="field-input" placeholder="Deskripsi singkat..." value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
            </div>
            <div>
              <p className="field-label">Tags (pisahkan koma)</p>
              <input className="field-input" placeholder="react, javascript, tips" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
          </div>

          {/* Cover image */}
          <div style={{ marginBottom: 24 }}>
            <p className="field-label">Cover Image</p>
            {coverImage ? (
              <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
                <img src={coverImage} alt="cover" className="cover-preview" />
                <button onClick={() => setCoverImage("")}
                  style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, color: "#f87171", padding: "4px 10px", cursor: "pointer", fontSize: "0.78rem", fontFamily: "'DM Sans', sans-serif" }}>
                  <i className="ri-delete-bin-line" /> Hapus
                </button>
              </div>
            ) : (
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.1)", borderRadius: 8, padding: "20px 24px", display: "flex", alignItems: "center", gap: 10, color: "#333", fontSize: "0.85rem", flex: 1 }}>
                  {uploadingImg
                    ? <><i className="ri-loader-4-line" /> Mengupload...</>
                    : <><i className="ri-image-add-line" /> Klik untuk upload cover image (max 5MB)</>}
                </div>
                <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} disabled={uploadingImg} />
              </label>
            )}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
            <button className={`tab-btn ${activeTab === "write" ? "active" : ""}`} onClick={() => setActiveTab("write")}>
              <i className="ri-edit-2-line" style={{ marginRight: 4 }} />Tulis
            </button>
            <button className={`tab-btn ${activeTab === "preview" ? "active" : ""}`} onClick={() => setActiveTab("preview")}>
              <i className="ri-eye-line" style={{ marginRight: 4 }} />Preview
            </button>
          </div>

          {/* Content area */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "24px" }}>
            {activeTab === "write" ? (
              <>
                <p style={{ color: "#2a2a2a", fontSize: "0.72rem", marginBottom: 12, fontFamily: "monospace" }}>
                  Markdown supported: # H1  ## H2  **bold**  *italic*  `code`  &gt; quote
                </p>
                <textarea
                  className="content-textarea"
                  placeholder="Mulai menulis artikel di sini... (Markdown didukung)"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </>
            ) : (
              <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: 480 }}>
                {content ? (
                  <p style={{ color: "#8a8680", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: renderPreview(content) }} />
                ) : (
                  <p style={{ color: "#2a2a2a", fontSize: "0.88rem" }}>Tidak ada konten untuk dipreview.</p>
                )}
              </div>
            )}
          </div>

          {/* Publish toggle */}
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10 }}>
            <div>
              <p style={{ color: "#888", fontSize: "0.88rem", margin: 0 }}>Status Publikasi</p>
              <p style={{ color: "#444", fontSize: "0.78rem", margin: "2px 0 0" }}>
                {published ? "Artikel akan terlihat publik" : "Hanya tersimpan sebagai draft"}
              </p>
            </div>
            <label className="toggle-wrap" onClick={() => setPublished(p => !p)}>
              <span style={{ fontSize: "0.82rem", color: published ? "#4ade80" : "#444" }}>
                {published ? "Published" : "Draft"}
              </span>
              <div className="toggle" style={{ background: published ? "rgba(74,222,128,0.12)" : "transparent", borderColor: published ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.1)" }}>
                <div className="toggle-knob" style={{ transform: published ? "translateX(16px)" : "none", background: published ? "#4ade80" : "#333" }} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminEditor;
