import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Resume from "./pages/Resume";
import ResumePdf from "./pages/ResumePdf";
import LandonResearch from "./pages/LandonResearch";
import LandonMemorial from "./pages/LandonMemorial";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/research" element={<Research />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/teaching" element={<Teaching />} /> */}

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
