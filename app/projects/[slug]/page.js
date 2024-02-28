import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";
import { getListProjectsPath, getSingleProject } from "./readProject";
import Image from "next/image";

export async function generateStaticParams() {
  const projects = getListProjectsPath();
  console.log(projects);
  return projects;
}

export default function page({ params }) {
  const { slug } = params;
  const project = getSingleProject(slug);
  console.log(project);

  return (
    <>
      <div className="pt-20">
        <div className="">{project.title}</div>
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
        </div>
      </div>
    </>
  );
}
