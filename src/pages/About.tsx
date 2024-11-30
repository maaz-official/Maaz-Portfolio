import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Book, Coffee, Globe, Award, Users, Wrench } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Frontend Development', description: 'React, Next.js, TypeScript', color: 'blue' },
    { icon: <Server className="w-6 h-6" />, name: 'Backend Development', description: 'Node.js, Express, MongoDB', color: 'green' },
    { icon: <Palette className="w-6 h-6" />, name: 'UI/UX Design', description: 'Figma, Adobe XD', color: 'purple' },
    { icon: <Globe className="w-6 h-6" />, name: 'Cloud Services', description: 'AWS, Firebase', color: 'cyan' },
    { icon: <Coffee className="w-6 h-6" />, name: 'DevOps', description: 'Docker, CI/CD', color: 'orange' },
    { icon: <Book className="w-6 h-6" />, name: 'Technical Writing', description: 'Documentation, Blogs', color: 'pink' }
  ];

  const achievements = [
    { icon: <Award />, title: '5+ Years Experience', description: 'Professional development journey' },
    { icon: <Users />, title: '50+ Clients', description: 'Successful collaborations' },
    { icon: <Wrench />, title: '100+ Projects', description: 'Completed successfully' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block mb-8"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-500 dark:ring-blue-400 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
                  alt="Muhammad Maaz"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -z-10 inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Passionate about creating impactful digital experiences
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Hi! I'm Muhammad Maaz, a passionate Full Stack Developer with over 5 years
                of experience in creating beautiful and functional web applications. I specialize
                in building scalable solutions that solve real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me writing technical blog posts,
                contributing to open-source projects, or exploring new technologies. I believe
                in continuous learning and sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
                  <div className="text-blue-500 dark:text-blue-400 w-6 h-6">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 bg-${skill.color}-50 dark:bg-${skill.color}-900/30 rounded-lg mb-4`}>
                  <div className={`text-${skill.color}-500 dark:text-${skill.color}-400`}>
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;