
import React from "react";
import { motion } from "framer-motion";
/**
 * The `Footer` component represents the footer section of the application.
 * It uses the `motion` component from the `framer-motion` library to add
 * a smooth animation effect when the component mounts.
 */

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-sky-600  to-indigo-600 via-blue-600 md:text-2xl font-medium text-white text-center py-2 w-full"
    >
      <p>&#169; {new Date().getFullYear()} · Anderson Torres</p>
    </motion.footer>
  );
};

export default Footer;
