import BlogSidebar from "@/components/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getMoreBlogData, getSingleBlogData } from "@/lib/blogs";
import { getAllCategoriesData } from "@/lib/categories";
import { getProjectCategories } from "@/lib/projectCategories";
import HTMLReactParser from "html-react-parser";
import { ChevronLeft, ChevronRight } from "lucide-react";
import moment from "moment";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function BlogPage({ params }) {
  const slug = params.slug;
  const blog = await getSingleBlogData(slug);
  const otherBlogs = await getMoreBlogData(5, [blog.slug, blog.next.slug, blog.prev.slug]);
  // console.log(otherBlogs);

  const cookiesStore = cookies();
  var categories = JSON.parse(cookiesStore.get("categories")?.value || "{}");
  var projectCategories = JSON.parse(cookiesStore.get("project_categories")?.value || "{}");

  if (!Object.keys(categories).length) {
    categories = await getAllCategoriesData();
  }

  if (!Object.keys(projectCategories).length) {
    projectCategories = await getProjectCategories();
  }
  // console.log(categories);
  // console.log(projectCategories);
  return (
    <main>
      <section className="py-20 flex flex-col lg:flex-row gap-16">
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
              <div className="mb-6 flex gap-2">
                {blog.categories?.map((cat) => (
                  <span className="p-2.5 bg-base-dark text-[10px] text-karla tracking-[2px] uppercase text-stone-50">{cat.name}</span>
                ))}
              </div>
              <div className="header mb-8">
                <h1 className="text-[32px] font-marcellus mb-2">{HTMLReactParser(blog.title)}</h1>
                <p className="text-xs font-karla uppercase tracking-[2px]">{moment(blog.date).format("MMMM DD, YYYY")}</p>
              </div>
              <article className="prose max-w-full font-roboto font-light text-base-brown">{HTMLReactParser(blog.content)}</article>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {blog.prev.slug ? (
              <Link
                href={`/${blog.prev.slug}`}
                className="flex gap-4 group"
              >
                <Button
                  size="icon"
                  variant="secondary"
                  className="w-8 h-full bg-white shrink-0"
                >
                  <ChevronLeft
                    size={20}
                    className=""
                  />
                </Button>
                <div>
                  <p className="uppercase text-xs text-base-brown font-karla tracking-[2px] mb-0.5">
                    Previous <br className="md:hidden" /> Post
                  </p>
                  <p className="capitalize font-marcellus">{blog.prev.title}</p>
                </div>
              </Link>
            ) : (
              <span></span>
            )}
            {blog.next.slug ? (
              <Link
                href={`/${blog.next.slug}`}
                className="flex gap-4 text-right group justify-self-end"
              >
                <div>
                  <p className="uppercase text-xs text-base-brown font-karla tracking-[2px] mb-0.5">
                    Next
                    <br className="md:hidden" /> Post
                  </p>
                  <p className="capitalize font-marcellus">{blog.next.title}</p>
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="w-8 h-full bg-white shrink-0"
                >
                  <ChevronRight
                    size={20}
                    className="text-base-brown"
                  />
                </Button>
              </Link>
            ) : (
              <span></span>
            )}
          </div>
          <h3 className="text-2xl font-marcellus mb-8">More Post</h3>
          <Carousel
            autoplay
            autoplayDelay={5000}
          >
            <CarouselContent className="-ml-4">
              {otherBlogs.map((otherblog, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 pl-4 pb-2.5"
                  >
                    <Link
                      href={otherblog.slug}
                      className="blog"
                    >
                      <div className="relative w-full aspect-[16/9] mb-2.5">
                        <Image
                          src={otherblog.image}
                          fill
                          className="object-cover w-full"
                          quality={100}
                        />
                      </div>
                      <p className="text-base-dark text-sm font-karla">{HTMLReactParser(otherblog.title)}</p>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="flex left-1 top-[45%] xl:-left-10 lg:top-1/3" />
            <CarouselNext className="flex right-1 top-[45%] xl:-right-10 lg:top-1/3" />
          </Carousel>
        </div>
        <BlogSidebar
          initCategories={categories}
          initProjectCategories={projectCategories}
        />
      </section>
    </main>
  );
}
