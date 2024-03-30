"use client";

import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton, useSession } from '@clerk/nextjs';
import React, { useState } from 'react'

function Header() {
  const [toggle, setToggle] = useState(false)
  
    return (
      <>
      <header className="flex bg-white h-20 sticky top-0 z-[200] shadow headtrans">
        <ul className="w-full flex gap-4 lg:gap-14 items-center text-darkpurple lg:text-base text-sm font-vfont font-bold">
          <li><img onClick={() => setToggle(!toggle)} src="red-hamburger.png" alt="" className="h-20 w-20 flex sm:hidden object-contain cursor-pointer duration-300 active:rotate-90" /></li>
          <li><a href="/"><img src="venom-logo2updated.png" alt="" className="h-20 w-20 flex object-contain cursor-pointer" /></a></li>
          <li><a className="hidden sm:flex duration-300 hover:opacity-60" href="/news">News</a></li>
          <li><a className="hidden sm:flex duration-300 hover:opacity-60" href="/schedule">Schedule</a></li>
          <li><a className="hidden sm:flex duration-300 hover:opacity-60" href="/roster">Roster</a></li>
          <li><a className="hidden sm:flex duration-300 hover:opacity-60" href="/stats">Stats</a></li>
          <li><a className="hidden sm:flex duration-300 hover:opacity-60" href="/coaches">Coaches</a></li>
          <li><a className="hidden sm:flex duration-300 hover:opacity-60" href="/about">About Us</a></li>
          <li><a className="hidden sm:flex duration-300 hover:opacity-60" href="/contact">Contact Us</a></li>
        </ul>
        <div className='flex items-center w-32 font-vfont text-red-500 hover:text-red-200 cursor-pointer'>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </header>
      
      <div className={`sticky top-[5rem] left-0 z-[200] transition-transform hamdroptrans ${toggle ? "translate-x-0": "translate-x-[-12rem]"}`}>
        <ul className='bg-gray-300 rounded-br-md gap-2 list-none h-52 w-40 overflow-hidden pl-2 pt-2 absolute '>  
          <li className=""><a className="text-vred font-vfont duration-300 hover:text-red-500 hover:pl-4 " href="/news">News</a></li>
          <li className=""><a className="text-vred font-vfont duration-300 hover:text-red-500 hover:pl-4 " href="/schedule">Schedule</a></li>
          <li className=""><a className="text-vred font-vfont duration-300 hover:text-red-500 hover:pl-4 " href="/roster">Roster</a></li>
          <li className=""><a className="text-vred font-vfont duration-300 hover:text-red-500 hover:pl-4 " href="/stats">Stats</a></li>
          <li className=""><a className="text-vred font-vfont duration-300 hover:text-red-500 hover:pl-4 " href="/coaches">Coaches</a></li>
          <li className=""><a className="text-vred font-vfont duration-300 hover:text-red-500 hover:pl-4 " href="/about">About Us</a></li>
          <li className=""><a className="text-vred font-vfont duration-300 hover:text-red-500 hover:pl-4 " href="/contact">Contact Us</a></li>
        </ul>
      </div>  
      </>
    )
}

export default Header