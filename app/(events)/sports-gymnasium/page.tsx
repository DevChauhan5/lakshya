import React from 'react'
import EventCard from '@/components/ui/EventCard'
import Link from 'next/link';

export default function SportsGymnasium() {
  const posters = [
    {
      name: "Basketball (Boys)",
      image: "/sports/8.png",
      desc: "",
    },
    {
      name: "Basketball (Girls)",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "",
      image: "/sports/1.png",
      desc: "",
    },
    
  ]
  return (
    <main className='flex flex-col items-center justify-center'>
    <h1 className='px-[1.8em] text-5xl md:text-6xl font-bold text-center pt-20 md:pt-6 tracking-wide'>Sports & Gymnasium Events</h1>
    <Link 
    className='mx-[1.8em] text-xl border-white border-2 rounded-md px-14 py-3 my-8 hover:bg-white hover:text-black transition duration-300 ease-in-out tracking-wider'
    href="https://www.poornima.edu.in"
    target='_blank'
    >
      Check Rules
    </Link>
    <div className='flex flex-wrap items-center justify-center gap-4 pt-6 md:pt-6'>
      {posters.map((poster, i) => {
        return (
          <EventCard
            key={i}
            name={poster.name}
            image={poster.image}
            desc={poster.desc}
          />
        )
      })}
    </div>
  </main>
  )
}
