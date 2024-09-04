import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import MainLayout from "@/layouts/MainLayout";
import { AllProviders } from "@/providers";

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
    <html data-theme="finaloop" lang="en">
      <body className={inter.className}>
        <AllProviders>
          <MainLayout>{children}</MainLayout>
        </AllProviders>
      </body>
    </html>
  );
}
