import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import heroBackground from "../assets/hero-background.webp";

const PublicLayout = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col flex-grow"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <Header />
      <main className=" flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
