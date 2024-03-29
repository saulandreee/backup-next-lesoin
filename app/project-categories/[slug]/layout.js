import Head from "next/head";
import React from "react";
import { notFound } from "next/navigation";
import { getSingleProduct } from "@/lib/products";
import { getSingleProjectCategory } from "@/lib/projectCategories";

export async function generateMetadata({ params }, parent) {
  // read route params
  const project_categories = await getSingleProjectCategory(params.slug);

  if (!project_categories) return notFound();
  return {
    title: `Project Category: ${project_categories.name} | Le Soin`,
  };
}

export default function SearchLayout({ children, params, searchParams }) {
  return <div className="w-full bg-base-light-cream">{children}</div>;
}
