import Image from "next/image";
import { plusJakartaSans } from "@/fonts/page";
import imageSahil from '../../assets/IMG_0278.jpeg';

export default function ImageSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-transparent">
      <div className="w-[960px] h-[540px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white flex items-center justify-center">
        <Image 
          src={imageSahil}
          className="object-cover w-full h-full"
          width={1920}
          height={1080}
          alt="Sahil Silare"
          priority
        />
      </div>
      <div className="flex flex-col w-full max-w-md text-center gap-4 mt-8">
        <p className={`text-gray-700 font-light text-lg md:text-xl ${plusJakartaSans.className}`}>
          I love to code & build awesome stuff, check out my <a href="/resume.pdf" download="resume.pdf"><span className="underline decoration-dotted">resume</span></a>
        </p>
      </div>
    </section>
  );
}
