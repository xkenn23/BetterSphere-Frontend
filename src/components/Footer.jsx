import React from "react";
import BetterSphere from "../assets/BetterSphere.svg";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-yellow-400/30 p-5">
      <ul className="flex flex-row gap-3 ">
        <li className="hover:scale-110">About</li>
        <li className="hover:scale-110">Contact</li>
        <li className="hover:scale-110">Tech Stack</li>
      </ul>
    </div>
  );
};

export default Footer;
