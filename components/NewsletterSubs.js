"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .email({ message: "Invalid email address!" }),
});

export default function NewsletterSubs() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Form
      {...form}
      className="flex gap-4 flex-col md:flex-row"
    >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 flex-col md:flex-row"
      >
        <FormField
          control={form.control}
          className="flex-1"
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Email Address"
                  className="py-2.5 h-auto w-full"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="secondary"
          type="outline"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
