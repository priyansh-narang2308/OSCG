import AboutUs from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";
import SpeakersSection from "@/components/speakers-section";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutUs />
      <ProjectsSection />
      <SpeakersSection />
    </div>
  );
}
