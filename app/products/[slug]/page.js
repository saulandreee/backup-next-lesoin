import Head from "next/head";
import React from "react";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import moment from "moment";
import { getListProductPath, getSingleProduct } from "@/lib/products";

export async function generateStaticParams() {
  const products = await getListProductPath();

  return products;
}

export default async function page({ params }) {
  const { slug } = params;
  const product = await getSingleProduct(slug);
  // console.log(project);
  // console.log(params);

  // var slugNotMatch = {
  //   "vita-eye": "vitaeye",
  //   "vita-skin": "vitaskin",
  //   "boob-lift": "booblift",
  //   "bust-fill": "bustfill",
  //   "hair-plus": "hair-2",
  // };

  // if (slugNotMatch[params.slug]) {
  //   await updateSingleProject(params.slug, slugNotMatch[params.slug]);
  // } else {
  //   await updateSingleProject(params.slug);
  // }

  // var data = await getSingleProject(params.slug);
  // console.log(data);
  // console.log(data);

  return (
    <>
      <div className="py-12 lg:py-20">
        {/* <div className="">{product.title}</div> */}
        <div>
          <Image
            src={product.image}
            width={1200}
            height={600}
            quality={100}
            alt={`${slug}-img`}
            loading="eager"
            sizes="(min-width: 640px) 80%, "
            priority
          />

          <div className="w-full bg-white px-4 lg:px-14 pt-12 lg:pt-16 pb-12 lg:pb-20 mb-8 lg:mb-16">
            <h1 className="text-3xl font-marcellus text-center text-base-brown mb-8">{product.title}</h1>
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
              <div className="flex-1 prose max-w-full font-roboto font-light text-base-brown">{HTMLReactParser(product.content)}</div>
              <div className="w-72 font-karla">
                <h2 className="pb-2.5 uppercase tracking-[3px] text-base-brown border-b border-base-gray !font-medium mb-6">Detail of treatment</h2>
                <div className="grid gap-4 text-sm">
                  <div className="flex justify-between text-base-dark-brown">
                    <p className="text-base-brown uppercase tracking-[2px]">Date:</p>
                    <p>{moment(product.date).format("MMMM DD, YYYY")}</p>
                  </div>
                  {/* <div className="flex justify-between text-base-dark-brown">
                    <p className="text-base-brown uppercase tracking-[2px]">Categories:</p>
                    <p>
                      {product.categories
                        .map((category) => category.name)
                        .join()
                        .replace(",", ", ")}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            {product.prev.slug ? (
              <Link
                href={`/projects/${product.prev.slug}`}
                className="flex gap-4 group"
              >
                <Button
                  size="icon"
                  variant="secondary"
                  className="w-8 h-full bg-white shrink-0"
                >
                  <ChevronLeft
                    size={20}
                    className=""
                  />
                </Button>
                <div>
                  <p className="uppercase text-xs text-base-brown font-karla tracking-[2px] mb-0.5">
                    Previous <br className="md:hidden" /> Project
                  </p>
                  <p className="capitalize font-marcellus">{product.prev.title}</p>
                </div>
              </Link>
            ) : (
              <span></span>
            )}
            {product.next.slug ? (
              <Link
                href={`/projects/${product.next.slug}`}
                className="flex gap-4 text-right group justify-self-end"
              >
                <div>
                  <p className="uppercase text-xs text-base-brown font-karla tracking-[2px] mb-0.5">
                    Next
                    <br className="md:hidden" /> Project
                  </p>
                  <p className="capitalize font-marcellus">{product.next.title}</p>
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="w-8 h-full bg-white shrink-0"
                >
                  <ChevronRight
                    size={20}
                    className="text-base-brown"
                  />
                </Button>
              </Link>
            ) : (
              <span></span>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}
