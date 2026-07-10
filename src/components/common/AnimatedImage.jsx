import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = ({ 
  src, 
  alt, 
  className, 
  animationType = 'zoom', // 'zoom', 'fade', 'slide'
  delay = 0 
}) => {
  
  const getVariants = () => {
    switch(animationType) {
      case 'slide':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'zoom':
      default:
        return {
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 }
        };
    }
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay 
      }}
      loading="lazy" // Optimizes performance by lazy loading images
    />
  );
};

export default AnimatedImage;
