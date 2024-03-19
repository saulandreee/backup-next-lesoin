"use client";
import HTMLReactParser from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsCard({ news }) {
  return (
    <div className="w-full h-fit bg-white">
      <div className=" relative w-full aspect-[3/2]">
        <Image
          src={news.image}
          fill
          quality={100}
          className="object-cover w-full"
          alt="news-image"
        />
        <div className="absolute top-4 left-4 p-2 px-4 bg-base-dark uppercase font-karla tracking-[2px] text-xs text-stone-50">
          {news.categories.map((cat) => cat.name).join()}
        </div>
      </div>
      <div className="p-6">
        <p className="text-lg font-marcellus text-[18] mb-2.5">{HTMLReactParser(news.title)}</p>
        <p className="text-xs font-karla mb-6 uppercase tracking-[2px]">{moment(news.date).format("MMMM DD, YYYY")}</p>
        {news.short_content && <div className="font-roboto text-base-brown mb-6">{HTMLReactParser(news.short_content)}</div>}
        <p className="text-[11px] font-karla cursor-pointer hover:underline uppercase">Read More</p>
        {/* <Link
          href={news.slug}
          className="text-[11px] font-karla"
        >
          Read More
        </Link> */}
      </div>
    </div>
  );
}
