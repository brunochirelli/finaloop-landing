"use client";

import { ReactNode } from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
