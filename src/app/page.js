import Image from "next/image";
import AboutSection from "@/components/about-section/page";
import NavBar from "@/components/navbar/page";
import ImageSection from "@/components/image-section/page";
export default function Home() {
  return (      
  <>
    <main className="container mx-auto">
    <NavBar/>
      <AboutSection/>
      <ImageSection/>
    </main>
    </>
  );
}
