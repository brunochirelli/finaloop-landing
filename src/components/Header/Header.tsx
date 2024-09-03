import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import finaloopLogo from "@/assets/logos/finaloop-logo.svg";
import Divider from "../ui/divider";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4 mx-8">
        <Link href="https://www.finaloop.com/" target="_blank">
          <Image src={finaloopLogo} alt="Finaloop" width={100} height={100} />
        </Link>
        <Button>Get started</Button>
      </header>
      <Divider />
    </>
  );
}
