import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Profile from "./pages/profile/Profile";
import Projects from "../dashboard/pages/projects/Projects";
import Synergies from "./pages/synergies/Synergies";
import { Routes, Route } from "react-router-dom";
import DashHeader from "./dashHeader/DashHeader";

import TabTitle from "./title/TabTitle";

import Alert from "../../components/alert/Alert";
import "./dashboard.css";

const Dashboard = () => {
  const [tab, setTab] = useState();
  return (
    <main className="dashboard">
      <Alert />

      <Sidebar tab={tab} setTab={setTab} />
      <div className="dashboard-main">
        <DashHeader />
        <TabTitle title={tab} subtitle="this is an awesome description" />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/myprojects" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/synergies" element={<Synergies />} />
        </Routes>
      </div>
    </main>
  );
};

export default Dashboard;
