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
                  href: "/projects/cromosome-iv",
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
          href: "/projects/sagging-skinn",
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
          text: "Droppy Eyelids",
          end: true,
          href: "/projects/droppy-eyelids",
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
  useEffect(() => {
    console.log(productsRef.current);
  }, []);

  return (
    <div className="bg-base-darker py-4">
      <div className="w-full max-w-[1200px] px-5 mx-auto flex items-center">
        <Link href={"/"}>
          <Image
            src={"/lesoin-icon.png"}
            width={160}
            height={64}
            priority={true}
            loading="eager"
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
                withChild={true}
              >
                {navigation.treatment.text}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                <NavigationMenuLink>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-3 bg-base-brown rounded">
                    {navigation.treatment.child.map((treatment_child) => {
                      return (
                        <div className="">
                          <p className="font-semibold mb-2 underline underline-offset-2 px-2">{treatment_child.text}</p>
                          <div className="">
                            {treatment_child.child.map((treatment_second_child) => {
                              return (
                                <NavigationSubMenu className="font-roboto">
                                  <NavigationMenuList className="justify-start">
                                    <>
                                      {treatment_second_child.child ? (
                                        <NavigationMenuItem className="w-full">
                                          <NavigationSubMenuTrigger
                                            className="w-full"
                                            withChild={true}
                                          >
                                            {treatment_second_child.text}
                                          </NavigationSubMenuTrigger>

                                          <NavigationSubMenuContent className="">
                                            <ul className="w-[250px] relative z-30 max-h-96 overflow-y-scroll">
                                              {treatment_second_child.child.map((treatment_third_child, index) => {
                                                return (
                                                  <ListItem
                                                    href={treatment_third_child.href}
                                                    title={treatment_third_child.text}
                                                  />
                                                );
                                              })}
                                            </ul>
                                          </NavigationSubMenuContent>
                                        </NavigationMenuItem>
                                      ) : (
                                        <NavigationMenuItem className="w-full">
                                          <NavigationSubMenuLink
                                            className={cn(navigationSubMenuTriggerStyle())}
                                            href={treatment_second_child.href}
                                          >
                                            {treatment_second_child.text}
                                          </NavigationSubMenuLink>
                                        </NavigationMenuItem>
                                      )}
                                    </>
                                  </NavigationMenuList>
                                </NavigationSubMenu>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem ref={productsRef}>
              <NavigationMenuTrigger
                className=""
                withChild={true}
              >
                {navigation.products.text}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="grid gap-2 p-4 w-[200px] bg-base-brown rounded">
                    {navigation.products.child.map((products_child) => {
                      return <ListItem title={products_child.text}></ListItem>;
                    })}
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className=""
                withChild={true}
              >
                {navigation.solutions.text}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="rounded bg-base-brown">3</ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className=""
                withChild={false}
              >
                <Link href={navigation["about-us"].href}>{navigation["about-us"].text}</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className=""
                withChild={false}
              >
                <Link href={navigation["online-booking"].href}>{navigation["online-booking"].text}</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            {/* {navigation.map((nav_menu, index) => {
              return (
                <NavigationMenuItem key={index}>
                  {nav_menu.end ? (
                    <>
                      <NavigationMenuTrigger
                        className=""
                        withChild={false}
                      >
                        <Link href={nav_menu.href}>{nav_menu.text}</Link>
                      </NavigationMenuTrigger>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger
                        className=""
                        withChild={true}
                      >
                        {nav_menu.text}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>
                          <div>
                            <p>{index + 1}</p>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              );
            })} */}
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
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  const [dataState, setDataState] = useState("open");
  return (
    <li className="font-roboto">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-base-cream/50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
