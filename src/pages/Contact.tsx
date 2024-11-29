import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email',
      content: 'contact@muhammadmaaz.dev',
      link: 'mailto:contact@muhammadmaaz.dev'
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Phone',
      content: '+1 (234) 567-8900',
      link: 'tel:+12345678900'
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: 'Location',
      content: 'San Francisco, CA',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;