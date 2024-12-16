import React from "react";
import BetterSphere from "../assets/BetterSphere.svg";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className=" bg-white/85 border-b-[1px] border-black  md:px-16 p-5 items-center w-full">
      <div className=" flex flex-row items-center justify-between w-full">
        <Link to="/">
          <img src={BetterSphere} alt="My Image" className="w-[150px]" />
        </Link>

        <ul className="lg:flex flex-row gap-3 hidden">
          <li className="hover:scale-110 hover:text-[#bf9b30] transition ease-in-out delay-50 font-serif font-light">
            <Link to="/about">About </Link>
          </li>
          <li className="hover:scale-110 hover:text-[#bf9b30] transition ease-in-out delay-50 font-serif font-light">
            <Link to="/contact">Contact </Link>
          </li>
          <li className="hover:scale-110 hover:text-[#bf9b30] transition ease-in-out delay-50 font-serif font-light">
            <Link to="/tech">Tech Stack </Link>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <GiHamburgerMenu size={30} />
          </SheetTrigger>
          <SheetContent className="h-[200px] rounded-xl w-[50%]">
            <SheetHeader>
              <ul className="flex flex-col gap-3 mt-10 items-center justify-center">
                <li className="hover:scale-110 hover:text-[#bf9b30] transition ease-in-out delay-50 font-serif font-light">
                  <Link to="/about">About </Link>
                </li>
                <li className="hover:scale-110 hover:text-[#bf9b30] transition ease-in-out delay-50 font-serif font-light">
                  <Link to="/contact">Contact </Link>
                </li>
                <li className="hover:scale-110 hover:text-[#bf9b30] transition ease-in-out delay-50 font-serif font-light">
                  <Link to="/tech">Tech Stack </Link>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
