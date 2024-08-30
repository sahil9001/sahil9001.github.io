'use client'
import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const handleGetInTouch = () => {
    const email = 'sahilsilare@gmail.com';
    const subject = encodeURIComponent('Get in Touch');
    const body = encodeURIComponent('Hello, I would like to get in touch with you.');
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`; 
    return mailtoLink;
  }
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-auto gap-12 my-12 sm:my-24 md:my-36">
      <div className="flex flex-col gap-6 text-center w-full max-w-xs sm:max-w-md md:max-w-lg">
        <p className={`text-3xl sm:text-4xl md:text-5xl font-bold text-black ${abhyaLibre.className} tracking-tight`}>
          Sahil Silare
        </p>
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-600 ${plusJakartaSans.className}`}>
          23-year-old software engineer, JavaScript developer and entrepreneur of sorts based in Bengaluru, India.
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
      <a href="/resume.pdf" 
  download="resume.pdf">
      <div className="flex cursor-pointer flex-row items-center gap-2">
        <ArrowIcon />
        <p className={`text-base sm:text-lg md:text-xl text-black font-semibold ${plusJakartaSans.className}`}>
          Download Resume
        </p>
      </div>
      </a>
      <a href={handleGetInTouch()} >
      <div className="flex cursor-pointer flex-row items-center gap-2">
        <ArrowIcon />
        <p className={`text-base sm:text-lg md:text-xl text-black font-semibold ${plusJakartaSans.className}`}>
          Get in touch
        </p>
      </div>
      </a>
      
      </div>
    </div>
  );
}
