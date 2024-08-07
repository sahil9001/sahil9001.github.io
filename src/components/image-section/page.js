import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import imageSahil from '../../assets/IMG_0278.png';

export default function ImageSection() {
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-16 my-12 sm:my-24 md:my-36 gap-12 sm:gap-24 md:gap-36">
      <Image 
          src={imageSahil}
          className="rounded-lg w-full h-auto"
          layout="responsive"
          loading="eager"
          alt="Sahil Silare"
        />
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md text-center">
        <p className={`text-black font-light text-base sm:text-lg md:text-xl ${plusJakartaSans.className}`}>
          I help companies elevate their experiences through their brand, websites and products by taking their awesome ideas from concept to launch.
        </p>
      </div>
    </div>
  );
}
