"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { slug } = useParams();
  return <div>{slug}</div>;
}
