"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between text-xs sm:text-lg p-2 border-b-2 bg-gray-100 sticky top-0 z-50">
      <Link
        href="/"
        className="flex items-center h-10 px-10 bg-gradient-to-r from-lime-900 via-lime-600 to-lime-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        WorldLab
      </Link>
      <nav className="hidden sm:flex sm:justify-around items-center sm:gap-4 text-xs sm:text-sm font-semibold ">
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
          className={`block md:hidden`}
        >
          {showMenu ? <MdClose /> : <RxHamburgerMenu />}
        </button>
        <nav className={
            `${showMenu
              ? "fixed sm:hidden left-0  w-[60%] h-auto border rounded-xl border-r-lime-600 border-b-lime-600 bg-[#f7fee7] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed left-[-100%]"}`
          }>
        
        
          <div className="flex flex-col items-center justify-between gap-4 my-8">
            <Link href="#hero" className="border-b-4 border-b-lime-600" onClick={() => setShowMenu(!showMenu)}>
              Home
            </Link>
            <Link href="#about" className="border-b-4 border-b-lime-600" onClick={() => setShowMenu(!showMenu)}>
              About Us
            </Link>
            <Link href="#project" className="border-b-4 border-b-lime-600" onClick={() => setShowMenu(!showMenu)}>
              Projects
            </Link>
            <Link href="#contact" className="border-b-4 border-b-lime-600" onClick={() => setShowMenu(!showMenu)}>
              Contact Us
            </Link>
          </div>
      </nav>
    </header>
  );
}

export default Header;