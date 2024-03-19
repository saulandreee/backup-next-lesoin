"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationSubMenu,
  NavigationSubMenuContent,
  NavigationSubMenuItem,
  NavigationSubMenuLink,
  NavigationSubMenuTrigger,
  navigationMenuTriggerStyle,
  navigationSubMenuTriggerStyle,
} from "./ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { List, Search } from "lucide-react";
import { cn } from "@/lib/utils";

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "./ui/menubar";

import MobileNav from "./MobileNav";

export default function Navbar() {
  const [navigation, setNavigation] = useState({
    home: {
      text: "Home",
      end: true,
      href: "/",
    },
    treatment: {
      text: "Treatment",
      end: false,
      child: [
        {
          text: "Face",
          end: false,
          child: [
            {
              text: "Facial",
              end: false,
              child: [
                {
                  text: "Korean V Facial",
                  end: true,
                  href: "/projects/korean-v-facial",
                },
                {
                  text: "Hydraface",
                  end: true,
                  href: "/projects/hydraface",
                },
                {
                  text: "Hydrafuse",
                  end: true,
                  href: "/projects/hydrafuse",
                },
                {
                  text: "Ultimate Facial",
                  end: true,
                  href: "/projects/ultimate-facial",
                },
              ],
            },
            {
              text: "Booster",
              end: false,
              child: [
                {
                  text: "Youthful Elixir",
                  end: true,
                  href: "/projects/youthful-elixir",
                },
                {
                  text: "The Optimizer",
                  end: true,
                  href: "/projects/the-optimizer",
                },
                {
                  text: "The Profhilo",
                  end: true,
                  href: "/projects/the-profhilo",
                },
                {
                  text: "The Nucleofill",
                  end: true,
                  href: "/projects/the-nucleofill",
                },
                {
                  text: "Microtox",
                  end: true,
                  href: "/projects/microtox",
                },
                {
                  text: "Ultimate Skin Savior",
                  end: true,
                  href: "/projects/ultimate-skin-savior",
                },
                {
                  text: "Vita Eye",
                  end: true,
                  href: "/projects/vita-eye",
                },
                {
                  text: "Vita Skin",
                  end: true,
                  href: "/projects/vita-skin",
                },
                {
                  text: "The Firming",
                  end: true,
                  href: "/projects/the-firming",
                },
                {
                  text: "More Than PRP",
                  end: true,
                  href: "/projects/more-than-prp",
                },
                {
                  text: "The Whitener",
                  end: true,
                  href: "/projects/the-whitener",
                },
                {
                  text: "Neuromodulator",
                  end: true,
                  href: "/projects/neuromodulator",
                },
                {
                  text: "Gym in a Vial",
                  end: true,
                  href: "/projects/gym-in-a-vial",
                },
                {
                  text: "Gym Skill",
                  end: true,
                  href: "/projects/gym-skill",
                },
                {
                  text: "Threadlift",
                  end: true,
                  href: "/projects/threadlift",
                },
              ],
            },
            {
              text: "Filler",
              end: false,
              child: [
                {
                  text: "Fat Filler- LGenetic",
                  end: true,
                  href: "/projects/fat-filler-lgenetic",
                },
                {
                  text: "Modulated Filler",
                  end: true,
                  href: "/projects/modulated-filler",
                },
                {
                  text: "Clear Skin",
                  end: true,
                  href: "/projects/clear-skin",
                },
                {
                  text: "Spot Injection",
                  end: true,
                  href: "/projects/spot-injection",
                },
              ],
            },
          ],
        },
        {
          text: "Body",
          end: false,
          child: [
            {
              text: "Slimming",
              end: false,
              child: [
                {
                  text: "APO Slim Body",
                  end: true,
                  href: "/projects/apo-slim-body",
                },
                {
                  text: "Fat Burner Solution",
                  end: true,
                  href: "/projects/fat-burner-solution",
                },
              ],
            },
            {
              text: "The Boob Job",
              end: false,
              child: [
                {
                  text: "Boob Lift",
                  end: true,
                  href: "/projects/boob-lift",
                },
                {
                  text: "Bust Fill",
                  end: true,
                  href: "/projects/bust-fill",
                },
              ],
            },
            {
              text: "Bum-Bum",
              end: false,
              child: [
                {
                  text: "Perky Bum!",
                  end: true,
                  href: "/projects/perky-bum",
                },
              ],
            },
            {
              text: "IV Booster",
              end: false,
              child: [
                {
                  text: "Chromosome IV",
                  end: true,
                  href: "/projects/chromosome-iv",
                },
                {
                  text: "SlimDrip",
                  end: true,
                  href: "/projects/slimdrip",
                },
                {
                  text: "MultiDrip",
                  end: true,
                  href: "/projects/multidrip",
                },
              ],
            },
          ],
        },
        {
          text: "Hair",
          end: false,
          child: [
            {
              text: "Hair Filler",
              end: true,
              href: "/projects/hair-filler",
            },
            {
              text: "More Than PRP (Hair)",
              end: true,
              href: "/projects/more-than-prp-hair",
            },
            {
              text: "Hair+",
              end: true,
              href: "/projects/hair-plus",
            },
          ],
        },
        {
          text: "Laser",
          end: false,
          child: [
            {
              text: "Hollywood Spectra",
              end: true,
              href: "/projects/hollywood-spectra",
            },
            {
              text: "MD Thulium",
              end: true,
              href: "/projects/md-thulium",
            },
          ],
        },

        {
          text: "Stem Cell",
          end: false,
          child: [
            {
              text: "Face Stem Cell",
              end: true,
              href: "/projects/face-stem-cell",
            },
            {
              text: "IV Stem Cell",
              end: true,
              href: "/projects/iv-stem-cell",
            },
          ],
        },
        {
          text: "Intimate",
          end: false,
          child: [
            {
              text: "Axillaris",
              end: false,
              child: [
                {
                  text: "AxiLight",
                  end: true,
                  href: "/projects/axilight",
                },
                {
                  text: "AxiBoost",
                  end: true,
                  href: "/projects/axiboost",
                },
                {
                  text: "AxiTreat",
                  end: true,
                  href: "/projects/axitreat",
                },
              ],
            },
            {
              text: "Inguinalis",
              end: false,
              child: [
                {
                  text: "InguiLight",
                  end: true,
                  href: "/projects/inguilight",
                },
                {
                  text: "InguiBoost",
                  end: true,
                  href: "/projects/inguiboost",
                },
              ],
            },
            {
              text: "Miss V",
              end: false,
              child: [
                {
                  text: "V-Light",
                  end: true,
                  href: "/projects/v-light",
                },
                {
                  text: "V-Boost",
                  end: true,
                  href: "/projects/v-boost",
                },
                {
                  text: "V-Treat",
                  end: true,
                  href: "/projects/v-treat",
                },
              ],
            },
          ],
        },
      ],
    },
    products: {
      text: "Product",
      end: false,
      child: [
        {
          text: "Derma-G",
          end: true,
          href: "/products/derma-g",
        },
        {
          text: "Nutri-C",
          end: true,
          href: "/products/nutri-c",
        },
        {
          text: "Prim-O",
          end: true,
          href: "/products/prim-o",
        },
      ],
    },
    solutions: {
      text: "Solutions",
      end: false,
      child: [
        {
          text: "Acne",
          end: true,
          href: "/projects/acne",
        },
        {
          text: "Pigmentation",
          end: true,
          href: "/projects/pigmentation",
        },
        {
          text: "Freckles",
          end: true,
          href: "/projects/freckles",
        },
        {
          text: "Scarring",
          end: true,
          href: "/projects/scarring",
        },
        {
          text: "Overweight",
          end: true,
          href: "/projects/overweight",
        },
        {
          text: "Sagging Skin",
          end: true,
          href: "/projects/sagging-skin",
        },
        {
          text: "Sagging Breast",
          end: true,
          href: "/projects/sagging-breast",
        },
        {
          text: "Crow's Feet and Wrinkles",
          end: true,
          href: "/projects/crows-feet-and-wrinkles",
        },
        {
          text: "Droopy Eyelids",
          end: true,
          href: "/projects/droopy-eyelids",
        },
        {
          text: "Eyebags",
          end: true,
          href: "/projects/eyebags",
        },
        {
          text: "Dark Circle",
          end: true,
          href: "/projects/dark-circle",
        },
        {
          text: "Smile Lines",
          end: true,
          href: "/projects/smile-lines",
        },
        {
          text: "Pore-blem",
          end: true,
          href: "/projects/pore-blem",
        },
      ],
    },
    "about-us": {
      text: "About Us",
      end: true,
      href: "/about-us",
    },
    "online-booking": {
      text: "Online Booking",
      end: true,
      href: "/online-booking",
    },
  });

  const productsRef = useRef();

  // generating projects.json data
  // useEffect(() => {
  //   var temp = {};
  //   var tempKeysToSearch = ["treatment", "solutions"];
  //   tempKeysToSearch.forEach((nav) => {
  //     if (!navigation[nav].end) {
  //       navigation[nav].child.forEach((nav_child) => {
  //         if (!nav_child.end) {
  //           nav_child.child.forEach((second_child) => {
  //             if (!second_child.end) {
  //               second_child.child.forEach((third_child) => {
  //                 temp[third_child.href.split("/projects/").pop()] = {
  //                   page_title: third_child.text,
  //                   page_description: "",
  //                   page_keywords: "",
  //                   href: third_child.href,
  //                   title: third_child.text,
  //                 };
  //               });
  //             } else {
  //               temp[second_child.href.split("/projects/").pop()] = {
  //                 page_title: second_child.text,
  //                 page_description: "",
  //                 page_keywords: "",
  //                 href: nav_child.href,
  //                 title: second_child.text,
  //               };
  //             }
  //           });
  //         } else {
  //           temp[nav_child.href.split("/projects/").pop()] = {
  //             page_title: nav_child.text,
  //             page_description: "",
  //             page_keywords: "",
  //             href: nav_child.href,
  //             title: nav_child.text,
  //           };
  //         }
  //       });
  //     } else {
  //       temp[navigation[nav].href.split("/projects/").pop()] = {
  //         page_title: navigation[nav].text,
  //         page_description: "",
  //         page_keywords: "",
  //         href: navigation[nav].href,
  //         title: navigation[nav].text,
  //       };
  //     }
  //   });

  //   console.log(temp);
  // }, []);

  return (
    <>
      <div className="bg-base-darker py-4 hidden lg:block lg:sticky lg:top-0 z-[10]">
        <div className="max-w-[1200px] px-5 mx-auto flex items-center">
          <Link href={"/"}>
            <Image
              src={"/lesoin-icon.png"}
              width={160}
              height={64}
              priority={true}
              loading="eager"
              alt="lesoin-logo"
            />
          </Link>
          <NavigationMenu className="flex-1 font-karla text-slate-50">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link
                  href={navigation.home.href}
                  legacyBehavior
                  passHref
                  className=""
                >
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>{navigation.home.text}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className=""
                  haveChild={true}
                >
                  {navigation.treatment.text}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-3 bg-base-brown rounded">
                    {navigation.treatment.child.map((treatment_child, index) => {
                      return (
                        <div
                          className=""
                          style={{ zIndex: 20 - index }}
                          key={index}
                        >
                          <p className="font-semibold mb-2 underline underline-offset-2 px-2">{treatment_child.text}</p>

                          <div className="">
                            <NavigationSubMenu
                              className="font-roboto"
                              orientation="vertical"
                            >
                              <NavigationMenuList className="block">
                                <div className="flex-col justify-start">
                                  {treatment_child.child.map((treatment_second_child) => {
                                    return (
                                      <>
                                        {treatment_second_child.child ? (
                                          <NavigationSubMenuItem className="w-full">
                                            <NavigationSubMenuTrigger
                                              className="w-full"
                                              haveChild={true}
                                            >
                                              {treatment_second_child.text}
                                            </NavigationSubMenuTrigger>

                                            <NavigationSubMenuContent className="">
                                              <ul
                                                className="py-1.5 px-2 w-[250px] relative max-h-96 overflow-y-scroll"
                                                style={{ zIndex: 40 }}
                                              >
                                                {treatment_second_child.child.map((treatment_third_child, third_index) => {
                                                  return (
                                                    <ListItem
                                                      href={treatment_third_child.href}
                                                      title={treatment_third_child.text}
                                                      key={third_index}
                                                    />
                                                  );
                                                })}
                                              </ul>
                                            </NavigationSubMenuContent>
                                          </NavigationSubMenuItem>
                                        ) : (
                                          <NavigationMenuItem className="w-full">
                                            <NavigationMenuLink
                                              className={cn(navigationSubMenuTriggerStyle())}
                                              href={treatment_second_child.href}
                                            >
                                              {treatment_second_child.text}
                                            </NavigationMenuLink>
                                          </NavigationMenuItem>
                                        )}
                                      </>
                                    );
                                  })}
                                </div>
                              </NavigationMenuList>
                            </NavigationSubMenu>
                          </div>
                        </div>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem ref={productsRef}>
                <NavigationMenuTrigger
                  className=""
                  haveChild={true}
                >
                  {navigation.products.text}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <ul className="grid gap-2 p-4 w-[200px] bg-base-brown rounded">
                      {navigation.products.child.map((products_child, product_index) => {
                        return (
                          <ListItem
                            key={product_index}
                            href={products_child.href}
                            title={products_child.text}
                          ></ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className=""
                  haveChild={true}
                >
                  {navigation.solutions.text}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <ul className="rounded bg-base-brown w-[250px] max-h-[400px] overflow-y-scroll">
                      {navigation.solutions.child.map((solutions_child, solution_index) => {
                        return (
                          <ListItem
                            key={solution_index}
                            href={solutions_child.href}
                            title={solutions_child.text}
                          ></ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href={navigation["about-us"].href}
                  className={cn(navigationMenuTriggerStyle())}
                  haveChild={false}
                >
                  {navigation["about-us"].text}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href={navigation["online-booking"].href}
                  className={cn(navigationMenuTriggerStyle())}
                  haveChild={false}
                >
                  {navigation["online-booking"].text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            size="icon"
            variant="ghost"
            className="text-stone-50"
          >
            <Search size={18} />
          </Button>
        </div>
      </div>
      <MobileNav navigation={navigation} />
    </>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  const [dataState, setDataState] = useState("open");
  return (
    <li className="font-roboto">
      <NavigationMenuLink
        id="lalalili"
        className={cn(
          "block select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-base-cream/50 text-sm font-medium leading-none",
          className
        )}
        {...props}
      >
        {title}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
