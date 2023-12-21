'use client'
import React, { useState } from 'react'
import MusicContext from "@/musicContext";

export default function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (<MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
    {children}
  </MusicContext.Provider>)
}
