import BookingForm from "@/components/BookingForm";
import NewsCard from "@/components/NewsCard";
import NewsletterSubs from "@/components/NewsletterSubs";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fetchBlogsData, getAllBlogsData } from "@/lib/blogs";
import { fetchCategoriesData, getAllCategoriesData } from "@/lib/categories";
import { addEmailToList } from "@/lib/mailinglist";
import { fetchProducts } from "@/lib/products";
import { fetchProjectCategories, getProjectCategories } from "@/lib/projectCategories";
import { getAllProjects, updateSingleProject } from "@/lib/projects";
import axios from "axios";
import { forEach } from "lodash";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  var projectCategories = await getProjectCategories();
  // await fetchBlogsData();
  var blogs = await getAllBlogsData();

  const handleSubscribe = async (data) => {
    "use server";
    try {
      // throw { error: true };
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await addEmailToList(data.email);

      return { success: true };
    } catch (error) {
      return { error: error, message: "We found an error while trying save your email to our list. Please try again later." };
    }
  };

  return (
    <main className="min-h-screen w-full bg-base-50">
      <section className="relative h-fit">
        <div className="absolute w-full h-full bg-base-dark top-0"></div>
        <div className="relative z-[1] max-w-[1400px] mx-auto">
          <Carousel
            opts={{
              loop: true,
            }}
            autoplay={true}
          >
            <CarouselContent className="">
              <CarouselItem className="relative ">
                <picture>
                  <source
                    srcset="/images/desktop/landing/header-2.webp"
                    media="(min-width:600px)"
                  ></source>
                  <Image
                    src={"/images/mobile/header-2.webp"}
                    width={480}
                    height={810}
                    quality={100}
                    className="px-2 object-contain w-full"
                    alt="header-image"
                  />
                </picture>
                <div className="absolute top-1/4 xl:top-1/3 p-8 lg:px-40 w-full font-roboto">
                  <h2 className=" text-base-cream uppercase tracking-[4px] text-sm lg:text-lg mb-2 lg:mb-6 max-w-[650px]">
                    The Art Of <br className="lg:hidden" />
                    Precision Beauty
                  </h2>
                  <h1 className="text-2xl lg:text-4xl text-dark-brown mb-8 md:max-w-[450px] lg:max-w-[650px] leading-8 lg:leading-[50px]">
                    The first genetic-based cellular activation clinic
                  </h1>
                  <Link href={"/online-booking"}>
                    <Button
                      variant=""
                      className="tracking-[3px]"
                    >
                      Reserve Now
                    </Button>
                  </Link>
                </div>
              </CarouselItem>

              <CarouselItem className="relative ">
                <picture>
                  <source
                    srcset="/images/desktop/landing/header-1.webp"
                    media="(min-width:768px)"
                  ></source>
                  <Image
                    src={"/images/mobile/header-1.webp"}
                    width={480}
                    height={810}
                    quality={100}
                    className="px-2 object-contain w-full"
                    alt="header-image"
                  />
                </picture>
                <div className="absolute top-1/4 left-[30%] md:left-[40%] xl:top-1/3 p-8 lg:px-40 w-full font-roboto">
                  <h2 className=" text-base-cream uppercase tracking-[4px] text-sm lg:text-lg mb-2 lg:mb-6 max-w-[650px]">
                    Beauty&apos;s
                    <br className="lg:hidden" /> New Standard
                  </h2>
                  <h1 className="text-2xl lg:text-4xl text-dark-brown mb-8 max-w-[220px] md:max-w-[500px] lg:max-w-[450px] xl:max-w-[650px] leading-8 lg:leading-[50px]">
                    Beyond aesthetic clinic but advanced beauty technology enterprise
                  </h1>

                  <Link href={"/online-booking"}>
                    <Button
                      variant=""
                      className="tracking-[3px]"
                    >
                      Reserve Now
                    </Button>
                  </Link>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-base-cream text-base-dark-brown" />
            <CarouselNext className="bg-base-cream text-base-dark-brown" />
          </Carousel>
        </div>
      </section>
      <section className="bg-base-light-cream md:h-[600px] py-16 px-6 md:px-0 md:py-20">
        <div className="max-w-[480px] mx-auto text-center text-dark-brown">
          <h2 className="tracking-[3px] font-karla mb-8 text-base-cream">EXPERIENCE THE FUTURE OF BEAUTY</h2>
          <h1 className="text-3xl font-marcellus mb-8">The first genetic-based cellular activation clinic</h1>
          <p className="font-roboto text-base-brown mb-8">
            The best non-surgical treatment and beauty solutions available in Indonesia. Our extensive services encompass skin refinement,
            injectables, liquid facelifts, and a vast selection of highly sought-after cosmetic laser treatments to more targeted solutions that
            address your skin concerns, optimize your skincare routine and achieve long-lasting results
          </p>
          <Link href={"/about-us"}>
            <Button>More About Us</Button>
          </Link>
        </div>
      </section>
      <section className="py-12 px-6 md:py-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h3 className="font-marcellus text-2xl max-w-[550px]">Experience an extensive menu of both modern and timeless treatments:</h3>
          <Button
            variant="outline"
            className="w-fit"
          >
            View Our Treatment
          </Button>
        </div>
        <Carousel
          autoplay={false}
          className="!w-full"
        >
          <CarouselContent className="-ml-6">
            {Object.keys(projectCategories).map((category_slug, index) => {
              var category = projectCategories[category_slug];
              return (
                <CarouselItem
                  className="relative max-w-full basis-full md:basis-1/2 lg:basis-1/3 pl-6"
                  key={index}
                >
                  <Link href={`/projects-categories/${category.slug}`}>
                    <div className="aspect-[350/200] max-w-full overflow-hidden flex items-center justify-center relative group">
                      <Image
                        src={category.image}
                        alt="pj-category-image"
                        width={360}
                        height={200}
                        quality={100}
                        className="absolute object-cover w-full transition-all group-hover:brightness-50"
                      />
                      <p className="z-[2] font-marcellus text-lg font-semibold text-stone-50 text-center">{category.name}</p>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="bg-base-cream text-base-dark-brown lg:left-4 xl:-left-10" />
          <CarouselNext className="bg-base-cream text-base-dark-brown  lg:right-4 xl:-right-10" />
        </Carousel>
      </section>
      <section className="md:aspect-[1024/470] 2xl:aspect-[256/100] w-full bg-base-dark-brown grid md:grid-cols-2">
        <div className="px-10 pr-0 md:px-6 lg:pl-10 lg:pr-4 py-10 lg:max-w-[500px] mx-auto place-self-center">
          <h1 className="font-marcellus text-[32px] text-stone-50 mb-4">Luxury, quality & comfort</h1>
          <h2 className="font-karla uppercase tracking-[2px] mb-10 text-white/40">Aesthetic clinic premium service</h2>
          <p className="text-base-brown font-light antialiased mb-8">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <Link href={"/about-us"}>
            <Button
              variant="outline"
              className="bg-transparent text-base-creamer border-base-creamer hover:text-base-darkest hover:bg-base-creamer"
            >
              View Amenities
            </Button>
          </Link>
        </div>
        <div className="w-full h-full overflow-hidden">
          <picture>
            <source
              srcset={"/images/desktop/landing/treatment-room.webp"}
              media="(min-width: 768px)"
            />
            <Image
              width={600}
              height={750}
              quality={100}
              src={"/images/mobile/treatment-room.webp"}
              className="object-cover w-full lg:w-auto h-full xl:w-full xl:h-auto"
              sizes="(min-width: 768px) 600px, (min-width: 1024px) 750px"
              alt="treatment-room"
            />
          </picture>
        </div>
      </section>
      <section className="relative overflow-hidden md:h-[450px] lg:h-[500px] xl:h-[700px]">
        <Image
          src={"/images/mobile/voucher.webp"}
          fill
          quality={100}
          alt="voucher-bg"
          className="object-cover w-full absolute md:hidden"
        />
        <Image
          src={"/images/desktop/landing/voucher-md.webp"}
          fill
          quality={100}
          alt="voucher-bg"
          className="object-cover w-full absolute hidden md:block lg:hidden"
        />
        <Image
          src={"/images/desktop/landing/voucher.webp"}
          fill
          quality={100}
          alt="voucher-bg"
          className="object-cover w-full absolute hidden lg:block"
        />
        <div className="max-w-[1200px] h-full mx-auto relative z-[1]">
          <div className="pt-16 pb-16 max-w-[320px] lg:p-0 grid gap-10 text-center place-items-center relative left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 lg:left-auto  lg:translate-x-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 right-32">
            <h2 className="text-base-brown font-marcellus text-[18px]">Beauty Treatment Gift Vouchers</h2>
            <h1 className="font-karla text-[32px] text-base-dark-brown uppercase max-w-[270px] mx-auto leading-[150%]">
              A perfect gift to someone special
            </h1>
            <Button className="w-fit">Explore Vouchers</Button>
          </div>
        </div>
      </section>
      <section className="bg-base-light-cream">
        <div className="max-w-[1200px] px-6 mx-auto py-16 lg:py-32">
          <h2 className="text-4xl font-marcellus text-base-dark-brown text-center mb-8 lg:mb-16">Latest news & offers</h2>
          <Carousel
            autoplay={true}
            autoplayDelay={5000}
            className="!w-full"
          >
            <CarouselContent className="-ml-6">
              {Object.keys(blogs).map((blog_slug, index) => {
                var blog = blogs[blog_slug];
                return (
                  <CarouselItem
                    className="pl-6 md:basis-1/2 lg:basis-1/3"
                    key={index}
                  >
                    <Link href={blog.slug}>
                      <NewsCard news={blog} />
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="relative w-full h-fit min-h-[500px]">
        <Image
          src={"/images/mobile/subscribe.webp"}
          fill
          className="absolute object-cover w-full md:hidden"
          quality={100}
          alt="bg-banner"
        />
        <Image
          src={"/images/desktop/landing/subscribe.webp"}
          fill
          className="absolute w-full object-cover"
          quality={100}
          alt="bg-banner"
        />
        <div className="max-w-[600px]  mx-auto px-8 relative z-[1] text-center py-16 lg:py-32">
          <h3 className="uppercase text-[18px] text-white/40 tracking-[2px] font-karla mb-8">Stay In touch</h3>
          <h2 className="text-[32px] font-marcellus text-stone-50 leading-[150%] mb-12">
            Join our email list and be the first to know about specials, events and more!
          </h2>
          <NewsletterSubs onSubmit={handleSubscribe} />
        </div>
      </section>
    </main>
  );
}
