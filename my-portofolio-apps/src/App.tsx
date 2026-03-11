import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Portofolio from "./pages/Portofolio";
import Experience from "./pages/Experience";
import Testimoni from "./pages/Testimoni";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminArticles from "./pages/admin/AdminArticles";
import AdminEditor from "./pages/admin/AdminEditor";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/testimoni" element={<Testimoni />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/articles" element={<AdminArticles />} />
      <Route path="/admin/editor" element={<AdminEditor />} />
      <Route path="/admin/editor/:id" element={<AdminEditor />} />
    </Routes>
  );
}

export default App;
