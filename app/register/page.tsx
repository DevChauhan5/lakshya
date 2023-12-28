import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full h-screen">
      <div className="relative w-full md:w-1/2 h-3/4 border-1 rounded-2xl overflow-hidden border-white mt-20 md:mt-0 mx-[1.8em]">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600')" }}></div>
        <Link href="https://docs.google.com/forms/d/178Vl9c5vtdgr6NZF9AVtYfypy9gJ6NS_1EiikqFIH8c/edit?usp=drivesdk" className="text-center w-full h-full flex items-center justify-center relative"
        target='_blank'
        >
          <h1 className="text-5xl text-white">Register for Lakshya&apos;24</h1>
        </Link>
      </div>
      <div className="relative w-full md:w-1/2 h-3/4 border-1 border-white rounded-2xl overflow-hidden mx-[1.8em] mt-4 md:mt-0">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/10458835/pexels-photo-10458835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
        <Link href="https://docs.google.com/forms/d/1m1xn6zBuj0gEylTUSsbmYwmo2UxPJYVz-X-VS37opZc/edit?usp=drivesdk" className="text-center w-full h-full flex items-center justify-center relative"
        target='_blank'
        >
          <h1 className='text-5xl text-white'>Register Your Team</h1>
        </Link>
      </div>
    </div>
  )
}

export default Page