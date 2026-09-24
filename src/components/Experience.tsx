
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: " Développeur Web Web Mobile & Interimaire ",
      company: "La Plateforme_ , Eureka",
      location: "Martigues, France",
      period: "Juin 2025 - Octobre 2026 ",
      type: "Formation pratique",
      descriptions: [
        "Développement de sites web e-commerce (INES-voyage , GEEKMEDIA , MARSIA FESTIVAL)",
        "Développement de sites web HEATHCARE",
        "Développement de sites web EXAMEN-CIVIQUE",
        "Développement de sites web SKILLMATCHING",
        "Développement de sites web NETBNB"
      ],
      technologies: ["HTML/CSS", "Java","Spring Boot", "JavaScript", "MySQL", "Git", "Docker", "Consul", "Merise", "Thymeleaf"]
    },
      {
      title: " Concepteur Développeur d'Applications",
      company: "La Plateforme_",
      location: "Marseille, Martigues France",
      period: "Septembre 2024 - 2025 ",
      type: "Formation pratique Bac+3",
      descriptions: [
        "Développement de sites web e-commerce (NEO_MATCHA, BloomPetals)",
        "Création d'un fansite interactif avec fonctionnalités communautaires",
        "Réalisation de projets en Python (jeu morpion)",
        "Montage et démontage de PC, virtualisation de systèmes",
        "Participation à un hackathon avec innovation de monitoring",
        "Apprentissage de méthodologies agiles et travail en équipe"
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "Python", "MySQL", "Git", "Docker"]
    },
    {
      title: "Enseignante et Formatrice en Informatique",
      company: "Système éducatif tunisien",
      location: "Tunisie",
      period: "2008 - 2013",
      type: "Enseignement",
      descriptions: [
        "Enseignement au lycée secondaire en informatique",
        "Formation de jeunes diplômés aux technologies informatiques",
        "Développement de programmes pédagogiques adaptés",
        "Encadrement et suivi d'étudiants",
        "Organisation d'ateliers pratiques et projets"
      ],
      technologies: ["Pédagogie", "Informatique", "Gestion de classe", "Évaluation"]
    },
    {
      title: "Assistante de Direction",
      company: "Cabinet dentaire & Entreprise automobile",
      location: "Tunisie",
      period: "2007-2008 & 2012-2015",
      type: "Administration",
      descriptions: [
        "Gestion d'un cabinet dentaire (2007-2008)",
        "Administration d'une entreprise de vente de voitures d'occasion (2012-2015)",
        "Coordination des équipes et planification",
        "Gestion de la relation client",
        "Supervision des processus administratifs",
        "Reporting et suivi des performances"
      ],
      technologies: ["Management", "CRM", "Bureautique", "Organisation"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Expérience Professionnelle</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un parcours riche combinant formation technique, enseignement et management
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-pink-600 to-purple-600"></div>
              )}
              
              <div className="flex items-start mb-12">
                {/* Timeline dot */}
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-8 flex-shrink-0 shadow-lg">
                  <Briefcase size={24} />
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-pink-50 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;