import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import ResumePdf from "./pages/ResumePdf";
import LandonResearch from "./pages/LandonResearch";
import LandonMemorial from "./pages/LandonMemorial";
import Awards from "./pages/Awards";
import ResearchB from "./pages/ResearchB";
import Coding from "./pages/Coding";
import Talking from "./pages/Talking";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // set default theme
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      localStorage.setItem("theme", "dark");
    }
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/research" element={<ResearchB />} />
        {/* <Route path="/talks" element={<Talks />} />
        <Route path="/teaching" element={<Teaching />} /> */}
        <Route path="/talking" element={<Talking />} />
        <Route path="/talking/awards" element={<Awards />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/coding/resume" element={<Resume />} />
        <Route path="/coding/resume/resumepdf" element={<ResumePdf />} />

        <Route path="/landon/research" element={<LandonResearch />} />
        <Route path="/landon/memorial" element={<LandonMemorial />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
