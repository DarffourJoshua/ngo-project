"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-between sm:mx-20 p-2 border-b-2 bg-gray-100 sticky top-0 z-50">
      <Link
        href="/"
        className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        WorldLab
      </Link>
      <nav className="hidden sm:flex sm:justify-around items-center sm:gap-4 font-semibold ">
        <Link href="#hero" className=" p-4 hover:bg-[#334155] hover:text-[#e2e8f0] rounded-xl m-2 cursor-pointer duration-300">
          Home
        </Link>
        <Link href="#about" className=" p-4 hover:bg-[#334155] hover:text-[#e2e8f0] rounded-xl m-2 cursor-pointer duration-300">
          About Us
        </Link>
        <Link href="#project" className=" p-4 hover:bg-[#334155] hover:text-[#e2e8f0] rounded-xl m-2 cursor-pointer duration-300">
          Projects
        </Link>
        <Link href="#contact" className=" p-4 hover:bg-[#334155] hover:text-[#e2e8f0] rounded-xl m-2 cursor-pointer duration-300">
          Contact Us
        </Link>
      </nav>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className='block sm:hidden'
        >
          {showMenu ? <MdClose /> : <RxHamburgerMenu />}
        </button>
        <nav className={
            `${showMenu
              ? "fixed sm:hidden left-0 top-0 w-[60%] h-auto border-r border-b-gray-900 bg-slate-100 ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"}`
          }>
        
        
          <div className="flex flex-col items-center justify-between gap-4 my-8">
            <Link href="#hero" onClick={() => setShowMenu(!showMenu)}>
              Home
            </Link>
            <Link href="#about" onClick={() => setShowMenu(!showMenu)}>
              About Us
            </Link>
            <Link href="#project" onClick={() => setShowMenu(!showMenu)}>
              Projects
            </Link>
            <Link href="#contact" onClick={() => setShowMenu(!showMenu)}>
              Contact Us
            </Link>
          </div>
      </nav>
    </header>
  );
}

export default Header;