import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export default async function About() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32 px-4 border-b border-base-cream/50">
        <h2 className="font-karla uppercase text-base-cream tracking-[3px] text-center mb-6">THE ART OF PRECISION BEAUTY</h2>
        <h1 className="font-marcellus text-[32px] text-center md:max-w-[700px] mx-auto text-base-dark mb-8">
          We are a professional Skin, Hormone and Genetic clinic in the heart of Indonesia.
        </h1>
        <div className="grid gap-8 md:max-w-[620px] text-center mx-auto text-base-brown leading-[26px]">
          <article>
            By integrating your genetic profile, our experts will analyze your genetic information to gain valuable insights of your skin type,
            predispositions and specific needs. Thus create a profoundly personalized treatment plan peculiar to your genetic profile using
            cutting-edge technology. while allowing us to curate beauty regimens by activating your innate regenerative capabilities and optimizing
            metabolism.
          </article>
          <article>
            Whether you are looking to minimize signs of aging, improve skin texture, or address specific genetic conditions, our tailored approach
            ensures you receive the most effective treatments for your unique genetic blueprint.
          </article>
          <article>
            Step into a world of tranquility and experience the transformative power of genetics in beauty. Our state-of-the-art facilities and
            skilled professionals combine the latest advancements in beauty technology with the precision of genetic insights, delivering exceptional
            results.
          </article>
        </div>
      </section>
      <section className="">
        <Carousel
          autoplay={true}
          autoplayDelay={5000}
          opts={{
            loop: true,
          }}
          className="h-full"
        >
          <CarouselContent className="w-full -ml-4">
            {[...Array(5)].map((_, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="relative basis-full border rounded pl-4"
                >
                  <div className="relative h-screen">
                    <Image
                      src={`/images/desktop/about/about_us${index + 1}.webp`}
                      fill
                      quality={100}
                      className="object-contain w-full"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}
