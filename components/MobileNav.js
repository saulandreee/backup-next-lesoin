"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function MobileNav({ navigation }) {
  // console.log(navigation);
  const [showNav, setShowNav] = useState();
  const [history, setHistory] = useState({
    firstNav: { slug: "", data: {} },
    secondNav: { slug: "", data: {} },
    thirdNav: { slug: "", data: {} },
  });

  const resetNav = () => {
    setHistory({
      firstNav: { slug: "", data: {} },
      secondNav: { slug: "", data: {} },
      thirdNav: { slug: "", data: {} },
    });
    setShowNav();
  };

  return (
    <div className="bg-base-darker py-4 lg:hidden">
      <div className="w-full px-5 mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/lesoin-icon.png"}
            width={128}
            height={48}
            priority={true}
            loading="eager"
            alt="lesoin-logo"
          />
        </Link>
        <Drawer
          direction="left"
          className="text-stone-50"
        >
          <DrawerTrigger className="">
            <Button
              asChild="svg"
              variant="ghost"
              size="icon"
              className="focus-within:bg-base-dark-brown/50 focus:bg-base-dark-brown/50 active:bg-base-dark-brown/50 rounded p-2"
            >
              <Menu
                size={22}
                className="text-stone-50"
              />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-base-darker">
            <DrawerHeader className={"flex items-center justify-between mb-4"}>
              <DrawerClose>
                <Link href={"/"}>
                  <Image
                    alt="lesoin-image"
                    src={"/lesoin-icon.png"}
                    width={128}
                    height={48}
                  />
                </Link>
              </DrawerClose>
              <DrawerClose>
                <Button
                  asChild="svg"
                  variant="ghost"
                  size="icon"
                  className="focus-within:bg-base-dark-brown/50 focus:bg-base-dark-brown/50 active:bg-base-dark-brown/50 rounded p-2"
                  onClick={resetNav}
                >
                  <X
                    size={24}
                    className="text-stone-50"
                  />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            <div className="flex-1 overflow-y-scroll px-4 text-stone-50">
              <div
                className="flex flex-col gap-1"
                id="first_nav"
              >
                {!showNav ? (
                  Object.keys(navigation).map((nav, navIndex) => {
                    var nav_object = navigation[nav];
                    return (
                      <Fragment key={navIndex}>
                        {nav_object.end ? (
                          <Link
                            href={nav_object.href}
                            className="w-full block"
                          >
                            <DrawerClose
                              className="text-left w-full"
                              onClick={resetNav}
                            >
                              <NavigationItem
                                title={nav_object.text}
                                end={true}
                                setNav={(slug) => {
                                  setHistory({ ...history, firstNav: { slug: slug, data: nav_object } });
                                  setShowNav("second");
                                }}
                              />
                            </DrawerClose>
                          </Link>
                        ) : (
                          <NavigationItem
                            title={nav_object.text}
                            key={navIndex}
                            slug={nav}
                            setNav={(slug) => {
                              setHistory({ ...history, firstNav: { slug: slug, data: nav_object } });
                              setShowNav("second");
                            }}
                          />
                        )}
                      </Fragment>
                    );
                  })
                ) : showNav === "second" ? (
                  <>
                    <div className="sticky top-0 bg-base-darker text-lg font-semibold pb-2 border-b-2 border-stone-50 flex items-center gap-2.5">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-base-cream/20 rounded-lg"
                        onClick={resetNav}
                      >
                        <ChevronLeft
                          size={20}
                          strokeWidth={3}
                        />
                      </Button>
                      <button
                        className="text-left"
                        onClick={resetNav}
                      >
                        {history.firstNav.data.text}
                      </button>
                    </div>
                    <div className="py-4 flex flex-col gap-1">
                      {history.firstNav.data.child.map((secondNav, second_index) => {
                        return (
                          <Fragment key={second_index}>
                            {secondNav.end ? (
                              <Link
                                href={secondNav.href}
                                key={second_index}
                                className="w-full"
                              >
                                <DrawerClose
                                  className="text-left w-full"
                                  onClick={resetNav}
                                >
                                  <NavigationItem
                                    title={secondNav.text}
                                    end={true}
                                  />
                                </DrawerClose>
                              </Link>
                            ) : (
                              <div
                                key={second_index}
                                className="pb-4 mb-4 border-b border-stone-50/20 last:border-0 last:pb-0 last:mb-0"
                              >
                                <p className="font-semibold mb-2">{secondNav.text}</p>
                                <div className="flex flex-col gap-1">
                                  {secondNav.child.map((thirdNav, index) => {
                                    // console.log(thirdNav.text, thirdNav.end);
                                    return (
                                      <NavigationItem
                                        key={index}
                                        title={thirdNav.text}
                                        end={thirdNav.end}
                                        setNav={(slug) => {
                                          setHistory({
                                            ...history,
                                            secondNav: { data: thirdNav },
                                            thirdNav: { data: thirdNav },
                                          });
                                          setShowNav("third");
                                        }}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </Fragment>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="sticky top-0 bg-base-darker text-lg font-semibold pb-2 border-b-2 border-stone-50  flex items-center gap-2.5">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-base-cream/20 rounded-lg"
                        onClick={() => {
                          setShowNav("second");
                          setHistory({ ...history, secondNav: { slug: "", data: {} } });
                        }}
                      >
                        <ChevronLeft
                          size={20}
                          strokeWidth={3}
                        />
                      </Button>

                      <button
                        className="text-left"
                        onClick={resetNav}
                      >
                        {history.secondNav.data.text}
                      </button>
                    </div>
                    <div className="py-4 flex flex-col gap-1">
                      {history.secondNav.data.child.map((thirdNav, third_index) => (
                        <Link
                          href={thirdNav.href}
                          key={third_index}
                        >
                          <DrawerClose
                            className="text-left  w-full"
                            onClick={resetNav}
                          >
                            <NavigationItem
                              title={thirdNav.text}
                              end={true}
                            />
                          </DrawerClose>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

const NavigationItem = ({ title, slug, setNav, end }) => {
  return (
    <span
      onClick={() => (setNav ? setNav(slug) : {})}
      className="text-left cursor-pointer w-full text-stone-50 font-medium flex justify-between items-center py-2 px-4 grow-0 rounded focus-within:bg-base-dark-brown/50 focus:bg-base-dark-brown/50 active:bg-base-dark-brown/50"
    >
      {title}
      {!end && <ChevronRight size={20} />}
    </span>
  );
};
