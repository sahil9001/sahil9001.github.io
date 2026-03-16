"use client";
import { abhyaLibre, plusJakartaSans } from "@/fonts/page";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Render nothing until mounted to avoid SSR/hydration icon flash
  if (!mounted) return <div className="w-5 h-5" />;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-6 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-100 dark:border-white/10">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Name */}
        <p className={`text-black dark:text-white text-2xl md:text-3xl font-extrabold tracking-tight ${abhyaLibre.className}`}>Sahil Silare</p>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-row gap-12 items-center">
          <li>
            <a href="#about" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>About</a>
          </li>
          <li>
            <a href="#experience" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>Experience</a>
          </li>
          <li>
            <a href="#work" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>Work</a>
          </li>
          <li>
            <a href="#contact" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>Contact</a>
          </li>
          <li><ThemeToggle /></li>
        </ul>
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 dark:bg-black/95 z-[60] flex flex-col items-center justify-center gap-8 transition-all md:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-black dark:text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center gap-6 mt-12">
            <li>
              <a href="#about" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#experience" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Experience</a>
            </li>
            <li>
              <a href="#work" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Work</a>
            </li>
            <li>
              <a href="#contact" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Contact</a>
            </li>
            <li><ThemeToggle /></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
