import ActivityForm from "@/components/ActivityForm";
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1>This is a test on the Dashboard page.</h1>
      <ActivityForm />
    </div>
  );
};

export default Dashboard;
