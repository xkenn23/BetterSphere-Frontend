import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical as Options } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link
import UserContext from "@/context/UserContext";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useForm } from "react-hook-form"; // Import useForm
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import toast, { Toaster } from "react-hot-toast";

// const formschema = z.object({
//   email: z.string().min(5, {
//     referralcode: "Please enter a valid email",
//   }),
// });

const Sidebar = () => {
  const { user, activities, setActivities } = useContext(UserContext);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log(useContext(UserContext));

  // const form = useForm({
  //   resolver: zodResolver(formschema),
  //   defaultValues: {
  //     referralcode: "",
  //   },
  // });

  // const onSubmit = async (values) => {
  //   setIsSubmitting(true);
  //   try {
  //     const response = await fetch(loginEndpoint, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     if (response.ok) {
  //       const data = await response.json(); // Assuming your API sends back a token
  //       console.log("Login response:", data); // Log the response data

  //       localStorage.setItem("loginResponse", JSON.stringify(data));
  //       toast.success("Login successful!");
  //       navigate("/dashboard"); // Redirect to dashboard
  //     } else {
  //       const errorData = await response.json();

  //       toast.error(
  //         `Login failed: ${errorData.message || "Invalid credentials"}`
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     toast.error("Login failed: Network error");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleDeleteActivity = async (activityId) => {
    try {
      const token = JSON.parse(localStorage.getItem("loginResponse")).token;
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/activity/${activityId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Update the activities state to remove the deleted activity
        setActivities(
          activities.filter((activity) => activity._id !== activityId)
        );
      } else {
        console.error("Failed to delete activity");
      }
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  return (
    <div
      className="h-full w-[300px] p-5 relative border-[1px] bg-clip-padding 
        backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-0 backdrop-contrast-100 border-black/30 mt-5 rounded-lg"
    >
      <h1 className="my-5">{user ? user.username : "Loading..."}</h1>

      <div className="border border-black" />

      {/* Link to ActivityForm */}
      <Link to="/dashboard/create">
        {" "}
        {/* Adjust the path as needed */}
        <div className="w-full flex flex-row items-center justify-between space-x-4 py-2">
          <h1 className="text-sm">Create Activity</h1>
          <FaPlus size={10} />
        </div>
      </Link>

      <div className="mt-10 flex flex-col">
        <div>
          <h1 className="text-sm">List of Activities</h1>
        </div>
        <div className="border border-black " />

        {/* Display list of activities */}
        <div>
          {activities.map((activity) => (
            <div
              key={activity._id}
              className="flex items-center justify-between"
            >
              <Link
                to={`/activity/${activity._id}`}
                className="text-sm py-2 hover:bg-gray-100 rounded-md px-2"
              >
                {activity.title}
              </Link>

              <Popover>
                <PopoverTrigger>
                  <Options className="cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="w-auto">
                  <div
                    // onClick={() => handleDeleteActivity(activity._id)} // Call handleDeleteActivity
                    className="cursor-pointer p-15 text-sm space-y-2"
                  >
                    <h2 className="px-2 hover:text-[#bf9b30] ">Update</h2>
                    <div className="border border-black/30" />
                    <h2
                      onClick={() => handleDeleteActivity(activity._id)}
                      className="px-2 hover:text-[#bf9b30]"
                    >
                      Delete
                    </h2>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-10 flex flex-col">
        <h1>Joined Activity:</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="referralcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referral Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Sample@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Toaster />
          </form>
        </Form>
        <div className="border border-black " />
        <div>List of joined Activities.</div>
      </div> */}
    </div>
  );
};

export default Sidebar;
