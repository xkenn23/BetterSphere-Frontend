import React, { useState } from "react";
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
import dotenv from "dotenv";

const formschema = z.object({
  username: z.string().min(6, {
    message: "Username should be at least 6 characters long",
  }),
  email: z.string().min(5, {
    message: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters long",
  }),
});

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const registerEndpoint = `${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/user/register`;

  const form = useForm({
    resolver: zodResolver(formschema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    // setTimeout(() => {
    //   console.log(values);
    //   toast.success("submission successful");
    //   setIsSubmitting(false);
    //   form.reset();
    // }, 1000);
    try {
      const response = await fetch(registerEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast.success("Registration Successful!");
        form.reset();
      } else {
        const errorData = await response.json();
        toast.error(
          `Registration Failed: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.log("Error during registration", error);
      toast.error("Registration failed: Network error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className=" mx-auto p-6 w-[400px]  ">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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

      <div className="my-2 flex flex-row space-x-2">
        <h2 className="text-sm">Login Here!</h2>
      </div>
    </div>
  );
};

export default RegisterForm;
