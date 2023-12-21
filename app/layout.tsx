import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/footnav/Navbar'
import Footer from '@/components/footnav/Footer'
import Credit from '@/components/addons/Credit'
import Cursor from '@/components/addons/Cursor'
import { Providers } from './providers'
import MusicPlayer from '@/components/addons/MusicPlayer'
import MusicProvider from '@/components/addons/MusicProvider'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Lakshya'24 | Poornima University",
  description: 'Lakshya, the annual fest of Poornima University.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bebas.className} cursor-none scroll-smooth bg-black text-white no-scrollbar`}>
        <Providers>
          <MusicProvider>
          <Cursor />
          <Navbar />
          <div className="dark md:w-[96.5%] md:absolute z-0 md:right-0 bg-black">
            {children}
            <Footer />
            <Credit />
          </div>
          <MusicPlayer />
          </MusicProvider>
        </Providers>
      </body>
    </html>
  )
}
