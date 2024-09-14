"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <Link
        href="/"
        className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        WorldLab
      </Link>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <Link href="#hero">
          Home
        </Link>
        <Link href="#about">
          About Us
        </Link>
        <Link href="#project">
          Projects
        </Link>
        <Link href="#contact">
          Contact Us
        </Link>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <MdClose /> : <RxHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <Link href="#hero">
              Home
            </Link>
            <Link href="#about">
              About Us
            </Link>
            <Link href="#project">
              Projects
            </Link>
            <Link href="#contact">
              Contact Us
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;