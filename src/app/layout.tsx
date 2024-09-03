import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { AllProviders } from "@/providers";
import MainLayout from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finaloop: Ecommerce Accounting Software + Service",
  description:
    "Real-time ecommerce accounting software and bookkeeping services for DTC, multichannel & wholesale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="finaloop">
      <body className={inter.className}>
        <AllProviders>
          <MainLayout>{children}</MainLayout>
        </AllProviders>
      </body>
    </html>
  );
}
