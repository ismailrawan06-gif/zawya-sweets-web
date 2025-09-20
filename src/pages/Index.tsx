import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DessertsSection from "@/components/DessertsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-cairo">
      <HeroSection />
      <AboutSection />
      <DessertsSection />
      <ContactSection />
    </main>
  );
};

export default Index;