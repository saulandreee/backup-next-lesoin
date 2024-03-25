import Head from "next/head";
import React from "react";
import { notFound } from "next/navigation";
import { getSingleProduct } from "@/lib/products";

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;
  const category = {
    name: "Cat",
  };

  return {
    title: category.name,
  };
}

export default function SearchLayout({ children, params, searchParams }) {
  return <div className="w-full bg-base-light-cream">{children}</div>;
}
