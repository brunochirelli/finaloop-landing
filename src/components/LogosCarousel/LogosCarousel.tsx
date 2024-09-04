import Marquee from "react-fast-marquee";

import Divider from "@/components/ui/divider";

type LogosCarouselProps = {
  title: string;
};

export default function LogosCarousel({ title }: LogosCarouselProps) {
  const logos = Array.from({ length: 13 }, (_, i) => `logo-${i + 1}.png`);

  return (
    <>
      <Divider />
      <section className="space-y-4 pb-28">
        <h2 className="sm:text-center py-10 px-4 max-w-80 sm:max-w-full text-lg sm:text-3xl font-light">
          {title}
        </h2>

        <Marquee className="!absolute !left-0" pauseOnHover>
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo}
              alt=""
              className="px-6 max-h-16"
              loading="lazy"
              src={logo}
            />
          ))}
        </Marquee>
      </section>
      <Divider />
    </>
  );
}
