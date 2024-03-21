"use client";

import { Input } from "./ui/input";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { List, Search } from "lucide-react";
import { useState } from "react";

const searchSchema = z.object({
  q: z.string().min(3, {
    message: "Please enter at least 3 characters.",
  }),
});

export default function GlobalSearch() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      q: "",
    },
  });

  const handleSearch = (values) => {
    form.reset();
    setOpen(false);
    router.push(`/search?q=${values.q}`);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setOpen}
    >
      <DialogTrigger
        asChild
        className="ring-0 active:ring-0 active:outline-none focus-within:ring-0 focus-within:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <Button
          size="icon"
          variant="ghost"
          className="text-stone-50 w-6 h-6"
          onClick={() => setOpen(true)}
        >
          <Search size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent
        overlayClassName="bg-base-creamer/[95%]"
        className="bg-transparent border-0 shadow-none max-w-[80%] h-[80%] w-full"
        closeIconClassName="w-8 h-8 text-white"
      >
        <DialogHeader className={"justify-center items-center px-8"}>
          <Form
            {...form}
            className=""
          >
            <form
              onSubmit={form.handleSubmit(handleSearch)}
              // action={handleSubscribe}
              className="flex gap-4 flex-col justify-center items-center"
            >
              <FormField
                control={form.control}
                name="q"
                render={({ field }) => (
                  <FormItem className="md:flex-1">
                    {/* <FormLabel className="text-base-brown">Email</FormLabel> */}
                    <FormControl>
                      <Input
                        className="bg-transparent outline-none focus-visible:outline-none focus-within:outline-none text-3xl md:text-4xl xl:text-6xl text-white font-marcellus placeholder:text-white w-full text-center"
                        placeholder="Search..."
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />
              <Button
                size="icon"
                variant="ghost"
                className="text-white invisible"
                type={"submit"}
              >
                <Search size={32} />
              </Button>
              {/* {form.getValues("q") > 2 ? (
                <DialogClose asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white"
                    type="submit"
                  >
                    <Search size={32} />
                  </Button>
                </DialogClose>
              ) : (
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white"
                  type="button"
                >
                  <Search size={32} />
                </Button>
              )} */}
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
