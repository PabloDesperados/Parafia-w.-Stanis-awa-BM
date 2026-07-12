import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { Msze } from "./pages/Msze";
import { Kontakt } from "./pages/Kontakt";
import { OParafii } from "./pages/OParafii";
import { Ogloszenia } from "./pages/Ogloszenia";
import { ZZyciaParafii } from "./pages/ZZyciaParafii";
import { AlbumSzczegoly } from "./pages/AlbumSzczegoly";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/msze" element={<Msze />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/o-parafii" element={<OParafii />} />
          <Route path="/ogloszenia" element={<Ogloszenia />} />
          <Route path="/z-zycia-parafii" element={<ZZyciaParafii />} />
          <Route path="/z-zycia-parafii/:albumId" element={<AlbumSzczegoly />} />
        </Routes>
      </Layout>
    </Router>
  );
}