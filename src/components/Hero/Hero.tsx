import Image from "next/image";

export default function Hero() {
  return (
    <>
      <h1>
        <span>Profit Unlocked:</span> Your Guide to Ecommerce Accounting for DTC
        & Shopify Businesses
      </h1>
      <div className="relative h-[200px]">
        <Image
          className="object-contain"
          src="/finaloop-book.png"
          alt="Hero"
          fill
        />
      </div>
      <p>
        We like to call it “Your Guide for Profit in 2024.” Grab every template,
        definition, and tip as a single PDF below.
      </p>
      <button className="btn">Get Your Full Guide</button>
    </>
  );
}
