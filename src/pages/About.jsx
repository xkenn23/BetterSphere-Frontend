import React from "react";

const title = "Welcome to BetterSphere";
const description = "";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="container">
        <div
          className="w-full h-full flex flex-col items-center justify-center flex-grow space-y-6 p-10 bg-neutral-500
          bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-0 backdrop-contrast-100 border border-[#bf9b30] rounded-lg"
        >
          <h1 className=" text-2xl md:text-3xl lg:text-6xl font-bold mb-8 font-serif text-center">
            {title}
          </h1>
          <div className="items-center justify-center flex flex-col lg:flex-row space-x-5">
            <p className="text-sm lg:text-lg lg:text-center font-serif ">
              BetterSphere is built on the belief that everyone has the
              potential for growth. We provide a platform where individuals can
              define their goals, connect with a supportive community, and
              celebrate their achievements. Our values are rooted in
              authenticity, encouragement, and continuous learning, fostering an
              environment where personal growth flourishes.
              <br /> <br />
            </p>
            {/* <p className="text-lg text-center ">
              BetterSphere is built on the belief that everyone has the
              potential for growth. We provide a platform where individuals can
              define their goals, connect with a supportive community, and
              celebrate their achievements. Our values are rooted in
              authenticity, encouragement, and continuous learning, fostering an
              environment where personal growth flourishes.
              <br /> <br />
            </p> */}
          </div>
          <div className="items-center justify-center flex flex-row space-x-5">
            <p className=" text-sm lg:text-lg lg:text-center font-serif">
              Beyond individual progress, we envision a world where collective
              well-being is nurtured through shared experiences and mutual
              support. BetterSphere encourages users to connect with others,
              participate in challenges, and offer encouragement, creating a
              network of positive influence that extends beyond the digital
              sphere. By fostering a sense of belonging and shared purpose, we
              aim to empower individuals and communities to thrive."
            </p>

            {/* <p className="text-lg text-center w-[80%] bg-black/30">
              Beyond individual progress, we envision a world where collective
              well-being is nurtured through shared experiences and mutual
              support. BetterSphere encourages users to connect with others,
              participate in challenges, and offer encouragement, creating a
              network of positive influence that extends beyond the digital
              sphere. By fostering a sense of belonging and shared purpose, we
              aim to empower individuals and communities to thrive."
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
