import AboutSection from "@/components/about-section/page";
import NavBar from "@/components/navbar/page";
import ImageSection from "@/components/image-section/page";
import IntroductionSection from "@/components/introduction-section/page";
import Footer from "@/components/footer/page";
export default function Home() {
  return (      
  <>
    <main className="container mx-auto">
    <NavBar/>
    <section id="about">
      <AboutSection/>
      <ImageSection/>
      </section>
{/* <section id="work">
      <WorkSection/>
      </section> */}
      <IntroductionSection/>
      <Footer/>
    </main>
    </>
  );
}
