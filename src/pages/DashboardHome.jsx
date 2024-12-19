import React, { useState, useEffect } from "react";
import ActivityCard from "@/components/ActivityCard";

const DashboardHome = () => {
  const [activities, setActivities] = useState([]);

  const ActivityEndPoint = `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/activity/`;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("loginResponse")).token;

        const response = await fetch(ActivityEndPoint, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      {/* <ActivityForm /> */}
      {activities.map((activity) => (
        <ActivityCard key={activity._id} activity={activity} />
      ))}
    </div>
  );
};

export default DashboardHome;
