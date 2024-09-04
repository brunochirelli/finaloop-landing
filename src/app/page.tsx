import aaronImg from "@/assets/images/aaron-orendorff.png";
import raylaImg from "@/assets/images/rayla-rappaport.png";
import CTAOffer from "@/components/CTAOffer/CTAOffer";
import Experts from "@/components/Experts/Experts";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import LogosCarousel from "@/components/LogosCarousel/LogosCarousel";

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="text-primary">Profit Unlocked:</span>
            <br /> Your Guide to Ecommerce Accounting for DTC & Shopify
            Businesses
          </>
        }
      />
      <LogosCarousel title="Trusted by thousands of consumer brands" />
      <Features title="What's Inside:" />
      <Experts
        authors={[
          {
            name: "Rayla Rappaport",
            description:
              "Rayla is a Certified Public Accountant who spent more than 13 years with PwC before joining Finaloop back in 2021, where she now leads Product Marketing. Over that period she enhanced her deep understanding of accounting with ecommerce expertise by working directly with hundreds of DTC and B2B brands.",
            image: raylaImg,
          },
          {
            name: "Aaron Orendorff",
            description:
              "Previously Editor-in-Chief at Shopify Plus & VP of Marketing at Common Thread Collective, Aaron’s knowledge of the DTC space and what makes brand operators tick is second to none. You can join the +35K users who follow him on X and see for yourself.",
            image: aaronImg,
          },
        ]}
        title="About the authors:"
      />
      <CTAOffer />
    </>
  );
}
