import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import finaloopLogo from "@/assets/logos/finaloop-logo.svg";
import Divider from "../ui/divider";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className="sticky top-0 bg-background/30 backdrop-blur-sm !z-50">
      <header
        className={cn(
          "flex justify-between items-center p-4 max-w-[--main-width] mx-auto",
        )}
      >
        <Link href="https://www.finaloop.com/" target="_blank">
          <Image src={finaloopLogo} alt="Finaloop" width={100} height={100} />
        </Link>
        <Button>Get started</Button>
      </header>
      <Divider />
    </div>
  );
}
