import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";
import { getListProjectsPath, getSingleProject, updateSingleProject } from "../../../lib/projects";
import Image from "next/image";
import axios from "axios";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import moment from "moment";

export async function generateStaticParams() {
  const projects = await getListProjectsPath();

  return projects;
}

export default async function page({ params }) {
  const { slug } = params;
  const project = await getSingleProject(slug);
  // console.log(params);

  // var slugNotMatch = {
  //   "vita-eye": "vitaeye",
  //   "vita-skin": "vitaskin",
  //   "boob-lift": "booblift",
  //   "bust-fill": "bustfill",
  //   "hair-plus": "hair-2",
  // };

  // if (slugNotMatch[params.slug]) {
  //   await updateSingleProject(params.slug, slugNotMatch[params.slug]);
  // } else {
  //   await updateSingleProject(params.slug);
  // }

  // var data = await getSingleProject(params.slug);
  // console.log(data);
  // console.log(data);

  return (
    <>
      <div className="py-20">
        {/* <div className="">{project.title}</div> */}
        <div>
          <Image
            src={project.image}
            width={1200}
            height={600}
            quality={100}
            alt={`${slug}-img`}
            loading="eager"
            priority
          />
          <div className="w-full bg-white px-14 pt-16 pb-20 mb-16">
            <h1 className="text-3xl font-marcellus text-center text-base-brown mb-8">{project.title}</h1>
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
              <div className="flex-1 prose max-w-full font-roboto font-light text-base-brown">{HTMLReactParser(project.content)}</div>
              <div className="w-72 font-karla">
                <h2 className="pb-2.5 uppercase tracking-[3px] text-base-brown border-b border-base-gray !font-medium mb-6">Detail of treatment</h2>
                <div className="grid gap-4 text-sm">
                  <div className="flex justify-between text-base-dark-brown">
                    <p className="text-base-brown uppercase tracking-[2px]">Date:</p>
                    <p>{moment(project.date).format("MMMM DD, YYYY")}</p>
                  </div>
                  <div className="flex justify-between text-base-dark-brown">
                    <p className="text-base-brown uppercase tracking-[2px]">Categories:</p>
                    <p>
                      {project.categories
                        .map((category) => category.name)
                        .join()
                        .replace(",", ", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              href="/"
              className="flex gap-4 group"
            >
              <Button
                size="icon"
                variant="secondary"
                className="w-8 h-full bg-white"
              >
                <ChevronLeft
                  size={20}
                  className=""
                />
              </Button>
              <div>
                <p className="uppercase text-xs text-base-brown font-karla tracking-[2px] mb-0.5">Previous Project</p>
                <p className="capitalize font-marcellus">{project.title}</p>
              </div>
            </Link>
            <Link
              href="/"
              className="flex gap-4 text-right group"
            >
              <div>
                <p className="uppercase text-xs text-base-brown font-karla tracking-[2px] mb-0.5">Next Project</p>
                <p className="capitalize font-marcellus">{project.title}</p>
              </div>
              <Button
                size="icon"
                variant="secondary"
                className="w-8 h-full bg-white"
              >
                <ChevronRight
                  size={20}
                  className="text-base-brown"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
