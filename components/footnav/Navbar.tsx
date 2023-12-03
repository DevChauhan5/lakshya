'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { RiMenu4Fill } from "react-icons/ri";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/#hero",
    },
    {
      name: "Days",
      href: "/#days",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Gallery",
      href: "/#gallery",
    },
    {
      name: "Sponsors",
      href: "/#sponsors",
    },
    {
      name: "Our Team",
      href: "/#ourteam",
    },
  ];

  return (
    <nav className="w-full flex items-center justify-between p-2 border-black shadow-md">
      <Image src="/next.svg" alt="Lakshya'24" width={100} height={100} />
      <div className="hidden md:flex justify-center gap-4">
        {links.map((link) => (
          <Link href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Button className="hidden md:block">Register Now!</Button>
      <div className="md:hidden">
        <RiMenu4Fill size={30} />
      </div>
    </nav>
  )
}