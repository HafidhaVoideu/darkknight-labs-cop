import { useEffect, useState } from "react";
import { setGlowEffectRx } from "./utils/functions";
import Homepage from "./scenes/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./scenes/dashboard/DashboardLayout";
import { useLocation } from "react-router-dom";
import Profile from "./scenes/dashboard/pages/profile/Profile";
import { useGlobalContextUser } from "./context/context";
import { links } from "./constants/const";
import FeaturedProj from "./scenes/dashboard/pages/featuredProjects/FeaturedProj";
import PendingSynergies from "./scenes/dashboard/pages/pendingSynergies/PendingSynergies";
import ProjectToRender from "./scenes/dashboard/pages/projects/project/ProjectToRender";
import SynergyToRender from "./scenes/dashboard/pages/synergies/SynergyToRender";

import axios from "axios";

const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c";

axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

function App() {
  const location = useLocation();
  const { setTab } = useGlobalContextUser();

  const [data, setData] = useState();
  useEffect(() => {
    setGlowEffectRx();
  });

  useEffect(() => {
    if (location.pathname === "/") setTab("Featured Projects");
    const activeTab = links.find((link) => link.to === location.pathname);
    if (activeTab) setTab(activeTab.name);
  }, [location.pathname]);

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
    },
  };

  useEffect(() => {
    axios
      .get("https://68.183.108.138:3000/api/projects/", {}, config)
      .then((response) => console.log("response:", response.data))
      .catch((error) => console.log("error", error.response?.status));
  }, []);

  return (
    <>
      <div></div>

      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<FeaturedProj />} />
          <Route path="featuredprojects" element={<FeaturedProj />} />
          <Route path="myprojects" element={<Profile />} />
          <Route path="projects" element={<ProjectToRender />} />
          <Route path="synergies" element={<SynergyToRender />} />
          <Route path="pendingsynergies" element={<PendingSynergies />} />
        </Route> */}

      {/* <Route path="/*" element={<NotFound />}></Route> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
