import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import heroBackground from "../assets/hero-background.jpg";
import heroDark from "../assets/hero-dark.jpg";

const PublicLayout = () => {
  return (
    <div
      className="bg-cover bg-center" // Add these classes for background styling
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <Header />
      <main className="bg-white/10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
