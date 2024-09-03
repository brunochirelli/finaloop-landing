import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { AllProviders } from "@/providers";
import MainLayout from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
