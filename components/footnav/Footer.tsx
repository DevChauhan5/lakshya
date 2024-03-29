'use client'

import { Divider } from '@nextui-org/react';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {
  const linkContainerRef = useRef<HTMLDivElement | null>(null);
  const quicklinkContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const linkContainer = linkContainerRef.current;
    const quicklinkContainer = quicklinkContainerRef.current;

    if (linkContainer) {
      gsap.to(linkContainer, {
        scrollLeft: linkContainer.scrollWidth - linkContainer.clientWidth,
        duration: 16,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (quicklinkContainer) {
      gsap.to(quicklinkContainer, {
        scrollLeft: quicklinkContainer.scrollWidth - quicklinkContainer.clientWidth,
        duration: 50,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className='flex flex-col items-center justify-center px-[2em] py-[1em]border-white overflow-hidden'>
      <Divider className='mt-12 bg-white'/>
      <main className="flex flex-col lg:flex-row items-center justify-between ">
        <div className='flex flex-col items-center justify-center mt-16 md:mx-12 h-fit w-fit'>
          <h1 className="text-7xl md:text-9xl tracking-wide font-bold">Lakshya&apos;24</h1>
          <p className="text-2xl">Annual Fest of Poornima University.</p>
        </div>
        {/* </div> */}
        <div className='flex flex-col items-center justify-around gap-4 my-8  md:mx-12'>
          <div className='flex flex-col text-center md:text-left  md:items-center p-4 md:justify-center'>
            <h1 className="text-3xl mb-6 mt-2">Contact</h1>
            <div className='flex flex-col md:flex-row '>
              <div className='text-lg mx-4 whitespace-pre-line'>
                Pranav Lata (He/Him),<br />
                +91-8905907116<br />
                Co-Chair, Students&apos; Council<br />
                Poornima University<br /><br />
              </div>
              <div className='text-lg whitespace-pre-line mx-4'>
                Shourya Mehra (She/her),<br />
                +91-8770385253<br />
                Co-Chair, Students&apos; Council<br />
                Poornima University<br />
              </div>
            </div>
          </div>
          <div className='flex flex-col text-center md:items-center md:justify-center mt-2 lg:mt-0 '>
            <h1 className="text-3xl mb-6">E-mails</h1>
            <div>
              <Link
                className='text-lg'
                href="mailto:lakshya@poornima.edu.in">✉️ - lakshya@poornima.edu.in</Link><br />
              <Link
                className='text-lg'
                href="mailto:studentscouncil@poornima.edu.in">✉️ - studentscouncil@poornima.edu.in</Link>
            </div>
          </div>
        </div>
      </main>
      <div
        ref={linkContainerRef}
        className='no-scrollbar bg-white text-black tracking-wider whitespace-nowrap flex flex-row gap-8 text-lg py-6 px-8 overflow-x-auto w-full items-center justify-center'
      >
        <Link href="/e-sports">E-Sports Events</Link>
        <Link href="/cultural">Cultural Events</Link>
        <Link href="/">Back↑top</Link>
        <Link href="/fun-knowledge">Knowledge & Fun Events</Link>
        <Link href="/sports-gymnasium">Sports & Gymnasium Events</Link>
      </div>
      <Divider className='my-4 bg-white'/>
      <div className='w-full flex flex-col text-center md:flex-row items-center justify-center md:justify-between gap-4  px-8 py-6 '>
        <h2 className=''>© Copyright 2024 Poornima University. <br />All rights reserved.</h2>
        <div className='flex gap-4'>
          <Link href='https://www.instagram.com/pulakshya/'>
            <FaInstagram className="h-8 w-8 cursor-pointer" />
          </Link>
          <Link href='https://www.youtube.com/@PoornimaUniversityTV'>
            <FiYoutube className="h-8 w-8 cursor-pointer" />
          </Link>
        </div>
      </div>
      <Divider className='mt-4 bg-white'/>
    </section >
  )
}
