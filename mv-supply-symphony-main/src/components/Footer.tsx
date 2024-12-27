import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">MV INTERNATIONAL</h3>
            <p className="text-gray-300">
              Votre partenaire pour une performance durable
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+24205510606" className="hover:text-primary transition-colors">
                  +242 05 510 06 06
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:secretariat@mvinternational.com" className="hover:text-primary transition-colors">
                  secretariat@mvinternational.com
                </a>
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <button className="bg-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors w-full sm:w-auto">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 MV INTERNATIONAL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};