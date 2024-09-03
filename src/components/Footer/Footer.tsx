import Image from "next/image";

import finaloopWhiteLogo from "@/assets/logos/finaloop-white-logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white font-extralight p-8">
      <div className="sm:flex justify-between max-w-[--main-width] mx-auto">
        <Link
          href="https://www.finaloop.com"
          target="_blank"
          className="block mb-4"
        >
          <Image src={finaloopWhiteLogo} alt="Finaloop" />
        </Link>
        <address className="not-italic opacity-60">
          <p>Finaloop, Inc.</p>
          <p>38 6th Ave</p>
          <p>Brooklyn, NY, 11217</p>
          <small className="block mt-2">Ⓒ All Rights Reserved</small>
        </address>
      </div>
    </footer>
  );
}
