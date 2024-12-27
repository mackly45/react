import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const SolutionsCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Optimiser Votre Business ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour découvrir comment nos solutions peuvent transformer votre entreprise
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Demander une démonstration
          </Button>
        </motion.div>
      </div>
    </section>
  );
};