import RegisterForm from "@/components/RegisterForm";
import React from "react";
import contact from "../assets/contact.jpg";

const Register = () => {
  return (
    <div className="h-screen w-full flex flex-grow flex-col items-center justify-center">
      <h1 className="text-3xl lg:text-5xl font-serif mb-5">Register Form</h1>
      <div className="flex flex-col lg:flex-row container items-center justify-center">
        <div
          className="flex flex-row items-center justify-center w-[60%] h-[500px] bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-0 backdrop-contrast-100 border border-[#bf9b30] rounded-lg"
        >
          <RegisterForm />
          <img
            src={contact}
            alt="Image Description"
            className="w-[70%] h-full object-cover hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
