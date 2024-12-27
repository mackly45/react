import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Directeur Logistique",
    company: "Global Transport SA",
    content: "Les solutions proposées par MV International ont révolutionné notre chaîne logistique. L'efficacité a été considérablement améliorée."
  },
  {
    name: "Marie Martin",
    role: "CEO",
    company: "Tech Solutions",
    content: "Un partenaire de confiance qui comprend nos besoins et propose des solutions adaptées. Excellent support et résultats remarquables."
  },
  {
    name: "Pierre Lambert",
    role: "Directeur des Opérations",
    company: "Logistics Plus",
    content: "L'expertise de MV International dans le domaine de la logistique est impressionnante. Ils ont su répondre à tous nos besoins."
  }
];

export const SolutionsTestimonials = () => {
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
            Ils Nous Font Confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de nos solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};