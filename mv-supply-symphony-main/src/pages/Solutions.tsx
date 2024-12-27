import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { SolutionsFeatures } from "@/components/solutions/SolutionsFeatures";
import { SolutionsTestimonials } from "@/components/solutions/SolutionsTestimonials";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsFeatures />
      <SolutionsTestimonials />
      <SolutionsCTA />
      <Footer />
    </div>
  );
};

export default Solutions;