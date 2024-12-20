import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";

const Activity = () => {
  const { activityId } = useParams(); // Get activityId from URL
  const [activity, setActivity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSingleActivity = `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/activity/single/${activityId}`;
    const token = JSON.parse(localStorage.getItem("loginResponse")).token;
    const fetchActivity = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(fetchSingleActivity, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch activity");
        }

        const data = await response.json();
        setActivity(data);
      } catch (error) {
        console.error("Error fetching activity:", error);
        toast.error(error.message || "Error fetching activity");
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivity();
  }, [activityId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!activity) {
    return <div>Activity not found.</div>;
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <ActivityCard activity={activity} />
    </div>
  );
};

export default Activity;
