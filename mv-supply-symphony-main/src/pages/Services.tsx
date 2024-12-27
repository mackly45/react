import { motion } from "framer-motion";
import { Truck, Package, Globe, Building2, Boxes, Users, Brain, Workflow } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const services = [
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Transport & Logistique",
    description: "Solutions de transport routier, maritime et aérien adaptées à vos besoins. Suivi en temps réel et optimisation des itinéraires pour une gestion efficace.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  },
  {
    icon: <Boxes className="w-12 h-12" />,
    title: "Stockage & Gestion des Inventaires",
    description: "Entrepôts sécurisés et gestion des stocks en temps réel grâce à nos systèmes automatisés. Maximisez votre espace et réduisez vos coûts.",
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838"
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Commerce International",
    description: "Expertise en douanes, conformité réglementaire et stratégies d'import/export pour accompagner votre expansion globale.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec"
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Digitalisation des Opérations",
    description: "Intégrez des solutions numériques pour une gestion simplifiée et efficace de vos processus logistiques et administratifs.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    icon: <Workflow className="w-12 h-12" />,
    title: "Gestion de Projet",
    description: "Planification, coordination et exécution de projets complexes avec un suivi précis pour garantir le succès.",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Services Personnalisés",
    description: "Conception de solutions sur mesure pour répondre aux besoins spécifiques de chaque client, quelle que soit leur industrie.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/95">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3')"
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 relative z-20 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Des solutions logistiques intégrées pour votre succès global
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                
                <div className="p-6 relative">
                  <div className="absolute -top-10 left-6 bg-primary text-white p-4 rounded-xl shadow-lg transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary mt-6 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Pourquoi Nous Faire Confiance ?
              </h2>
              <p className="text-gray-600 mb-12">
                Notre expertise, notre engagement et notre réseau international font de nous votre partenaire idéal pour tous vos besoins logistiques.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Infrastructure Mondiale",
                  description: "Présence internationale et réseau logistique étendu"
                },
                {
                  icon: <Package className="w-8 h-8" />,
                  title: "Solutions Complètes",
                  description: "De la conception à l'exécution, nous gérons tout"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Équipe Experte",
                  description: "Professionnels qualifiés à votre service"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;