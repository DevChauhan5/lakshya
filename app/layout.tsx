import type { Metadata } from 'next'
import { Bebas_Neue} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/footnav/Navbar'
import Footer from '@/components/footnav/Footer'
import MusicPlayer from '@/components/addons/MusicPlayer'
import Credit from '@/components/addons/Credit'

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
      <body className={`${bebas.className} scroll-smooth bg-black text-white`}>
      <Navbar />
        <div className="md:w-[96.5%] md:absolute z-0 md:right-0">
          {children}
          <Footer />
          <Credit />
        </div>
        <MusicPlayer />
      </body>
    </html>
  )
}
