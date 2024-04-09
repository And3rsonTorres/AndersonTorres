/**
 * Renders the navigation bar component for the application.
 * The navigation bar includes a brand logo, links to the projects, about, and contact pages, and a theme switcher.
 * The navigation bar is styled using the NextUI library and Tailwind CSS.
 * The navigation links are animated using the Framer Motion library.
 */
import React from "react";
import { Navbar, NavbarContent, Link, NavbarBrand } from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      className="bg-gradient-to-r from-sky-600  to-indigo-600 via-blue-600 md:text-3xl font-medium"
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/AndersonMEmoji.png"
            width={40}
            height={40}
            alt="AndersonMemoji"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects">Projects</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/about">About</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/contact">Reach Out</Link>
        </motion.div>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
