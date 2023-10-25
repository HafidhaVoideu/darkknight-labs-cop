import { useEffect } from "react";
import { setGlowEffectRx } from "./utils/functions";
import Homepage from "./scenes/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./scenes/dashboard/DashboardLayout";
import { useLocation } from "react-router-dom";
import Profile from "./scenes/dashboard/pages/profile/Profile";
import Projects from "./scenes/dashboard/pages/projects/Projects";
import Synergies from "./scenes/dashboard/pages/synergies/Synergies";
import { useGlobalContextUser } from "./context/context";
import { links } from "./constants/const";
import FeaturedProj from "./scenes/dashboard/pages/featuredProjects/FeaturedProj";

function App() {
  const location = useLocation();
  const { setTab } = useGlobalContextUser();

  useEffect(() => {
    setGlowEffectRx();
  });

  useEffect(() => {
    const activeTab = links.find((link) => link.to === location.pathname);
    if (activeTab) setTab(activeTab.name);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<FeaturedProj />} />
          <Route path="featuredprojects" element={<FeaturedProj />} />
          <Route path="myprojects" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="synergies" element={<Synergies />} />
        </Route>

        {/* <Route path="/*" element={<NotFound />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
