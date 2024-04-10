/**
 * Renders a fixed footer at the bottom of the page with a gradient background and centered text.
 * The footer is animated to fade in and slide up from the bottom of the page.
 */
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-sky-600  to-indigo-600 via-blue-600 md:text-2xl font-medium text-white text-center py-2 fixed bottom-0 left-0 w-full z-50"
    >
      <p>&#169; {new Date().getFullYear()} · Anderson Torres</p>
    </motion.footer>
  );
};

export default Footer;
