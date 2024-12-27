import { motion } from "framer-motion";
import { Database, Server, Truck, Package, Cog, Globe } from "lucide-react";

const solutions = [
  {
    icon: <Database className="w-12 h-12" />,
    title: "Gestion des Données",
    description: "Solutions de gestion et d'analyse de données pour optimiser vos opérations"
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "Infrastructure Cloud",
    description: "Infrastructure cloud sécurisée et évolutive pour vos besoins"
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Logistique Intelligente",
    description: "Optimisation des flux logistiques avec l'IA et le machine learning"
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: "Gestion des Stocks",
    description: "Solutions avancées de gestion des stocks et des entrepôts"
  },
  {
    icon: <Cog className="w-12 h-12" />,
    title: "Automatisation",
    description: "Automatisation des processus pour une efficacité maximale"
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Solutions Globales",
    description: "Solutions intégrées pour votre développement international"
  }
];

export const SolutionsGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Nos Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions innovantes adaptées à vos besoins spécifiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-6">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};