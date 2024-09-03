import Image from "next/image";
import reportMobileImg from "@/assets/images/report-mobile.png";
import reportDesktopImg from "@/assets/images/report-desktop.png";
import { Button } from "../ui/button";

export default function CTAOffer() {
  return (
    <section className="space-y-4 p-8 sm:p-16">
      <h2 className="text-2xl sm:text-4xl font-light text-center">
        Get ecommerce accounting software <br />
        <span className="text-primary">that never slows you down</span>
      </h2>
      <Image src={reportMobileImg} alt="Finaloop card" className="sm:hidden" />
      <Image
        src={reportDesktopImg}
        alt="Finaloop card"
        className="hidden sm:block"
      />
      <div className="text-center">
        <div className="space-x-4 mb-2">
          <Button>Start Free Trial</Button>
          <Button>Book A Demo</Button>
        </div>
        <small>14 days free. No credit card required</small>
      </div>
    </section>
  );
}
