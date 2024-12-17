import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <main className="  relative flex-grow ">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
