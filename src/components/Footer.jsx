import React from "react";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center px-5 py-2 w-full bg-white/85 border-t-[1px] border-black">
      <p className="flex flex-row items-center justify-center gap-x-1 font-serif font-light">
        <PiCopyrightThin size={20} /> 2024 Gonzales Ervin
      </p>
    </div>
  );
};

export default Footer;
