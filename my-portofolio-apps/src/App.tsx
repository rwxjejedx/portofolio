import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import DetailProyek1 from "./pages/DetailProyek1";
import DetailProyek2 from "./pages/DetailProyek2";



function App() {

  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path="/proyek/detail-perumahan1" element={<DetailProyek1 />} />
        <Route path="/proyek/detail-perumahan2" element={<DetailProyek2 />} />
    </Routes>
  );

}

export default App
