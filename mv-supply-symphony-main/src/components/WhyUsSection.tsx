import { motion } from "framer-motion";
import { Award, Globe, Lightbulb, Shield, Target } from "lucide-react";

const reasons = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expertise reconnue et multidisciplinaire",
    description:
      "Une expertise sectorielle approfondie combinée à des compétences fonctionnelles pointues.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Engagement qualité et satisfaction client",
    description:
      "Nous mettons tout en œuvre pour délivrer des prestations de haute qualité.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Agilité et adaptabilité",
    description:
      "Nous construisons avec vous la réponse la plus adaptée à votre contexte.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Réseau de partenaires international",
    description:
      "Un solide réseau de partenaires technologiques et locaux pour vous accompagner.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Culture de l'excellence et de l'innovation",
    description:
      "Nous visons en permanence le plus haut niveau de qualité et de performance.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary"
        >
          Pourquoi Nous Choisir ?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};