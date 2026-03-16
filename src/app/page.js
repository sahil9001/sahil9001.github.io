import AboutSection from "@/components/about-section/page";
import NavBar from "@/components/navbar/page";
import ImageSection from "@/components/image-section/page";
import IntroductionSection from "@/components/introduction-section/page";
import Footer from "@/components/footer/page";
import AuroraBackground from "@/components/aurora-background";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <main className="container mx-auto relative z-10">
        <NavBar />
        <section id="about">
          <AboutSection />
          <ImageSection />
        </section>
        <IntroductionSection />
        <Footer />
      </main>
    </>
  );
}
