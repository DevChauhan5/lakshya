import React from 'react'
import EventCard from '@/components/ui/EventCard'

export default function SportsGymnasium() {
  const images = [
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    'https://nextui-docs-v2.vercel.app/images/album-cover.png',
  ];
  return (
    <>
    <h1 className='px-[1.8em] text-5xl md:text-6xl font-bold text-center pt-20 md:pt-6 tracking-wide'>Sports & Gymnasium Events</h1>
    <div className='flex flex-wrap items-center justify-center gap-4 pt-6 md:pt-6'>
      {images.map((image, i) => {
        return (
          <EventCard
            key={i}
            image={image}
          />
        )
      })}
    </div>
  </>
  )
}
