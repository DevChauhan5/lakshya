import React from 'react';
import { gsap } from 'gsap';
import Card from '@/components/ui/Card'
import Link from 'next/link';


const EventCards = () => {
  const events = [
    {
      url: "/events/1.mp4",
      title: "Cultural",
      id: 1,
      href: "/cultural"
    },
    {
      url: "/events/2.mp4",
      title: "E-Sports",
      id: 2,
      href: "/e-sports"
    },
    {
      url: "/events/3.mp4",
      title: "Fun & Knowledge",
      id: 3,
      href: "/fun-knowledge"
    },
    {
      url: "/events/4.mp4",
      title: "Sports & Gymnasium",
      id: 4,
      href: "/sports-gymnasium"
    },
  ];

  return (
    <section id="events">
    <h1 className='text-7xl tracking-wide my-6 text-center'>Events</h1>
    <main  className='bg-black flex flex-col items-center justify-center lg:flex-row gap-4 p-4 px-[1.8em]'>
      {events.map((event) => {
        return(
          <Card
          key={event.id}
          src={event.url}
          title={event.title}
          href={event.href}
        />
        )
      })}
    </main>
    </section>
  );
};

export default EventCards;