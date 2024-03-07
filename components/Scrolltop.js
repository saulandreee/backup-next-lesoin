"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

export default function Scrolltop() {
  const [windowTop, setWindowTop] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setWindowTop(window.scrollY));
      // cleanup function
      return () => {
        window.removeEventListener("scroll", () => setWindowTop(window.scrollY));
      };
    }
  }, [windowTop]);

  return (
    <Button
      variant="secondary"
      size="icon"
      className={`fixed bottom-12 right-12 w-12 h-12 transition-all shadow`}
      style={{ opacity: windowTop ? 1 : 0, display: windowTop ? "flex" : "none" }}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <ChevronUp size={24} />
    </Button>
  );
}
