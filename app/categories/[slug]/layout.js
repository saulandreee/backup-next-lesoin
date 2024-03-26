import Head from "next/head";
import React from "react";
import { notFound } from "next/navigation";
import { getSingleProduct } from "@/lib/products";
import { getSingleCategory } from "@/lib/categories";

export async function generateMetadata({ params }, parent) {
  const category = await getSingleCategory(undefined, params.slug);
  // console.log(category);

  if (!category) return notFound();
  return {
    title: `Category: ${category.name} | Le Soin`,
  };
}

export default function SearchLayout({ children, params, searchParams }) {
  return <div className="w-full bg-base-light-cream">{children}</div>;
}
