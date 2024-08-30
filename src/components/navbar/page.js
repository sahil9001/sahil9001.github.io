"use client";
import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 py-4 md:px-16 md:py-12">
      <div className="flex flex-row justify-between items-center">
        <p className={`text-black text-base font-bold ${inter.className}`}>Sahil Silare</p>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        {/* <ul className="hidden md:flex md:flex-row md:gap-12">
          <li>
            <a href="#about" className={`text-black text-lg ${abhyaLibre.className}`}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className={`text-black text-lg ${abhyaLibre.className}`}>
              Experience
            </a>
          </li>
          <li>
            <a href="#work" className={`text-black text-lg ${abhyaLibre.className}`}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className={`text-black text-lg ${abhyaLibre.className}`}>
              Contact
            </a>
          </li>
        </ul> */}
      </div>
      {/* <div
        className={`fixed inset-0 bg-white z-10 flex flex-col items-center justify-center gap-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-4">
          <li>
            <a href="#about" className={`text-black text-lg ${abhyaLibre.className}`}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className={`text-black text-lg ${abhyaLibre.className}`}>
              Experience
            </a>
          </li>
          <li>
            <a href="#work" className={`text-black text-lg ${abhyaLibre.className}`}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className={`text-black text-lg ${abhyaLibre.className}`}>
              Contact
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
