import React from "react";
import BetterSphere from "../assets/BetterSphere.svg";

const Header = () => {
  return (
    <div className=" bg-yellow-400/30  px-16 p-5 items-center">
      <div className=" flex flex-row items-center justify-between w-full">
        <img src={BetterSphere} alt="My Image" className="w-[100px]" />

        <ul className="flex flex-row gap-3">
          <li className="hover:scale-110">About</li>
          <li className="hover:scale-110">Contact</li>
          <li className="hover:scale-110">Tech Stack</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
