import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-base-50">
      <section className="relative">
        <div className="absolute w-full h-screen bg-base-dark top-0"></div>
        <div className="relative z-[1] max-w-[1400px] mx-auto">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="relative">
                <Image
                  src={"/images/desktop/landing/header-1.webp"}
                  width={1400}
                  height={810}
                  quality={100}
                />
                <div className="absolute top-1/2 px-40">
                  <h2 className="font-roboto text-base-cream uppercase tracking-[4px] text-lg mb-6">The Art Of Precision Beauty</h2>
                  <h1>The first genetic-based cellular activation clinic</h1>
                  <Button variant="">Reserve Now</Button>
                </div>
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src={"/images/desktop/landing/header-1.webp"}
                  width={1400}
                  height={810}
                  quality={100}
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src={"/images/desktop/landing/header-1.webp"}
                  width={1400}
                  height={810}
                  quality={100}
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src={"/images/desktop/landing/header-1.webp"}
                  width={1400}
                  height={810}
                  quality={100}
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src={"/images/desktop/landing/header-1.webp"}
                  width={1400}
                  height={810}
                  quality={100}
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  src={"/images/desktop/landing/header-1.webp"}
                  width={1400}
                  height={810}
                  quality={100}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
