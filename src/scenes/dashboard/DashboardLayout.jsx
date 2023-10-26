import React from "react";
import { Outlet } from "react-router";
import DashHeader from "./dashHeader/DashHeader";
import TabTitle from "./title/TabTitle";
import Sidebar from "./sidebar/Sidebar";
import Alert from "../../components/alert/Alert";

import "./dashboard.css";

const DashboardLayout = () => {
  return (
    <main className="dashboard">
      <Alert />
      <Sidebar />
      <div className="dashboard-main">
        <DashHeader />
        <TabTitle subtitle="this is an awesome description" />
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
