"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { Loader2Icon, Search } from "lucide-react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import axios from "axios";
import Link from "next/link";

const searchFormSchema = z.object({
  q: z.string().min(3, {
    message: "Please enter at least 3 characters.",
  }),
});

export default function BlogSidebar({ initCategories, initProjectCategories }) {
  const [isLoading, setLoading] = useState(Object.keys(initCategories) ? false : true);
  const [categories, setCategories] = useState(initCategories || {});
  const [projectCategories, setProjectCategories] = useState(initProjectCategories);
  const form = useForm({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      q: "",
    },
  });

  const router = useRouter();

  const handleSearch = (values) => {
    router.push(`/search?q=${encodeURI(values.q)}&page=1`);
  };

  useEffect(() => {
    if (Object.keys(categories).length && !hasCookie("categories")) {
      setCookie("categories", categories, { maxAge: 60 * 60 * 3 });
    }
    if (Object.keys(projectCategories).length && !hasCookie("project_categories")) {
      setCookie("project_categories", projectCategories, { maxAge: 60 * 60 * 3 });
    }
  }, [categories, projectCategories]);

  return (
    <div className="w-full lg:max-w-[280px] xl:max-w-[320px]">
      <Form
        {...form}
        className="flex gap-4 flex-col md:flex-row"
      >
        <form
          onSubmit={form.handleSubmit(handleSearch)}
          // action={handleSubmit}
          className="grid gap-4 mb-8"
        >
          <FormField
            control={form.control}
            name="q"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Enter keywords"
                    icon={<Search size={18} />}
                    iconPlacement="right"
                    iconClassName="text-base-dark"
                    className="h-10 text-sm w-full bg-transparent border-2 border-base-brown/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-cream focus-within:outline-none"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="mb-8">
        <h3 className="uppercase tracking-[3px] text-karla text-sm border-b border-b-base-brown/30 inline-block pb-2.5 mb-4">Categories</h3>
        <div className="grid gap-2.5">
          {Object.keys(categories).map((category, category_index) => {
            var categoryObject = categories[category];
            // console.log(categoryObject);
            return (
              <Link
                href={`/categories/${categoryObject.slug}`}
                className="text-base-dark hover:text-base-darker font-karla text-sm"
                key={category_index}
              >
                {categoryObject.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="">
        <h3 className="uppercase tracking-[3px] text-karla text-sm border-b border-b-base-brown/30 inline-block pb-2.5 mb-4">Project Categories</h3>
        <div className="grid gap-2.5">
          {Object.keys(projectCategories).map((category, category_index) => {
            var categoryObject = projectCategories[category];
            // console.log(categoryObject);
            return (
              <Link
                key={category_index}
                href={`/project-categories/${categoryObject.slug}`}
                className="text-base-dark hover:text-base-darker font-karla text-sm"
              >
                {categoryObject.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
