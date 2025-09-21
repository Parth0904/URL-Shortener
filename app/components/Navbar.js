"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-purple-700 text-white px-4 py-3 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" onClick={closeMenu}>BitLinks</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          <Link href="/" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">Home</li></Link>
          <Link href="/about" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">About</li></Link>
          <Link href="/shorten" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">Shorten</li></Link>
          <Link href="/contact" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">Contact Us</li></Link>
          <li className="flex gap-3">
            <Link href="/shorten" onClick={closeMenu}>
              <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition">
                Try Now
              </button>
            </Link>
            <Link href="/github" onClick={closeMenu}>
              <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-600 mt-2 rounded-lg shadow-lg flex flex-col gap-2 p-4">
          <Link href="/" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">Home</li></Link>
          <Link href="/about" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">About</li></Link>
          <Link href="/shorten" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">Shorten</li></Link>
          <Link href="/contact" onClick={closeMenu}><li className="hover:text-gray-200 cursor-pointer">Contact Us</li></Link>
          <div className="flex gap-3 mt-2">
            <Link href="/shorten" onClick={closeMenu}>
              <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition">
                Try Now
              </button>
            </Link>
            <Link href="/github" onClick={closeMenu}>
              <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold hover:bg-purple-600 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
