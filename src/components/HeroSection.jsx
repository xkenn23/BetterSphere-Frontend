import React from "react";
// import hero from "../assets/hero.jpg";
import Lottie from "lottie-react";
import animationData from "../assets/hero-animation.json"; // Import your Lottie animation JSON file

import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center w-full flex-grow container pt-10  h-screen">
      <div className=" flex flex-col w-full lg:w-[50%] h-full items-center lg:items-start justify-center p-5 lg:p-20 lg:space-y-4 space-y-5">
        <h1 className=" text-4xl lg:text-5xl font-serif font-bold text-center lg:text-left">
          Elevate Your Journey, Together.
        </h1>
        <h2 className="font-serif font-light text-lg text-center lg:text-left">
          Share your growth, inspire others, and build a community of support.
        </h2>
        <Button
          size="lg"
          className="font-serif font-bold hover:bg-white hover:text-[#bf9b30] hover:shadow-xl border border-[#bf9b30]"
        >
          Get Started!
        </Button>
      </div>
      <div className=" flex w-full lg:w-[50%] items-center justify-center">
        {/* <img
          src={hero}
          alt="My Image"
          className="w-full lg:w-[400px] h-auto max-w-full object-cover object-center rounded-xl"
        /> */}

        <Lottie
          animationData={animationData}
          loop={false}
          // style={{ width: "400px", height: "auto" }}
          className="w-full max-w-[400px] lg:w-[400px] h-auto items-center justify-center"
        />
      </div>
    </div>
  );
};

export default HeroSection;
