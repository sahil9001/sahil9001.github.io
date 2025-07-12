"use client";
import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-6 bg-white/80 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Name */}
        <p className={`text-black text-2xl md:text-3xl font-extrabold tracking-tight ${abhyaLibre.className}`}>Sahil Silare</p>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-row gap-12">
          <li>
            <a href="#about" className={`text-gray-800 text-lg font-medium hover:text-black transition-colors ${plusJakartaSans.className}`}>About</a>
          </li>
          <li>
            <a href="#experience" className={`text-gray-800 text-lg font-medium hover:text-black transition-colors ${plusJakartaSans.className}`}>Experience</a>
          </li>
          <li>
            <a href="#work" className={`text-gray-800 text-lg font-medium hover:text-black transition-colors ${plusJakartaSans.className}`}>Work</a>
          </li>
          <li>
            <a href="#contact" className={`text-gray-800 text-lg font-medium hover:text-black transition-colors ${plusJakartaSans.className}`}>Contact</a>
          </li>
        </ul>
        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center gap-8 transition-all md:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center gap-6 mt-12">
            <li>
              <a href="#about" className={`text-black text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#experience" className={`text-black text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Experience</a>
            </li>
            <li>
              <a href="#work" className={`text-black text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Work</a>
            </li>
            <li>
              <a href="#contact" className={`text-black text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
