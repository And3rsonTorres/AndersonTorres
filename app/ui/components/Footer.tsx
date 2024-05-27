"use client";
import { Link, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

/**
 * Renders the footer component for the application.
 *
 * The footer includes the current year, a link to the developer's GitHub profile, and a link to the developer's LinkedIn profile.
 *
 * The footer is animated using the `motion.footer` component from the Framer Motion library, with a fade-in and slide-up animation.
 *
 * The footer is styled with a semi-transparent background color that changes based on the dark mode setting.
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="dark:bg-black/70 bg-white/70 py-4 w-full  mt-10 text-center"
    >
      <div className="container mx-auto">
        <p className="text-lg md:text-2xl font-medium">
          © {currentYear} · Anderson Torres
        </p>
        <ul className="flex justify-center gap-4 mt-2">
          <li>
            <Link
              href="https://github.com/And3rsonTorres"
              aria-label="GitHub"
              isExternal
            >
              <Image
                src="/github-mark.png"
                alt="Github Logo"
                className="w-6 h-6 md:w-10 md:h-10 dark:invert"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/elnito"
              aria-label="LinkedIn"
              isExternal
            >
              <Image
                src="/LinkedIn_Logo_initials.png"
                alt="LinkedIn Logo"
                className="w-6 h-6 md:w-10 md:h-10"
              />
            </Link>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
