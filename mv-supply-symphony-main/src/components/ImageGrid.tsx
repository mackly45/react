import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    alt: "Container port avec des grues",
  },
  {
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    alt: "Logistique maritime internationale",
  },
  {
    src: "https://images.unsplash.com/photo-1565891741441-64926e441838",
    alt: "Transport routier logistique",
  },
  {
    src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55",
    alt: "Entrepôt logistique moderne",
  },
];

export const ImageGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary"
        >
          Notre Expertise Logistique
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-white font-medium text-sm md:text-base">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};