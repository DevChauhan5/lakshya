import React from 'react';
import { gsap } from 'gsap';
import Card from '@/components/ui/Card'
import Link from 'next/link';


const EventCards = () => {
  const events = [
    {
      url: "/events/1.gif",
      title: "Cultural",
      id: 1,
      href: "/cultural"
    },
    {
      url: "/events/2.gif",
      title: "E-Sports",
      id: 2,
      href: "/e-sports"
    },
    {
      url: "/events/3.gif",
      title: "Fun & Knowledge",
      id: 3,
      href: "/fun-knowledge"
    },
    {
      url: "/events/4.gif",
      title: "Sports & Gymnasium",
      id: 4,
      href: "/sports-gymnasium"
    },
  ];

  return (
    <section className='bg-black flex flex-col md:flex-row gap-4 p-4'>
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
    </section>
  );
};

export default EventCards;