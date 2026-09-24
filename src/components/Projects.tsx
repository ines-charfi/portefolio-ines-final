import React from 'react';
import { ExternalLink, Github, Code, Palette, ShoppingCart, Users, HeartPulse, Home, Calendar, Globe } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "NEO_MATCHA",
            description: "Site e-commerce moderne pour la vente de produits matcha en ligne. Interface utilisateur intuitive avec système de panier et gestion des commandes.",
            image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["HTML", "CSS", "JavaScript"],
            icon: <ShoppingCart className="w-6 h-6" />,
            category: "E-commerce",
            githubUrl: "https://github.com/ines-charfi/matcha-the",
            liveUrl: "#"
        },
        {
            title: "BloomPetals",
            description: "Plateforme de vente en ligne dédiée aux fleurs et arrangements floraux. Design élégant et fonctionnalités avancées de catalogue produits.",
            image: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["HTML", "CSS3"],
            icon: <Palette className="w-6 h-6" />,
            category: "E-commerce",
            githubUrl: "https://github.com/ines-charfi",
            liveUrl: "#"
        },
        {
            title: "SkillMatching",
            description: "Plateforme intelligente de mise en relation de compétences entre utilisateurs ou recruteurs.",
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "Node.js", "Algorithmes"],
            icon: <Users className="w-6 h-6" />,
            category: "Web App",
            githubUrl: "https://github.com/ines-charfi/SkillMatching-project",
            liveUrl: "#"
        },
        {
            title: "HeathCare",
            description: "Application de suivi et de gestion de santé simplifiée pour les patients et professionnels.",
            image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["PHP", "SQL", "JavaScript"],
            icon: <HeartPulse className="w-6 h-6" />,
            category: "Santé",
            githubUrl: "https://github.com/ines-charfi/HeathCare",
            liveUrl: "#"
        },
        {
            title: "NetBNB",
            description: "Plateforme de réservation de logements de vacances inspirée d'Airbnb.",
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["PHP", "MySQL", "CSS3"],
            icon: <Home className="w-6 h-6" />,
            category: "Réservation",
            githubUrl: "https://github.com/ines-charfi/NetBNB",
            liveUrl: "#"
        },
        {
            title: "Festival Marsia",
            description: "Site vitrine et billetterie pour un festival culturel avec programmation et informations pratiques.",
            image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            icon: <Calendar className="w-6 h-6" />,
            category: "Événementiel",
            githubUrl: "https://github.com/ines-charfi/FESTIVAL_MARSIA",
            liveUrl: "#"
        },
        {
            title: "Examen Civique",
            description: "Plateforme interactive d'entraînement et de révision sous forme de quiz pour la préparation à l'examen civique.",
            image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["PHP", "JavaScript", "SQL"],
            icon: <Code className="w-6 h-6" />,
            category: "Éducation",
            githubUrl: "https://github.com/ines-charfi/examen-civique",
            liveUrl: "#"
        },
        {
            title: "GeekMedia",
            description: "Média en ligne dédié à la culture geek, au jeu vidéo et aux nouvelles technologies.",
            image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["HTML", "CSS", "PHP"],
            icon: <Users className="w-6 h-6" />,
            category: "Média",
            githubUrl: "https://github.com/ines-charfi/GeekMedia",
            liveUrl: "#"
        },
        {
            title: "Ines Voyage",
            description: "Blog/Agence de voyage virtuelle proposant des guides de destinations et circuits sur mesure.",
            image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            icon: <Globe className="w-6 h-6" />,
            category: "Voyage",
            githubUrl: "https://github.com/ines-charfi/ines-voyage",
            liveUrl: "#"
        },
        {
            title: "Gestionnaire de Menus",
            description: "Application web facilitant la création, planification et gestion de menus de restauration.",
            image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["HTML", "CSS", "PHP", "SQL", "JavaScript"],
            icon: <ShoppingCart className="w-6 h-6" />,
            category: "Gestion",
            githubUrl: "https://github.com/ines-charfi/gestionnaire_de_menu",
            liveUrl: "#"
        },
        {
            title: "Quiz Night",
            description: "Jeu de quiz dynamique en ligne pour tester ses connaissances lors de soirées à thèmes.",
            image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["HTML", "CSS", "PHP", "SQL", "JavaScript"],
            icon: <Code className="w-6 h-6" />,
            category: "Jeu",
            githubUrl: "https://github.com/ines-charfi/QUIZNIGHT_ines",
            liveUrl: "#"
        },
        {
            title: "Jeu Morpion Python",
            description: "Implémentation du jeu classique du morpion en Python avec interface graphique intuitive.",
            image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Python", "Tkinter", "Algorithmes"],
            icon: <Code className="w-6 h-6" />,
            category: "Jeu",
            githubUrl: "https://github.com/ines-charfi/Jeu_Morpion",
            liveUrl: "#"
        },
        {
            title: "Portfolio Personnel",
            description: "Site portfolio responsive présentant mes projets et compétences. Design moderne avec animations.",
            image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            icon: <Palette className="w-6 h-6" />,
            category: "Portfolio",
            githubUrl: "https://github.com/ines-charfi/portef-ines",
            liveUrl: "https://ines-charfi.github.io/portef-ines/"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-title text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">Mes Projets</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Une sélection de projets réalisés qui démontrent mes compétences
                        en développement web et ma créativité.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4">
                                        <div className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">
                                            {project.icon}
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                      {project.category}
                    </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="font-title text-xl font-semibold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 pb-6 pt-0 flex gap-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200 text-sm font-medium"
                                >
                                    <Github size={16} />
                                    Code
                                </a>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
                                >
                                    <ExternalLink size={16} />
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/ines-charfi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        <Github size={20} />
                        Voir tous mes projets sur GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;