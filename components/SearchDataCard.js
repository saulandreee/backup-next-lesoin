import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import React from "react";

export default function SearchDataCard({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="!aspect-square relative md:w-[220px] h-fit">
        <Image
          src={data.image}
          className="object-cover w-full"
          fill
          quality={100}
          priority
          loading="eager"
          alt={`${data.type}-image`}
        />
      </div>
      <div className="flex-1 pb-4 lg:pb-0">
        <span className="inline-block p-1.5 px-2.5 font-karla bg-base-dark uppercase text-xs text-stone-50 font-semibold mb-2.5">{data.type}</span>
        <h2 className="text-2xl font-marcellus text-base-darkest-brown mb-4">{HTMLReactParser(data.title)}</h2>
        <article className="font-roboto text-base-brown mb-4">{HTMLReactParser(data.short_desc || "")}</article>
        <p className="text-xs upperecase font-bold text-base-dark">Read more</p>
      </div>
    </div>
  );
}
