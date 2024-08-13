/**
 * The `HamburgerMenu` component is a reusable React component that renders a hamburger-style menu button and a dropdown menu when the button is clicked.
 *
 * The component uses the `useState` hook to manage the open/closed state of the menu, and the `motion` and `AnimatePresence` components from the `framer-motion` library to animate the menu's appearance and disappearance.
 *
 * The menu contains links to various pages of the application, including the home page, projects page, about page, contact page, and a link to the user's resume.
 *
 * The `toggleMenu` function is called when the hamburger button is clicked, and it toggles the `isOpen` state to show or hide the menu. The `toggleMenu` function is called when a menu link is clicked, and it sets the `isOpen` state to `false` to close the menu.
 */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@nextui-org/react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="focus:outline-none z-10 ml-2 mt-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-1 bg-foreground rounded-full mb-1"
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-1 bg-foreground rounded-full mb-1"
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-1 bg-foreground rounded-full"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2 mt-10 dark:bg-black/70  bg-white/70 z-50 rounded-r-md shadow-sm "
          >
            <div className="p-4">
              <ul>
                <li className="hover:text-stone-400 hover:dark:text-zinc-800">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link href="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </motion.div>
                </li>
                <li className="hover:text-stone-400 hover:dark:text-zinc-800 ">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link href="/projects" onClick={toggleMenu}>
                      Projects
                    </Link>
                  </motion.div>
                </li>
                <li className="hover:text-stone-400 hover:dark:text-zinc-800 ">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link href="/about" onClick={toggleMenu}>
                      About
                    </Link>
                  </motion.div>
                </li>
                <li className="hover:text-stone-400 hover:dark:text-zinc-800 ">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link href="/contact" onClick={toggleMenu}>
                      Reach Out
                    </Link>
                  </motion.div>
                </li>
                <li className=" hover:text-stone-400 hover:dark:text-zinc-800">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link
                      href="/Anderson Torres.pdf"
                      target="_blank"
                      aria-label="Resume"
                      onClick={toggleMenu}
                    >
                      Resume
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
