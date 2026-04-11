"use client";
import { cormorant, dmMono } from "@/fonts/page";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-4 h-4" />;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="transition-colors duration-300 focus:outline-none"
      style={{ color: "var(--text-secondary)" }}
      onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
      onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 transition-all duration-500"
        style={{
          zIndex: 50,
          padding: "1.25rem 3.5rem",
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
      >
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
          <a
            href="#"
            className={`${cormorant.className} text-2xl font-light tracking-wide transition-colors duration-300`}
            style={{ color: "var(--text-primary)" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-primary)"}
          >
            Sahil Silare
          </a>

          <ul className={`hidden md:flex flex-row gap-10 items-center ${dmMono.className}`}>
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-xs tracking-[0.22em] uppercase transition-colors duration-300 group"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "var(--accent)" }}
                  />
                </a>
              </li>
            ))}
            <li><ThemeToggle /></li>
          </ul>

          <div className="md:hidden flex items-center gap-5">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors focus:outline-none"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 md:hidden transition-all duration-500"
        style={{
          zIndex: 60,
          backgroundColor: "var(--bg)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col h-full px-8 pt-8 pb-12">
          <div className="flex justify-between items-center mb-16">
            <span className={`${cormorant.className} text-2xl font-light`} style={{ color: "var(--text-primary)" }}>
              Sahil Silare
            </span>
            <button onClick={() => setIsOpen(false)} style={{ color: "var(--text-secondary)" }} className="focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className={`flex flex-col gap-8 ${dmMono.className}`}>
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-5">
                  <span className="text-xs" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                  <span className="text-2xl tracking-wide font-light" style={{ color: "var(--text-primary)", fontFamily: "inherit" }}>
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className={`mt-auto ${dmMono.className} text-xs tracking-[0.2em] uppercase`} style={{ color: "var(--text-secondary)" }}>
            Software Developer · Adobe
          </div>
        </div>
      </div>
    </>
  );
}
