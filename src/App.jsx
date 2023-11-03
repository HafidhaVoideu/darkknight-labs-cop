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

// const access_token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c";

// axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

// delete axios.defaults.headers.common["X-Requested-With"];

function App() {
  const location = useLocation();
  const { setTab } = useGlobalContextUser();

  // const axiosInstance = axios.create({
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c",
  //   },
  // });

  const [data, setData] = useState();
  useEffect(() => {
    setGlowEffectRx();
  });

  useEffect(() => {
    if (location.pathname === "/") setTab("Featured Projects");
    const activeTab = links.find((link) => link.to === location.pathname);
    if (activeTab) setTab(activeTab.name);
  }, [location.pathname]);

  // const headers = {
  //   Authorization: `Bearer ${access_token}`,
  //     "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  //      "Content-Type": "application/json",
  //   Accept: "application/json",
  // };

  async function getPorjects() {
    try {
      const response = await fetch(
        "http://68.183.108.138:3000/api/projects/",

        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c`,
          Accept: "application/json",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const result = await response.json();
      console.log("Success:", result.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const axiosInstance = axios.create({
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c",
    },
  });

  useEffect(() => {
    // getPorjects();

    // axios({
    //   method: "get",
    //   url: api + "/api/user/getUserInfo?UserId=1",
    //   headers: { Authorization: "Bearer " + accessToken },
    // });

    axiosInstance
      .get("http://68.183.108.138:3000/api/featuredprojects/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .get("/projects")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors here

    //     console.log(error);
    //   });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<FeaturedProj />} />
          <Route path="featuredprojects" element={<FeaturedProj />} />
          <Route path="myprojects" element={<Profile />} />
          <Route path="projects" element={<ProjectToRender />} />
          <Route path="synergies" element={<SynergyToRender />} />
          <Route path="pendingsynergies" element={<PendingSynergies />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
