import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Comprendre et analyser",
    description:
      "Nous prenons le temps de comprendre votre contexte, vos enjeux et vos objectifs.",
  },
  {
    number: "02",
    title: "Concevoir et recommander",
    description:
      "Nous élaborons des recommandations stratégiques et opérationnelles adaptées à votre situation.",
  },
  {
    number: "03",
    title: "Planifier et organiser",
    description:
      "Nous définissons un plan d'action concret et mettons en place une organisation projet robuste.",
  },
  {
    number: "04",
    title: "Exécuter et piloter",
    description:
      "Nous pilotons la mise en œuvre du projet avec rigueur et agilité.",
  },
  {
    number: "05",
    title: "Pérenniser et accompagner",
    description:
      "Nous vous aidons à ancrer les changements dans votre organisation.",
  },
];

export const ApproachSection = () => {
  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Approche
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour garantir le succès de vos projets
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="text-4xl font-bold text-primary bg-white/10 w-16 h-16 rounded-full flex items-center justify-center"
              >
                {step.number}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};