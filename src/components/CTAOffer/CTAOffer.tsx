import Image from "next/image";
import reportMobileImg from "@/assets/images/report-mobile.png";
import reportDesktopImg from "@/assets/images/report-desktop.png";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTAOffer() {
  return (
    <section className="space-y-4 p-8 sm:p-16">
      <h2 className="text-2xl sm:text-4xl font-light text-center">
        Get ecommerce accounting software <br />
        <span className="text-primary">that never slows you down</span>
      </h2>
      <Image
        src={reportMobileImg}
        alt="Finaloop card"
        className="sm:hidden intersect:animate-fade-up"
      />
      <Image
        src={reportDesktopImg}
        alt="Finaloop card"
        className="hidden sm:block intersect:animate-fade-up"
      />
      <div className="text-center space-y-4">
        <div className="mb-2 text-center flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <div className="intersect:animate-jump intersect:animate-once intersect:animate-delay-500">
            <Button size="lg">
              <Link href="https://home.finaloop.com/signup">
                Start Free Trial
              </Link>
            </Button>
          </div>
          <div>
            <Button size="lg" variant="outline">
              Book A Demo
            </Button>
          </div>
        </div>
        <small className="block">14 days free. No credit card required</small>
      </div>
    </section>
  );
}
