import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical as Options } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="h-full w-[300px]  p-5 relative border-[1px] border-black/30 mt-5 rounded-lg">
      <h1 className="my-5">username</h1>

      <div className="border border-black" />
      <div className="w-full  flex flex-row items-center justify-between space-x-4 py-2">
        <h1 className="text-sm"> Create Activity</h1>
        <FaPlus size={10} />
      </div>

      <div className="mt-10 flex flex-col">
        <div>
          <h1 className="text-sm">List of Activities</h1>
        </div>
        <div className="border border-black " />
        <h1 className="text-sm"> insert list of created activities here</h1>

        <Options />
      </div>
      <div className="absolute left-0 bottom-0 p-2 items-center justify-center">
        Copright @2024
      </div>
    </div>
  );
};

export default Sidebar;
