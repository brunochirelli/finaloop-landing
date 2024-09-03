import Header from "@/components/Header/Header";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="" style={{ maxWidth: "90rem", margin: "0 auto" }}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
