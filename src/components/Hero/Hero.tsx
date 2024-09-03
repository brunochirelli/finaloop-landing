import Image from "next/image";
import bookImg from "@/assets/images/finaloop-book.png";
import GuideDownloadDialog from "../GuideDownloadDialog/GuideDownloadDialog";
import { ReactNode } from "react";

type HeroProps = {
  title: ReactNode;
};

export default function Hero({ title }: HeroProps) {
  return (
    <section className="grid sm:grid-cols-2 px-4 sm:px-8 py-8 min-h-[80vh] sm:min-h-[auto] max-w-[--main-width] mx-auto">
      <h1 className="text-xl sm:text-4xl font-light mb-4 sm:row-start-1 sm:row-end-2 sm:self-end">
        {title}
      </h1>

      <div className="relative h-60 sm:h-[24] md:h-[30rem] md:col-start-2 md:-col-end-2 md:row-span-2">
        <Image
          className="object-contain"
          src={bookImg}
          alt="Hero"
          fill
          sizes="(max-width:768) 80%"
          priority
        />
      </div>

      <div className="space-y-4 py-2">
        <p className="text-sm">
          We like to call it “Your Guide for Profit in 2024.” Grab every
          template, definition, and tip as a single PDF below.
        </p>

        <div className="animate-fade-right animate-once">
          <GuideDownloadDialog />
        </div>
      </div>
    </section>
  );
}
