import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: "Développeur Web Web Mobile",
      school: "La Plateforme_",
      period: " Juin 2025 - Octobre 2026",
      description: "Formation de 16 mois avec un contrat de travail avec EUREKA  délivrant un titre RNCP 5 Développeur Web Web Mobile. Apprentissage du développement full-stack moderne.",
      type: "En cours",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["React", "Node.js", "Spring Boot", "Java", "Mysql", "Docker","MongoDB", "Merise","Thymeleaf", "API REST"]
    },
      {
      degree: "Bachelor IT - Développeur Web",
      school: "La Plateforme_",
      period: "Octobre 2024 - Juin 2025",
      description: "Formation de 3 ans délivrant un titre RNCP 6 Développeur Web. Apprentissage du développement full-stack moderne.",
      type: "En cours",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["React", "Node.js", "PHP", "Mysql", "MongoDB", "API REST"]
    },
    {
      degree: "Diplôme d'État de la Langue Française",
      school: "Certification officielle",
      period: "Décembre 2022",
      description: "Certification du niveau de français pour l'intégration professionnelle en France.",
      type: "Certification",
      icon: <Award className="w-6 h-6" />,
      skills: ["Français professionnel", "Communication", "Rédaction"]
    },
    {
      degree: "Remise à Niveau en Bureautique",
      school: "Formation professionnelle",
      period: "Mars 2023",
      description: "Actualisation des compétences bureautiques et outils de productivité modernes.",
      type: "Formation",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Suite Office", "Outils collaboratifs", "Gestion documentaire"]
    },
    {
      degree: "Master Sécurité des Systèmes Informatiques",
      school: "Université tunisienne",
      period: "Décembre 2009",
      description: "Master professionnel spécialisé dans la sécurité informatique et la protection des données.",
      type: "Master",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["Sécurité réseau", "Cryptographie", "Audit sécurité", "Gestion des risques"]
    },
    {
      degree: "Certificat en Audit ANSIT",
      school: "ANSIT",
      period: "Février 2010",
      description: "Certification en audit et contrôle des systèmes d'information.",
      type: "Certification",
      icon: <Award className="w-6 h-6" />,
      skills: ["Audit SI", "Conformité", "Contrôle interne"]
    },
    {
      degree: "Maîtrise Informatique Appliquée à la Gestion",
      school: "Université tunisienne",
      period: "Juillet 2007",
      description: "Formation en informatique de gestion avec focus sur les systèmes d'information d'entreprise.",
      type: "Maîtrise",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["Systèmes d'information", "Gestion de bases de données", "Analyse fonctionnelle"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "En cours":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "Master":
      case "Maîtrise":
        return "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200";
      case "Certification":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      case "Formation":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Formation & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un parcours académique solide alliant formations techniques et certifications professionnelles
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 lg:mb-0">{edu.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(edu.type)}`}>
                            {edu.type}
                          </span>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-3">{edu.school}</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{edu.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Objectif Alternance</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Je recherche activement une alternance de 2 ans à partir d'octobre 2026 pour
              approfondir mes compétences techniques et contribuer à des projets innovants 
              dans une entreprise dynamique.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full font-medium">
                Début: Octobre 2026
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-medium">
                Durée: 2 ans
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium">
                Rythme: École/Entreprise
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;