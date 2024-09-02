import Marquee from "react-fast-marquee";

export default function LogosCarousel() {
  const logos = Array.from({ length: 13 }, (_, i) => `logo-${i + 1}.png`);

  return (
    <Marquee pauseOnHover>
      {logos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="px-4" key={logo} src={logo} alt="" loading="lazy" />
      ))}
    </Marquee>
  );
}
