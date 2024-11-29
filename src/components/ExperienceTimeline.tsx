import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise applications using React and Node.js"
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies"
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebCraft Studios",
    period: "2018 - 2020",
    description: "Created responsive and interactive user interfaces for various web applications"
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
          className="relative pl-8 border-l-2 border-blue-200"
        >
          <div className="absolute -left-3 top-0">
            <div className="bg-blue-500 p-2 rounded-full">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
            <p className="text-blue-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
            <p className="text-gray-600 mt-2">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;