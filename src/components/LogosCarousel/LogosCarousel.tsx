import Marquee from "react-fast-marquee";

export default function LogosCarousel() {
  const logos = Array.from({ length: 13 }, (_, i) => `logo-${i + 1}.png`);

  return (
    <section className="space-y-4 ">
      <hr className="mx-4 border-black" />
      <h2 className="md:text-center md:text-xl px-4 max-w-[200px] md:max-w-full">
        Trusted by thousands of consumer brands
      </h2>

      <Marquee pauseOnHover>
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
      <hr className="mx-4 border-black" />
    </section>
  );
}
