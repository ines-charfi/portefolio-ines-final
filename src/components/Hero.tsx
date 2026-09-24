import React from 'react';
import { ChevronDown, Github, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 dark:bg-pink-800 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full opacity-60 animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="block text-gray-800 dark:text-white">Bonjour, je suis</span>
                <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  Ines Charfi
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                Développeuse Web Full-Stack
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                Passionnée par le développement web moderne, je crée des applications
                innovantes, performantes et adaptées aux besoins des entreprises. Actuellement à la recherche d'une nouvelle opportunité professionnelle ou d'une alternance de 2 ans
                à partir d'octobre 2026.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Me contacter
                </a>
                <a
                  href="https://github.com/ines-charfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-pink-600 dark:hover:border-pink-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300"
                >
                  Voir mes projets
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={20} className="text-pink-600 dark:text-pink-400" />
                  <span>ines.charfi@laplateforme.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-green-600 dark:text-green-400" />
                  <span>Martigues, France</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-green-400 p-2 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="../assets/image-profile.jpg"
                    alt="Ines Charfi"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-bounce">
                <Github size={24} className="text-gray-700 dark:text-gray-300" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-pulse">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors" />
      </button>
    </section>
  );
};

export default Hero;