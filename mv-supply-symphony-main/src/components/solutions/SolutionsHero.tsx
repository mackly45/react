import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const SolutionsHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')"
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 relative z-20 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Solutions Innovantes pour votre Entreprise
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Des solutions sur mesure pour optimiser votre chaîne logistique et accélérer votre croissance
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          Découvrir nos solutions
        </Button>
      </motion.div>
    </section>
  );
};