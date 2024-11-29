import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, Palette, Server } from 'lucide-react';
import ScrollToSection from '../components/ScrollToSection';
import SkillBadge from '../components/SkillBadge';
import ExperienceTimeline from '../components/ExperienceTimeline';

const skills = [
  { name: 'Frontend Development', icon: <Code className="w-5 h-5 text-blue-500" /> },
  { name: 'UI/UX Design', icon: <Palette className="w-5 h-5 text-purple-500" /> },
  { name: 'Backend Development', icon: <Server className="w-5 h-5 text-green-500" /> }
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Muhammad Maaz
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {skills.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={0.6 + index * 0.1}
                />
              ))}
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a
                href="https://github.com/muhammadmaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/muhammadmaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/muhammadmaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <ScrollToSection targetId="experience" />
            </div>
          </motion.div>
        </div>
      </div>

      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Professional Experience
          </motion.h2>
          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
};

export default Home