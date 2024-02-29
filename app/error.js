"use client";
import React from "react";

export default function error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-stone-900">500</h1>
      <p className="text-stone-900/70">Something went wrong! </p>
    </div>
  );
}
