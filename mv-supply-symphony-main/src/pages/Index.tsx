import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ApproachSection } from "@/components/ApproachSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { Footer } from "@/components/Footer";
import { ImageGrid } from "@/components/ImageGrid";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ImageGrid />
      <ExpertiseSection />
      <ValuesSection />
      <ApproachSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
};

export default Index;