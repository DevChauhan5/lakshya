'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav className="w-full flex items-center justify-around p-2 border-black shadow-md">
      <Image src="/next.svg" alt="Lakshya'24" width={100} height={100} />
      <div className="hidden lg:flex justify-center gap-4">
        <Link className="hover:font-bold" href="/#hero" onClick={handleScroll}>Home</Link>
        <Link className="hover:font-bold" href="/#days" onClick={handleScroll}>Days</Link>
        <Link className="hover:font-bold" href="/#about" onClick={handleScroll}>About</Link>
        <Link className="hover:font-bold" href="/#gallery" onClick={handleScroll}>Gallery</Link>
        <Link className="hover:font-bold" href="/#sponsors" onClick={handleScroll}>Sponsors</Link>
        <Link className="hover:font-bold" href="/#ourteam" onClick={handleScroll}>Our Team</Link>
      </div>
      <Button className="">Register Now!</Button>
    </nav>
  )
}
