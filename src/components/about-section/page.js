import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
export default function AboutSection() {
  return (
    <div className="flex flex-col items-center mx-auto gap-12 my-36">
        <div className="flex flex-col gap-6 align-center w-96">
        <p className={`text-center text-5xl font-bold text-black ${abhyaLibre.className} font-bold tracking-tight`}>Sahil Silare</p>
        <p className={`text-center text-2xl text-gray-600 ${plusJakartaSans.className}`}>27-year-old digital product designer, JavaScript developer and entrepreneur of sorts based in Sydney, Australia.</p>
        </div>
        <div className="flex flex-row items-center gap-4">
            <ArrowIcon/>
            <p className={`text-black text-lg font-semibold ${plusJakartaSans.className}`}>
            Get in touch
            </p>
        </div>
    </div>
  );
}
