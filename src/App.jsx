import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <main id="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer id="spacer">
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "var(--text)",
          }}
        >
          © 2026 Mykhailo Onipchenko
        </p>
      </footer>
    </Router>
  );
}

export default App;
