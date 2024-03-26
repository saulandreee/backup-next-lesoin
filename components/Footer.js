"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <div className="bg-base-darkest py-28 lg:pt-32 pb-6 px-6 grid justify-center items-center text-center">
      <Link
        href={"/"}
        className=""
      >
        <Image
          src={"/lesoin-icon.png"}
          className="mb-12 mx-auto"
          width={windowWidth < 768 ? 128 : 260}
          height={64}
          quality={100}
          loading="eager"
          priority
          alt="lesoin-img"
        />
      </Link>
      <div className="mb-8 lg:mb-10">
        <p className="text-sm tracking-[3px] text-base-gray uppercase leading-[250%]">
          Jl. Metro Pondok Indah Blok Blok TB No. 35, Jakarta Selatan, Indonesia
        </p>
        <p className="text-sm tracking-[3px] text-base-cream uppercase leading-[250%]">info@lesoin.id</p>
        <p className="text-sm tracking-[3px] text-base-cream uppercase leading-[250%]">+6285280981172</p>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center text-white">
        <Link
          href={"https://www.instagram.com/lesoin.id/"}
          target="_blank"
        >
          <Button
            size="icon"
            variant="ghost"
            name="lesoin-instagram-link"
          >
            <Instagram />
          </Button>
        </Link>
      </div>
      <div className="mt-24">
        <p className="text-sm font-extralight font-roboto text-white/50 uppercase leading-[250%]">Le Soin Clinic© 2023 / All Rights Reserved </p>
      </div>
    </div>
  );
}
