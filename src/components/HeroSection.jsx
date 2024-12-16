import React from "react";
import hero from "../assets/hero.jpg";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col align-center h-auto w-full flex-grow container mt-10 ">
      <div className=" flex-col w-full lg:w-[50%] flex items-start justify-center p-5 lg:p-20 space-y-4 ">
        <h1 className=" text-2xl lg:text-5xl font-serif font-bold ">
          Elevate Your Journey, Together.
        </h1>
        <h2 className="font-serif font-light text-lg ">
          Share your growth, inspire others, and build a community of support.
        </h2>
        <Button className="font-serif font-bold hover:bg-white hover:text-[#bf9b30] hover:shadow-xl border border-[#bf9b30]">
          Get Started!
        </Button>
      </div>
      <div className=" relative w-full lg:w-[50%] flex items-center justify-center p-5">
        <img
          src={hero}
          alt="My Image"
          className="w-full lg:w-[400px] h-auto max-w-full object-cover object-center rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
