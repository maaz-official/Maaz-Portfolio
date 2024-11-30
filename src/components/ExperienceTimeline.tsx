import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise applications using React and Node.js",
    technologies: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies",
    technologies: ["Vue.js", "Express", "MongoDB", "Docker"]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebCraft Studios",
    period: "2018 - 2020",
    description: "Created responsive and interactive user interfaces for various web applications",
    technologies: ["React", "Redux", "SASS", "Webpack"]
  }
];

const ExperienceTimeline = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
        >
          <div className="absolute -left-3 top-0">
            <div className="bg-blue-500 dark:bg-blue-600 p-2 rounded-full shadow-lg">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;