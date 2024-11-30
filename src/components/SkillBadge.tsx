import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  delay?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {icon}
      <span className="text-gray-700 dark:text-gray-200 font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;