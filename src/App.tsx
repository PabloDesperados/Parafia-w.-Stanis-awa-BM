import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { Msze } from "./pages/Msze";
import { Kontakt } from "./pages/Kontakt";
import { OParafii } from "./pages/OParafii";
import { Ogloszenia } from "./pages/Ogloszenia";

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
        </Routes>
      </Layout>
    </Router>
  );
}