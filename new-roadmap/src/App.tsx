import { Routes, Route } from "react-router-dom";
import { SideNav } from "./components/SideNav";
import Home from "./pages/Home";
import DeveloperPath from "./pages/DeveloperPath";
import { BusinessPath } from "./pages/BusinessPath";
import { Certifications } from "./pages/Certifications";
import AgentProjectGuidelines from "./pages/AgentProjectGuidelines";

export default function App() {
  return (
    <div className="app-layout">
      <SideNav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<DeveloperPath />} />
          <Route path="/business" element={<BusinessPath />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route
            path="/project-guidelines"
            element={<AgentProjectGuidelines />}
          />

          {/* wild card to go to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
