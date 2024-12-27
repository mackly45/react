import { motion } from "framer-motion";
import { Check, Users, Zap, Star, Heart, Shield, Target, Award } from "lucide-react";

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans toutes nos interventions pour garantir votre satisfaction.",
    image: "/lovable-uploads/7181f067-1868-480a-94fb-1ed736df2d44.png"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description:
      "Nous croyons en la force du travail d'équipe et de la collaboration internationale.",
    image: "/lovable-uploads/66d7701b-953e-486c-8936-e6db6dac73e5.png"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Performance",
    description:
      "Nous nous engageons à atteindre les objectifs fixés avec efficacité.",
    image: "/lovable-uploads/1a558ddd-b801-4abf-adaa-44c6dc148066.png"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Fiabilité",
    description:
      "Votre confiance est notre priorité, nous assurons la sécurité de vos opérations.",
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838"
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Nos Valeurs
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos valeurs reflètent notre engagement envers l'excellence et guident chacune de nos actions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform -skew-y-6 rounded-3xl transition-all duration-300 group-hover:skew-y-0"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="text-primary mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                >
                  {value.icon}
                </motion.div>
                <div className="h-40 w-full mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};