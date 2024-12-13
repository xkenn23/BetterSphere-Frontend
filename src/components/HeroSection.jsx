import React from "react";
import BetterSphere from "../assets/BetterSphere.svg";

const HeroSection = () => {
  return (
    <div className="flex align-center h-[500px] w-full bg-slate-500 flex-grow">
      {/* Add flex-grow */}
      <div className="  flex-col bg-yellow-600/30 w-[50%] flex items-start justify-center p-20 space-y-4">
        <h1 className="text-5xl"> BetterSphere </h1>
        <h2 className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur.
        </h2>
      </div>
      <div className="bg-yellow-400/20 w-[50%] flex items-center justify-center">
        <img src={BetterSphere} alt="My Image" className="w-[300px]" />
      </div>
    </div>
  );
};

export default HeroSection;
