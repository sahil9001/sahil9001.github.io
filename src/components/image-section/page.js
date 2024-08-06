import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import imageSahil from '../../assets/IMG_0278.png';
export default function ImageSection() {
  return (
    <div className="flex flex-col items-center mx-16 my-36 gap-36">
        <Image 
        src={imageSahil}
        className="rounded-lg"
        loading="eager"
        />
        <div className="w-[580px]">
        <p className={`text-black font-light text-2xl text-center ${inter.className}`}>
        I help companies elevate their experiences through their brand, websites and products by taking their awesome ideas from concept to launch.
        </p>
        </div>
    </div>
  );
}
