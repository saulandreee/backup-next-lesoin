import { getSingleBlogData } from "@/lib/blogs";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import React from "react";

export default async function BlogPage({ params }) {
  const slug = params.slug;
  const blog = await getSingleBlogData(slug);
  return (
    <main>
      <section className="py-[150px] flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <div className="bg-white">
            <div className="w-full aspect-[16/9] relative">
              <Image
                src={blog.image}
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="w-full bg-white px-4 lg:px-14 pt-12 lg:pt-16 pb-12 lg:pb-20 mb-8 lg:mb-16">
              <div className="mb-6">
                <span className="p-2.5 bg-base-dark text-[10px] text-karla tracking-[2px] uppercase text-stone-50">
                  {blog.categories.map((cat) => cat.name).join()}
                </span>
              </div>
              <h1 className="text-[32px] font-marcellus mb-6">{HTMLReactParser(blog.title)}</h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-[380px]">a</div>
      </section>
    </main>
  );
}
