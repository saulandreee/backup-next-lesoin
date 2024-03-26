import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import listDocter from "@/data/docters.json";
import listTestimony from "@/data/testimonies.json";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Quote, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const MedsosLinkIcon = ({ link, type, ...props }) => {
  if (type === "instagram") {
    return (
      <Link
        href={link}
        target="_blank"
      >
        <Instagram {...props} />
      </Link>
    );
  } else if (type === "facebook") {
    return (
      <Link
        href={link}
        target="_blank"
      >
        <Facebook {...props} />
      </Link>
    );
  } else if (type === "twitter") {
    return (
      <Link
        href={link}
        target="_blank"
      >
        <Twitter {...props} />
      </Link>
    );
  } else if (type === "linkedin") {
    return (
      <Link
        href={link}
        target="_blank"
      >
        <Linkedin {...props} />
      </Link>
    );
  }
};

export default async function About() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32 border-b border-base-cream/50 mx-auto max-w-[1200px] mb-8 lg:mb-16 px-5 ">
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
      <section className="mb-8 lg:mb-16 mx-auto max-w-[1200px] ">
        <Carousel
          autoplay={true}
          autoplayDelay={5000}
          opts={{
            loop: true,
          }}
          className="h-full"
        >
          <CarouselContent className="w-full md:-ml-4">
            {[...Array(5)].map((_, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="relative h-[200px] md:h-[320px] lg:h-[450px] aspect-[16/9] md:pl-4"
                >
                  <Image
                    src={`/images/desktop/about/about_us${index + 1}.webp`}
                    fill
                    quality={100}
                    className="object-cover w-full"
                    sizes="(min-width: 768px) 600px, (min-width: 1024px) 1200px"
                    alt={`lesoin-clinic-${index + 1}`}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="mx-auto max-w-[1200px] mb-8 lg:mb-16 px-5">
        <h1 className="font-marcellus text-[32px] text-center md:max-w-[400px] mx-auto text-base-dark mb-8">
          An inspiring team of Doctors & Aestheticians
        </h1>
        <div className="grid gap-6 gap-y-6 md:grid-cols-2 xl:grid-cols-4 justify-center">
          {listDocter.map((docter, index) => {
            // console.log(docter.links);
            return (
              <div
                className="shadow"
                key={index}
              >
                <div className="relative max-w-[400px] mx-auto aspect-[3/2] mb-6 ">
                  <Image
                    src={docter.image}
                    fill
                    quality={100}
                    className="object-contain"
                    alt={`profile-docter-${index}`}
                  />
                </div>
                <div className="p-2">
                  <p className="text-center font-marcellus text-[18px] text-base-dark-brown mb-1">{docter.name}</p>
                  <p className="text-xs font-karla uppercase text-center mb-6 tracking-[3px]">{docter.title}</p>
                  <p className="text-center font-roboto text-base-brown mb-6">{docter.description}</p>
                  <div className="flex gap-2.5 justify-center mb-2">
                    {docter.links.map((medsos, medsos_index) => (
                      <MedsosLinkIcon
                        key={medsos_index}
                        link={medsos.link}
                        type={medsos.type}
                        className="text-base-brown"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-base-dark lg:h-[600px] py-20">
        <div className="mb-8 text-center">
          <Quote
            size={40}
            className="text-base-brown/50 mx-auto lg:hidden"
          />
          <Quote
            size={60}
            className="text-base-brown/50 mx-auto hidden lg:inline"
          />
        </div>
        <Carousel
          className="w-full max-w-[1200px] mx-auto px-8 lg:px-16"
          autoplay={true}
          autoplayDelay={5000}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {listTestimony.map((testimony, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="w-full text-center"
                >
                  <p className="text-xl lg:text-[40px] leading-[150%] font-marcellus text-stone-50 mb-8">{testimony.testimony}</p>
                  <p className="text-lg lg:text-3xl font-marcellus text-stone-50 mb-4">{testimony.name}</p>
                  <p className="lg:text-lg font-marcellus text-stone-50 mb-4">{testimony.title}</p>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </section>
      <section className="py-[100px] lg:py-[150px] relative">
        <Image
          src={"/images/desktop/about/banner.webp"}
          alt="banner-image"
          fill
          quality={100}
          className="object-cover h-full hidden lg:inline-block absolute"
        />
        <Image
          src={"/images/mobile/banner.webp"}
          alt="banner-image"
          fill
          quality={100}
          className="object-cover h-full lg:hidden absolute"
        />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="relative z-[1] text-center lg:mx-0 lg:max-w-[500px] lg:left-[10%] lg:py-16">
            <h2 className="tracking-[3px] font-karla text-base-cream uppercase mb-2.5 lg:mb-0 max-w-[300px] lg:max-w-none mx-auto lg:mx-0">
              Experience the Future of Beauty
            </h2>
            <h1 className="font-marcellus text-[32px] text-base-dark-brown mb-12 lg:mb-16">Ready for your truly beauty?</h1>
            <Link href={"/online-booking"}>
              <Button className>Reserve Now</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-5 lg:px-0 text-center">
        <h2 className="tracking-[3px] font-karla text-base-cream uppercase mb-2.5 lg:mb-6 max-w-[300px] lg:max-w-none mx-auto lg:mx-0">
          Motivation behind our existance
        </h2>
        <h1 className="font-marcellus text-[32px] text-base-dark-brown mb-12 lg:mb-16 px-4 lg:px-0 lg:max-w-[600px] lg:mx-auto">
          Our existence is driven by the belief in delivering precision care and treatment to improve well-being and a positive emotional state.
        </h1>
        <div className="grid gap-6 px-4 lg:max-w-[600px] lg:mx-auto">
          <div>
            <h3 className="font-marcellus text-base-dark text-xl mb-6">Approach</h3>
            <p className="text-base-brown leading-[26px]">
              “Le Soin goes beyond being merely a medical aesthetics company; it operates as a biotechnology enterprise.”
            </p>
          </div>
          <div>
            <h3 className="font-marcellus text-base-dark text-xl mb-6">Our Offering</h3>
            <p className="text-base-brown leading-[26px]">
              “Beyond offering state-of-the-art technologies and top-notch treatments, we deliver tangible results based on your skin DNA by
              activating your innate regenerating capabilities.”
            </p>
          </div>
          <div>
            <h3 className="font-marcellus text-base-dark text-xl mb-6">Why Le Soin</h3>
            <p className="text-base-brown leading-[26px] mb-6">
              “Le Soin employs a tailored approach and formulations specific to your skin’s DNA, ensuring a quality and faster outcome that is
              genetically compatible with your body. ”
            </p>
            <p className="text-base-brown leading-[26px]">
              At Le Soin, we understand that true beauty is not just skin deep; it reflects your unique genetic makeup. We embrace the potential of
              genetics to elevate your beauty and overall wellness.”
            </p>
          </div>
          <div>
            <h3 className="font-marcellus text-base-dark text-xl mb-6">Our Story</h3>
            <p className="text-base-brown leading-[26px]">
              “Le Soin was established to surpass the limitations of the rapidly growing medical aesthetics industry. The founders were driven by a
              strong desire to cater to clients seeking self-improvement without compromising quality. The brand takes pride in its cutting-edge
              technology and outstanding achievements, leading to multiple awards and accolades.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
