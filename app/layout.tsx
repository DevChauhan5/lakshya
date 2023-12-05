import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/footnav/Navbar'
import Footer from '@/components/footnav/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} scroll-smooth bg-black text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
