import Marquee from "react-fast-marquee";
import Divider from "../ui/divider";

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

        <Marquee pauseOnHover className="!absolute !left-0">
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="px-6 max-h-16"
              key={logo}
              src={logo}
              alt=""
              loading="lazy"
            />
          ))}
        </Marquee>
      </section>
      <Divider />
    </>
  );
}
