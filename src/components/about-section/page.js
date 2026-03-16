'use client';
import { abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleGetInTouch = () => {
    const email = 'sahilsilare@gmail.com';
    const subject = encodeURIComponent('Get in Touch');
    const body = encodeURIComponent('Hello, I would like to get in touch with you.');
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-32 px-4 md:px-0">
      <div className="flex flex-col gap-8 text-center w-full max-w-2xl">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight ${abhyaLibre.className}`}>Sahil Silare</h1>
        <p className={`text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-normal ${plusJakartaSans.className}`}>24-year-old software engineer, JavaScript developer and entrepreneur of sorts based in Bengaluru, India.</p>
      </div>
      <div className="flex flex-row items-center gap-6 mt-10">
        <a href="/resume.pdf" download="resume.pdf">
          <button className="flex flex-row items-center gap-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-150">
            <ArrowIcon currentColor={isDark ? "#000" : "#fff"} width="18" height="18" />
            Download Resume
          </button>
        </a>
        <a href={handleGetInTouch()}>
          <button className="flex flex-row items-center gap-2 px-6 py-3 rounded-full border-2 border-black dark:border-white/40 text-black dark:text-white font-semibold text-lg bg-white dark:bg-transparent shadow-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-150">
            <ArrowIcon currentColor={isDark ? "#fff" : "#000"} width="18" height="18" />
            Get in touch
          </button>
        </a>
      </div>
    </section>
  );
}
