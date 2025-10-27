import AboutUs from "@/components/landing/about-section";
import LatestInsights from "@/components/landing/blog-section";
import FAQ from "@/components/landing/faq-section";
import Footer from "@/components/landing/footer-section";
import HeroSection from "@/components/landing/hero-section";
import Navigation from "@/components/landing/navigation";
import ProjectsSection from "@/components/landing/projects-section";
import SpeakersSection from "@/components/landing/speakers-section";
import SponsersSection from "@/components/landing/sponsors-section";
import Signup from "@/components/AuthPage/Signup";
import Signin from "@/components/AuthPage/Signin";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutUs />
      <ProjectsSection />
      <SpeakersSection />
      <SponsersSection />
      <LatestInsights />
      <FAQ />
     
      <Footer />
    </div>
  );
}
