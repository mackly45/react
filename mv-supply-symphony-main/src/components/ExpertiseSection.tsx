import { motion } from "framer-motion";
import { Briefcase, Building2, LineChart, TrendingUp, Ship, Truck, Package, Globe } from "lucide-react";

const expertises = [
  {
    icon: <Ship className="w-8 h-8" />,
    title: "Transport Maritime",
    description:
      "Solutions de transport maritime international, gestion des conteneurs, et optimisation des routes maritimes.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Transport Routier",
    description:
      "Services de transport routier local et international, avec suivi en temps réel de vos marchandises.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Logistique & Stockage",
    description:
      "Solutions complètes de stockage et de gestion des entrepôts avec systèmes de traçabilité avancés.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Import/Export",
    description:
      "Accompagnement complet dans vos démarches d'import/export, gestion douanière et conformité.",
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838"
  },
];

export const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Notre Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Notre expertise est notre force. Nous développons des solutions sur mesure pour répondre à vos défis logistiques internationaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {expertises.map((expertise, index) => (
            <motion.div
              key={expertise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={expertise.image}
                  alt={expertise.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="relative p-6 bg-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="text-primary mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto -mt-12 relative z-10 border-4 border-white"
                >
                  {expertise.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-secondary">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{expertise.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};