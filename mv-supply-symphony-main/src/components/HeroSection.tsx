import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#2A2834] text-white relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2834] via-[#2A2834] to-[#E6423F] opacity-90" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            GLOBAL SUPPLY CHAIN MANAGEMENT
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            L'EXPERTISE GLOBALE AU SERVICE DE VOTRE RÉUSSITE
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E6423F] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Découvrir nos services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};