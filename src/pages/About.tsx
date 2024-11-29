import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Book, Coffee, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Frontend Development', description: 'React, Next.js, TypeScript' },
    { icon: <Server className="w-6 h-6" />, name: 'Backend Development', description: 'Node.js, Express, MongoDB' },
    { icon: <Palette className="w-6 h-6" />, name: 'UI/UX Design', description: 'Figma, Adobe XD' },
    { icon: <Globe className="w-6 h-6" />, name: 'Cloud Services', description: 'AWS, Firebase' },
    { icon: <Coffee className="w-6 h-6" />, name: 'DevOps', description: 'Docker, CI/CD' },
    { icon: <Book className="w-6 h-6" />, name: 'Technical Writing', description: 'Documentation, Blogs' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-blue-500 dark:ring-blue-400">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
                  alt="Muhammad Maaz"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
              Muhammad Maaz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Hi! I'm Muhammad Maaz, a passionate Full Stack Developer with over 5 years
                of experience in creating beautiful and functional web applications. I love
                turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coding, you can find me writing technical blog posts,
                contributing to open-source projects, or exploring new technologies. I believe
                in continuous learning and sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    <div className="text-blue-500 dark:text-blue-400">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;