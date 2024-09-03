import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import LogosCarousel from "@/components/LogosCarousel/LogosCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosCarousel />
      <Features title="What's Inside:" />
    </>
  );
}
