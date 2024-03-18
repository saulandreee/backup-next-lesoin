"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props}>
      {pending ? (
        <Loader2Icon
          size={20}
          className="animate-spin"
        />
      ) : (
        children
      )}
    </Button>
  );
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(30, { message: "Name must be 30 or fewer characters long" }),
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .email({ message: "Invalid email address!" }),
  phone: z.string().min(7),
  message: z.string().min(8),
});

export default function BookingForm({ onSubmit }) {
  const [isLoading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const { pending } = useFormStatus();

  const handleSubmit = (data) => {
    setLoading(true);
    onSubmit(data)
      .then((res) => {
        console.log(res);
        if (res.success) {
          setLoading(false);
          console.log("here");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset();
  };

  useEffect(() => {
    console.log(pending, isLoading);
  }, [pending, isLoading]);

  return (
    <Form
      {...form}
      className="flex gap-4 flex-col md:flex-row"
    >
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        action={handleSubmit}
        className="grid gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-base-brown">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  className="h-12 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-cream focus-within:outline-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-base-brown">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email Address"
                  className="h-12 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-cream focus-within:outline-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-base-brown">Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your phone number"
                  className="h-12 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-cream focus-within:outline-none"
                  type="number"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-base-brown">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message"
                  className="h-12 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-cream focus-within:outline-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 items-center">
          <SubmitButton
            className="w-fit h-12"
            type="submit"
          >
            Submit
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
}
