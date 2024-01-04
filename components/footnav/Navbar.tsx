'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})

export default function Navbar() {
  const [navisOpen, setNavisOpen] = useState(false)
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
      name: "Events",
      href: "/#events",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Gallery",
      href: "/#gallery",
    },
    // {
    //   name: "Sponsors",
    //   href: "/#sponsors",
    //},
    // {
    //   name: "Our Team",
    //   href: "/#ourteam",
    // },
  ];

  return (
    <nav className="w-screen ">
      <div className="shadow-md shadow-violet-500 flex md:hidden justify-between items-center bg-black fixed w-screen top-0 z-[67] py-3 px-[2em]">
        <h1 className={`text-2xl`}>Lakshya&apos;24</h1>
        <div className="cursor-pointer" onClick={()=> setNavisOpen(!navisOpen)}>
        {
          navisOpen ? <RxCross1 size={20} /> : <RxHamburgerMenu size={20} />
        }
        </div>
      </div>
      <div className={`${navisOpen ? 'left-0' : '-left-[780px]'} fixed w-screen bg-white md:w-[350px] z-[66] top-0 pt-16 md:pt-0 text-left h-full justify-between transition-all duration-300 ease-in-out delay-150`}>
        <div className={`flex  flex-col items-start justify-center text-left space-y-4 gap-4 pt-[2em] px-[2em] pb-p[2em] duration-200 transition-all ease-in delay-75`}>
          {links.map((link) => (
            <Link
              className="text-5xl md:text-4xl text-black w-full p-2 hover:bg-black hover:text-white hover:tracking-[0.5em] hover:text-center rounded-md duration-200 transition-all ease-in delay-75"
              href={link.href}
              key={link.name}
              onClick={() => setNavisOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block text-black select-none opacity-50 pt-[4em] px-[1.8em] pb-p[2em] text-lg">
          <p>© Copyright 2023 Poornima University</p>
        </div>
      </div>
      <div
        className={`shadow-xl shadow-purple-600  cursor-pointer h-full w-[3.5%] fixed top-0 ${navisOpen ? "close left-[350px] shadow-none" : "left-0 open"} z-[60] hidden bg-black text-white md:flex flex-col items-center justify-between pt-[2em] pb-[2em] transition-all duration-300 ease-in-out delay-150`}
        onClick={() => setNavisOpen(!navisOpen)}
      >
        <Image
          src="/nav-icon.png"
          alt="Lakshya Logo"
          width={40}
          height={40}
          className="rounded-full" />
        {
          navisOpen ? (
            <GoArrowLeft
              size={20}
            />
          ) : (
            <GoArrowRight
              size={20}
            />
          )
        }
        <h1
          className={`${bebas.className} text-2xl -rotate-90 mb-7 select-none`}
        >
          Lakshya&apos;24
        </h1>
      </div>
    </nav>
  )
}