import React, { useState, useEffect } from "react";

const ActivityCard = ({ activity }) => {
  const [imageUrl, setImageUrl] = useState("");

  console.log("this ", activity);

  useEffect(() => {
    const width = 600;
    const height = 300;
    setImageUrl(
      `https://picsum.photos/${width}/${height}?random=${Math.random()}`
    );
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className=" flex flex-col p-10 w-[50%] rounded-lg border bg-clip-padding 
    backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-0 backdrop-contrast-100 border-[#bf9b30] mb-5 space-y-5"
    >
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-serif font-bold">{activity.title}</h1>
        <h2 className="text-sm font-serif">{activity.visibility}</h2>
      </div>
      <div>
        <img
          src={imageUrl} // Or use activity.bannerImage if available
          alt={activity.title}
          className="w-full rounded-lg border border-black"
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-serif">{activity.category}</h1>
        <h1 className="text-sm font-serif">{activity.referralCode}</h1>
      </div>

      <div className="text-sm font-serif">
        <h1 className="text-lg font-serif">Description</h1>
        <div className="border-[1px] border-black/30" />
        <p>{activity.description}</p> {/* Display activity description */}
      </div>

      <div>
        <h1>Owner: {activity?.owner?.username || "Unknown"}</h1>
        <h1>Member: {/* Add logic to display members if needed */}</h1>
      </div>
    </div>
  );
};

export default ActivityCard;
