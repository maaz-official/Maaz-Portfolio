import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ScrollToSectionProps {
  targetId: string;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({ targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={scrollToSection}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="cursor-pointer p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
    >
      <ArrowDown className="w-6 h-6 text-blue-600" />
    </motion.button>
  );
};

export default ScrollToSection;