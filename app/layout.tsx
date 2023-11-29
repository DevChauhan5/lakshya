import type { Metadata } from 'next'
import { Inter, Potta_One } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })
const potta = Potta_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={potta.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
