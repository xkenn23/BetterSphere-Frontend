import DashbaordHeader from "@/components/DashbaordHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <DashbaordHeader />
      </div>
      <div className="flex flex-row flex-grow">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>

        <main className=" relative flex-grow ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
