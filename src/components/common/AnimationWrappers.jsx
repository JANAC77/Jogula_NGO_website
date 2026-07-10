import React from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, duration = 0.8, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideUp = ({ children, delay = 0, duration = 0.6, yOffset = 50, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, staggerDelay = 0.15, delayChildren = 0, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, yOffset = 30, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export const HoverCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ 
      y: -8, 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(14, 165, 233, 0.15), 0 8px 10px -6px rgba(14, 165, 233, 0.1)"
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={`bg-white rounded-2xl shadow-lg border border-slate-100 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export const AnimatedButton = ({ children, onClick, className = "", type = "button" }) => (
  <motion.button
    type={type}
    onClick={onClick}
    whileHover={{ y: -2, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`shadow-md hover:shadow-[0_8px_20px_rgba(14,165,233,0.3)] transition-shadow duration-300 ${className}`}
  >
    {children}
  </motion.button>
);
