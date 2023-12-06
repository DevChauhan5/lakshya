'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

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
    <nav>
      <div className="md:hidden flex justify-between items-center bg-black fixed w-full top-0 z-20 p-4 px-[2em]">
        <h1 className={`${bebas.className} text-2xl`}>Lakshya'24</h1>
        <div className="cursor-pointer" onClick={()=> setNavisOpen(!navisOpen)}>
        {
          navisOpen ? <RxCross1 size={20} /> : <RxHamburgerMenu size={20} />
        }
        </div>
      </div>
      <div className={`fixed ${navisOpen ? 'left-0' : '-left-[380px] w-0'} block w-full bg-white md:w-[350px] min-w-[200px] z-10 top-0 pt-16 md:pt-0 right-auto text-left h-full max-h-screen bottom-auto justify-between transition-all duration-300 ease-in-out delay-150`}>
        <div className="flex flex-col items-start justify-center text-left space-y-6 gap-4 pt-[2em] px-[2em] pb-p[2em]">
          {links.map((link) => (
            <Link
              className="text-5xl md:text-3xl text-black p-0 hover:bg-black hover:text-white hover:tracking-widest duration-200 transition-all ease-in delay-75"
              href={link.href}
              key={link.name}
              onClick={() => setNavisOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block text-black select-none opacity-50 pt-[5em] px-[2em] pb-p[2em] text-sm">
          <p>© Copyright 2023 Poornima University</p>
        </div>
      </div>
      <div
        className={`cursor-pointer h-full w-14 fixed top-0 ${navisOpen ? "left-[350px] " : "left-0"} z-20 hidden bg-black text-white md:flex flex-col items-center justify-between pt-[2em] pb-[2em] transition-all duration-300 ease-in-out delay-150`}
        onClick={() => setNavisOpen(!navisOpen)}
      >
        <img
          src="https://t3.ftcdn.net/jpg/01/13/70/24/360_F_113702442_L9YmmYcQQqyAqTsewyQuBIsqIfmIdhVp.jpg" alt="Lakshya Logo"
          className="w-8 h-8 rounded-full" />
        {
          navisOpen ? (
            <GoArrowLeft
              size={20}
            />
          ) : (
            <RxHamburgerMenu
              size={20}
            />
          )
        }
        <h1
          className={`${bebas.className} text-2xl -rotate-90 mb-7 select-none`}
        >
          Lakshya'24
        </h1>
      </div>
    </nav>
  )
}