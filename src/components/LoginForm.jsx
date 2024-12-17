import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
import Cookies from "js-cookie";

const formschema = z.object({
  email: z.string().min(5, {
    message: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters long",
  }),
});

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loginEndpoint = `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/user/login`;
  const navigate = useNavigate(); // For programmatic navigation

  const form = useForm({
    resolver: zodResolver(formschema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json(); // Assuming your API sends back a token
        Cookies.set("jwt", data.token, {
          httpOnly: true,
          secure: true, // Set to true if using HTTPS
          sameSite: "strict", // Prevent CSRF attacks
        });
        // Optionally store user data in local storage or a context
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        const errorData = await response.json();
        toast.error(
          `Login failed: ${errorData.message || "Invalid credentials"}`
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed: Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" mx-auto p-6 w-[400px] ">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Sample@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
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
    </div>
  );
};

export default LoginForm;
