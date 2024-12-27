import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Ship, Truck, Plane, Train, Route, Clock, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const transportServices = [
  {
    icon: <Ship className="w-12 h-12" />,
    title: "Transport Maritime",
    description: "Solutions de transport maritime international avec suivi en temps réel de vos conteneurs et optimisation des routes maritimes.",
    features: ["Fret maritime", "Gestion des conteneurs", "Routes optimisées", "Suivi en temps réel"],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3"
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Transport Routier",
    description: "Service de transport routier national et international avec une flotte moderne et des chauffeurs expérimentés.",
    features: ["Livraison express", "Transport frigorifique", "Groupage", "Distribution urbaine"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  },
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Transport Aérien",
    description: "Solutions de fret aérien pour vos envois urgents et sensibles avec une couverture mondiale.",
    features: ["Fret express", "Charter avion", "Transport sensible", "Douane express"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
  },
  {
    icon: <Train className="w-12 h-12" />,
    title: "Transport Ferroviaire",
    description: "Transport ferroviaire écologique et efficace pour vos marchandises sur longue distance.",
    features: ["Transport combiné", "Wagons dédiés", "Trains complets", "Multi-modal"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3"
  }
];

const features = [
  {
    icon: <Route className="w-8 h-8" />,
    title: "Réseau International",
    description: "Couverture mondiale avec des partenaires de confiance"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Suivi en Temps Réel",
    description: "Tracking avancé de vos expéditions 24/7"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Sécurité Maximale",
    description: "Protection optimale de vos marchandises"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Solutions Globales",
    description: "Services adaptés à vos besoins internationaux"
  }
];

const Transport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Solutions de Transport Global
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Des solutions de transport multimodal adaptées à vos besoins logistiques
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Demander un devis
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Nos Solutions de Transport
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services de transport pour répondre à tous vos besoins logistiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      {service.icon}
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi Choisir Nos Services ?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Une expertise reconnue dans le transport international et la logistique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Optimiser Votre Logistique ?
            </h2>
            <p className="text-xl mb-8">
              Contactez nos experts pour une solution personnalisée à vos besoins de transport
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Contactez-nous
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Transport;