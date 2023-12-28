import React from 'react'

export default function VideoBg({isbgvideo}:{isbgvideo:boolean}) {
  return <video
  src="/main.mp4"
  autoPlay
  muted={isbgvideo ? false : true}
  loop
  className="absolute w-screen h-screen object-cover"
/>
}
