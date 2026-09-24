import React from 'react';
import { Server, Layout, Database, Wrench, TestTube, Container } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      skills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Spring Data JPA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" },
        { name: "Maven", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Frontend",
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Thymeleaf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Bases de données",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: "DevOps & Versioning",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Consul", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/consul/consul-original.svg" }
      ]
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Tests & Qualité",
      skills: [
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "JUnit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Mockito", logo: "https://site.mockito.org/favicon.ico" },
        { name: "JaCoCo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Outils & IDE",
      skills: [
        { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "MySQL Workbench", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB Compass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Merise", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
      ]
    }
  ];

  return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Mes Compétences</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies et outils que j'utilise au quotidien pour concevoir, développer et tester mes applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 shadow-md">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                            key={skillIndex}
                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:bg-pink-50 dark:hover:bg-gray-700 transition-all duration-200"
                        >
                          <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-7 h-7 object-contain"
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Skills;