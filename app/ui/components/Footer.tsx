import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gray-800 text-white text-center py-4 fixed bottom-0 left-0 w-full z-50"
    >
      <p>This is the footer. You can customize it as needed.</p>
    </motion.footer>
  );
};


export default Footer;