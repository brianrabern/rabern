import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./layout/AppShell";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import LandonResearch from "./pages/LandonResearch";
import LandonMemorial from "./pages/LandonMemorial";
import Awards from "./pages/Awards";
import ResearchB from "./pages/ResearchB";
import Coding from "./pages/Coding";
import Talking from "./pages/Talking";
import { AcademicCv, TechResume } from "./pages/Docs";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/landon/memorial" element={<LandonMemorial />} />
        <Route path="/landon/research" element={<LandonResearch />} />
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<ResearchB />} />
          <Route path="/cv" element={<AcademicCv />} />
          <Route path="/talking" element={<Talking />} />
          <Route path="/talking/awards" element={<Awards />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/resume" element={<TechResume />} />
          <Route path="/coding/resume" element={<Resume />} />
          <Route
            path="/coding/resume/resumepdf"
            element={<Navigate to="/coding/resume" replace />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
