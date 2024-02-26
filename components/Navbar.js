"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    {
      text: "Home",
      end: true,
      href: "/",
    },
    {
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
    {
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
    {
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
    {
      text: "About Us",
      end: true,
      href: "/about-us",
    },
    {
      text: "Online Booking",
      end: true,
      href: "/online-booking",
    },
  ]);

  return (
    <div className="bg-base-darkest py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/lesoin-icon.png"}
            width={180}
            height={64}
            priority={true}
            loading="eager"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {navigation.map((nav_menu, index) => {
              return (
                <NavigationMenuItem>
                  {nav_menu.end ? (
                    <>
                      <NavigationMenuTrigger
                        className="rounded-none w-fit bg-base-darkest hover:bg-base-darkest/10 text-stone-50"
                        withChild={false}
                      >
                        <Link href={nav_menu.href}>{nav_menu.text}</Link>
                      </NavigationMenuTrigger>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger
                        className="rounded-none w-fit bg-base-darkest hover:bg-base-darkest/10 text-stone-50"
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
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
