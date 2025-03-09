import Image from "next/image";
import { plusJakartaSans } from "@/fonts/page";
import imageSahil from '../../assets/IMG_0278.jpeg';

export default function ImageSection() {
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-16 my-12 sm:my-24 md:my-36 gap-12 sm:gap-24 md:gap-36">
      <Image 
          src={imageSahil}
          className="rounded-lg w-full h-auto"
          layout="responsive"
          loading="lazy"
          alt="Sahil Silare"
        />
      <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-md text-center gap-4">
        <p className={`text-black font-light text-base sm:text-lg md:text-xl ${plusJakartaSans.className}`}>
          I love to code & build awesome stuff, check out my <a href="/resume.pdf" 
  download="resume.pdf"><span className="underline decoration-dotted">resume</span></a>
        </p>
      </div>
    </div>
  );
}
