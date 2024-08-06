import Image from "next/image";
import AboutSection from "@/components/about-section/page";
import NavBar from "@/components/navbar/page";
import ImageSection from "@/components/image-section/page";
import WorkSection from "@/components/work-section/page";
import IntroductionSection from "@/components/introduction-section/page";
import Footer from "@/components/footer/page";
export default function Home() {
  return (      
  <>
    <main className="container mx-auto">
    <NavBar/>
      <AboutSection/>
      <ImageSection/>
      <WorkSection/>
      <IntroductionSection/>
      <Footer/>
    </main>
    </>
  );
}
