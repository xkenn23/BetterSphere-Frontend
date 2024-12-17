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
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";

const formschema = z.object({
  name: z.string().min(5, {
    message: "Name must contain atleast 5 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  contactNumber: z.string().min(11, {
    message: "Please enter a valid number at least 11 digits long",
  }),
  concern: z.string().min(15, {
    message: "Concern must be at least 15 characters long",
  }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formschema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      concern: "",
    },
  });

  const onSubmit = (values) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      toast.success("submission successful");
      setIsSubmitting(false);
      form.reset();
    }, 2000);
  };
  return (
    <div className=" mx-auto p-6 w-[400px] ">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                  <Input
                    type="email"
                    placeholder="johndoe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact #</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="concern"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Concern</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your concern..."
                    {...field}
                  />
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

export default ContactForm;
