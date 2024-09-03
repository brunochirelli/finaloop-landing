import Marquee from "react-fast-marquee";
import Divider from "../ui/divider";

export default function LogosCarousel() {
  const logos = Array.from({ length: 13 }, (_, i) => `logo-${i + 1}.png`);

  return (
    <>
      <Divider />
      <section className="space-y-4 pb-28">
        <h2 className="sm:text-center sm:text-xl px-4 max-w-[200px] sm:max-w-full ">
          Trusted by thousands of consumer brands
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
