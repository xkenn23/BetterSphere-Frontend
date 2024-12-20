import ActivityCard from "@/components/ActivityCard";
import ActivityForm from "@/components/ActivityForm";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateActivity = async (formData) => {
    setIsLoading(true);
    try {
      const token = JSON.parse(localStorage.getItem("loginResponse")).token;
      const createActivity = `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/activity/create`;
      const response = await fetch(createActivity, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create activity");
      }

      const newActivity = await response.json();
      console.log("Activity created:", newActivity);

      // Display success message
      toast.success("Activity created successfully!");

      // Redirect to the dashboard page
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating activity:", error);

      // Display error message
      toast.error(error.message || "Error creating activity");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1>This is a test on the Dashboard page.</h1>
      <ActivityForm onSubmitHandler={handleCreateActivity} />
    </div>
  );
};

export default Dashboard;
