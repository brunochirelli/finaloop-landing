import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link href="https://www.finaloop.com/" target="_blank">
        Finaloop
      </Link>
      <button className="btn">Get started</button>
    </header>
  );
}
