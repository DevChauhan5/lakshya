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
    <>
    <nav className=" bg-white w-3/12 h-screen max-h-screen shadow-md">
      <div className="flex flex-col items-start justify-center text-left space-y-7 gap-4 pt-[3em] px-[2em] pb-p[2em]">
        {links.map((link) => (
          <Link 
          className="text-3xl text-black p-0 hover:bg-black hover:text-white hover:tracking-widest duration-200 transition-all ease-in delay-100"
          href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* <Button className="hidden md:block">Register Now!</Button>
      <div className="md:hidden">
        <RiMenu4Fill size={30} />
      </div> */}
    </nav>
    </>
  )
}