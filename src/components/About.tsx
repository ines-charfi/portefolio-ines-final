import React from 'react';
import { User, Heart, Globe, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Leadership",
      description: "Gestion d'équipe et communication efficace"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionnée",
      description: "Développement web et technologies modernes"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingue",
      description: "Français, Anglais professionnel, Arabe"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expérimentée",
      description: "Enseignement et formation en informatique"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">À propos de moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Développeuse passionnée en quête d'innovation
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Avec une solide expérience en enseignement et en formation informatique, 
              je me suis reconvertie dans le développement web pour concrétiser ma passion 
              pour les technologies modernes. Actuellement en formation à La Plateforme_, 
              je développe mes compétences en développement full-stack.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Mon parcours m'a permis d'acquérir des compétences solides en gestion d'équipe, 
              en organisation et en communication. Je suis aujourd'hui déterminée à mettre 
              ces atouts au service de projets web innovants et impactants.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              <strong className="text-gray-800 dark:text-white">Objectif :</strong> Décrocher un poste ou une  alternance de 2 ans à partir d'octobre 2026
              pour approfondir mes compétences techniques tout en contribuant activement 
              au développement de solutions web performantes.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm font-medium">
                Ponctuelle
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Organisée
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Communicative
              </span>
              <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                Gestion du stress
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;