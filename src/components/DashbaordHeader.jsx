import React from "react";
import BetterSphere from "../assets/BetterSphere.svg";

const DashbaordHeader = () => {
  return (
    <div className="w-full px-10 py-2  border-b-[1px] border-black/50 shadow-md">
      <img src={BetterSphere} alt="My Image" className="w-[150px]" />
    </div>
  );
};

export default DashbaordHeader;
