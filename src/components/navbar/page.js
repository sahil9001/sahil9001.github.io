import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";

export default function NavBar() {
  return (
    <nav className="px-16 py-12">
      <div className="flex flex-row justify-between">
        <p className={`text-black text-base font-bold ${inter.className}`}>Sahil Silare</p>
        <ul className="flex flex-row gap-12">
          <li>
            <a href="/work" className={`text-black text-lg ${abhyaLibre.className}`}>
              Work
            </a>
          </li>
          <li>
            <a href="/about" className={`text-black text-lg ${abhyaLibre.className}`}>
              About
            </a>
          </li>
          <li>
            <a href="/experience" className={`text-black text-lg ${abhyaLibre.className}`}>
              Experience
            </a>
          </li>
          <li>
            <a href="/contact" className={`text-black text-lg ${abhyaLibre.className}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
