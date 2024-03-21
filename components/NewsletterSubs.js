"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { Loader2Icon } from "lucide-react";
import { useToast } from "./ui/use-toast";

// const SubmitButton = ({ children, ...props }) => {
//   const { pending } = useFormStatus();
//   return (
//     <Button
//       {...props}
//       disabled={pending}
//     >
//       {pending ? (
//         <Loader2Icon
//           className="animate-spin"
//           size={20}
//         />
//       ) : (
//         children
//       )}
//     </Button>
//   );
// };

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address!" }),
});

// console.log(formSchema.parse({ email: "saulandreee@gmail.com" }));

export default function NewsletterSubs({ onSubmit }) {
  const { toast } = useToast();
  const [isLoading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: "all",
  });

  const handleSubscribe = (data) => {
    setLoading(true);
    // console.log(formSchema.parse({ name: data.get("email") }));
    onSubmit(data)
      .then((res) => {
        if (res.success) {
          toast({
            title: "Your mail has been saved!",
            description: "We'll inform you about our project updates and more exciting news about our clinic!",
            variant: "success",
          });
          form.reset();
          setLoading(false);
        } else {
          toast({
            title: "Something went wrong",
            description: res.message,
            variant: "destructive",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err.message) {
          toast({
            title: "Something went wrong!",
            description: "Please try again in a few moment.",
            variant: "destructive",
          });
        }
        setLoading(false);
      });
  };

  return (
    <Form
      {...form}
      className=""
    >
      <form
        onSubmit={form.handleSubmit(handleSubscribe)}
        // action={handleSubscribe}
        className="flex gap-4 flex-col md:flex-row h-40 lg:h-32"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="md:flex-1">
              {/* <FormLabel className="text-base-brown">Email</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Email Address"
                  className="h-12 border w-full border-base-dark-brown bg-base-dark-brown text-base-light-cream ring-offset-base-dark-brown placeholder:text-base-light-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-brown focus-visible:ring-offset-2"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          className="h-12"
        >
          {isLoading ? (
            <Loader2Icon
              className="animate-spin"
              size={20}
            />
          ) : (
            "Subscribe"
          )}
        </Button>
        {/* <SubmitButton
          variant="secondary"
          type="submit"
          className="h-12"
        >
          Subscribe
        </SubmitButton> */}
      </form>
    </Form>
  );
}
