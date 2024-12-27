import { motion } from "framer-motion";
import { Ship, Truck, Package, Globe, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/5b23ba42-133e-44fc-9472-8148854c0f6d.png" 
              alt="MV International Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
              <span>Accueil</span>
            </Link>
            <Link to="/services" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
              <Package className="w-5 h-5" />
              <span>Services</span>
            </Link>
            <Link to="/transport" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
              <Ship className="w-5 h-5" />
              <span>Transport</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
              <Truck className="w-5 h-5" />
              <span>Solutions</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Contactez-nous</span>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-4 py-2 text-secondary hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <Globe className="w-5 h-5" />
                <span>Accueil</span>
              </Link>
              <Link 
                to="/services" 
                className="flex items-center space-x-2 px-4 py-2 text-secondary hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <Package className="w-5 h-5" />
                <span>Services</span>
              </Link>
              <Link 
                to="/transport" 
                className="flex items-center space-x-2 px-4 py-2 text-secondary hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <Ship className="w-5 h-5" />
                <span>Transport</span>
              </Link>
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-4 py-2 text-secondary hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <Truck className="w-5 h-5" />
                <span>Solutions</span>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-primary text-white mx-4 px-6 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Contactez-nous</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};