import React from 'react';
import { gsap } from 'gsap';
import Card from '@/components/ui/Card'


const EventCards = () => {
  const events = [
    {
      url: "/try.gif",
      title: "Cultural",
      id: 1,
      href: "/cultural"
    },
    {
      url: "/images/2.jpg",
      title: "E-Sports",
      id: 2,
      href: "/e-sports"
    },
    {
      url: "/images/3.jpg",
      title: "Fun & Knowledge",
      id: 3,
      href: "/fun-knowledge"
    },
    {
      url: "/images/4.jpg",
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