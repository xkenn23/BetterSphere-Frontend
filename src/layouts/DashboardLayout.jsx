import DashbaordHeader from "@/components/DashbaordHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import heroBackground from "../assets/hero-background.webp";
const DashboardLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div>
        <DashbaordHeader />
      </div>
      <div className=" flex flex-row flex-grow">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>

        <main className=" relative flex-grow pt-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
