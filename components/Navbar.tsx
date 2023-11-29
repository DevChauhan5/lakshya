import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-4 left-1/2 transform -translate-x-1/2 w-2/5 rounded-2xl bg-opacity-40 backdrop-blur-3xl bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center items-center rounded-lg">
        <div className="flex space-x-6 text-xl">
          <Link href="#about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/team">Our Team</Link>
        </div>
      </div>
    </nav>
  );
}