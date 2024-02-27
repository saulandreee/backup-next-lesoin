"use client";

import React from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

export default function Scrolltop() {
  return (
    <Button
      variant="secondary"
      size="icon"
      className="fixed bottom-12 right-12 w-12 h-12"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <ChevronUp size={24} />
    </Button>
  );
}
