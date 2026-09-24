import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "inesmetlaoui@yahoo.fr",
      link: "inesmetlaoui@yahoo.fr"
    }, {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ines.charfi@laplateforme.io",
      link: "mailto:ines.charfi@laplateforme.io"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "07 82 08 02 77",
      link: "tel:+33782080277"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Martigues, France",
      link: "#"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "ines-charfi",
      link: "https://github.com/ines-charfi"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contactez-moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter 
            d'opportunités d'alternance ou de collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Mes informations</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Disponibilité</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-300">Disponible pour un job ou  alternance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-300">Début : Octobre 2026</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-300">Mobilité : Marseille et alentours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Envoyez-moi un message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-green-800 dark:text-green-200">Message envoyé avec succès !</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Opportunité d'alternance"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;