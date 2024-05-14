/**
 * The `Footer` component represents the footer section of the application.
 * It is rendered at the bottom of the page and includes a copyright notice.
 * The footer is animated using the `framer-motion` library, fading in and sliding up from the bottom of the page.
 */

import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-black/70  dark:bg-white/70 md:text-2xl font-medium text-center py-2 w-full"
    >
      <p>&#169; {new Date().getFullYear()} · Anderson Torres</p>
    </motion.footer>
  );
};

export default Footer;
