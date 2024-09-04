"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import crownIcon from "@/assets/icons/crown-icon.svg";
import laptopIcon from "@/assets/icons/laptop-icon.svg";
import laptopShopifyIcon from "@/assets/icons/laptop-shopify-icon.svg";

import FeatureItem from "../FeatureItem/FeatureItem";

type FeaturesProps = {
  title: string;
};

export default function Features({ title }: FeaturesProps) {
  const features = [
    {
      icon: crownIcon,
      title: "Accounting for Ecommerce Businesses",
      description:
        "Understand the basics of ecommerce accounting, methods, and financial statements & reports.",
    },
    {
      icon: laptopIcon,
      title: "Bookkeeping & Ecommerce Accounting Tasks",
      description:
        "The art of setting the right data as a foundation for the purpose of making profitable decisions.",
    },
    {
      icon: laptopShopifyIcon,
      title: "Ecommerce Accounting Software for Shopify",
      description:
        "Identify the best accounting software for your ecommerce business based on your size, budget, and the level of integrations required.",
    },
  ];

  return (
    <section className="p-8 max-w-[--main-width] mx-auto">
      <h2 className="text-center sm:text-left text-2xl sm:text-5xl font-light sm:py-10 intersect:animate-fade-right">
        {title}
      </h2>
      <div className="hidden sm:flex justify-between gap-8">
        {features.map((feature, i) => (
          <FeatureItem {...feature} key={`feature-${i}`} />
        ))}
      </div>

      <div className="sm:hidden">
        <Swiper modules={[Pagination]} pagination={true}>
          {features.map((feature, i) => (
            <SwiperSlide key={`feature-${i}`}>
              <FeatureItem {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
