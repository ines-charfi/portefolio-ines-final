
import { Heart, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ines Charfi
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Développeuse web passionnée, créant des solutions innovantes 
              et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'À propos', id: 'about' },
                { label: 'Compétences', id: 'skills' },
                { label: 'Projets', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:inesmetlaoui@yahoo.fr"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} className="mr-3" />
               inesmetlaoui@yahoo.fr
              </a>
              <a
                  href="mailto:ines.charfi@laplateforme.io"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} className="mr-3" />
                ines.charfi@laplateforme.io
              </a>

              <a
                href="tel:+33782080277"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone size={16} className="mr-3" />
                07 82 08 02 77
              </a>
              <a
                href="https://github.com/ines-charfi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={16} className="mr-3" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Ines Charfi. Créé avec
            <Heart size={16} className="text-red-500" />
            et React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;