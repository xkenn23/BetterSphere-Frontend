import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ActivityForm from "@/components/ActivityForm";

export default function UpdateActivityPage() {
  const { id } = useParams(); // Get activity ID from URL
  const [activity, setActivity] = useState(null); // Store activity data
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch activity details
    const fetchActivity = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("loginResponse")).token;
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/activity/single/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setActivity(data); // Set fetched activity data
        } else {
          console.error("Failed to fetch activity details");
        }
      } catch (error) {
        console.error("Error fetching activity details:", error);
      }
    };

    fetchActivity();
  }, [id]);

  const handleUpdateActivity = async (values) => {
    try {
      const token = JSON.parse(localStorage.getItem("loginResponse")).token;
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/activity/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        console.log("Activity updated successfully!");
        navigate("/dashboard"); // Redirect to dashboard after update
      } else {
        const errorData = await response.json();
        console.error("Error updating activity:", errorData);
      }
    } catch (error) {
      console.error("Error updating activity:", error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      {activity ? (
        <ActivityForm
          initialValues={{
            title: activity.title,
            description: activity.description,
            category: activity.category,
            visibility: activity.visibility,
          }}
          onSubmitHandler={handleUpdateActivity} // Handle update
        />
      ) : (
        <p>Loading activity details...</p>
      )}
    </div>
  );
}
