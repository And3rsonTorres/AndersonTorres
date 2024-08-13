/**
 * The `NavBar` component is a reusable React component that renders a navigation bar for the application.
 * It includes a brand logo, navigation links, and a theme switcher.
 * The navigation links are animated using Framer Motion and are highlighted when the current URL matches the link.
 * The navigation bar is styled using the `@nextui-org/react` library and is designed to be responsive and visually appealing.
 */

import React from "react";
import {
  Navbar,
  NavbarContent,
  Link,
  NavbarBrand,
  NavbarItem,
  Avatar,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      // waiting on nextUI fix
      //shouldHideOnScroll
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "py-2",
          "hover:text-stone-400",
          "hover:dark:text-zinc-800",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-2",
          "data-[active=true]:after:left-0",
          "data-[active=true]:scale-105",
          "data-[active=true]:dark:text-stone-400",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:border-b-4",
          "data-[active=true]:after:hover:border-b-0",
          "data-[active=true]:after:rounded-full",
          "data-[active=true]:after:border-zinc-300",
          "data-[active=true]:text-zinc-600",
          "data-[active=true]:dark:after:border-stone-300",
        ],
      }}
      className="dark:bg-black/70  bg-white/70 z-50 text-lg md:text-2xl font-medium shadow-sm group"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <HamburgerMenu />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Avatar className="ml-2" src="/logo.png" alt="A and T Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="center"
        className="items-center justify-between gap-4 md:gap-8 lg:gap-12 hidden sm:flex"
      >
        <NavbarItem isActive={pathname === "/"}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">Home</Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem
          isActive={pathname === "/projects"}
          className="hidden sm:flex"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/projects">Projects</Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"} className="hidden sm:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/about">About</Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem
          isActive={pathname === "/contact"}
          className="hidden sm:flex"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/contact">Reach Out</Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem
          isActive={pathname === "/resume"}
          className="hidden sm:flex"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/Anderson Torres.pdf"
              target="_blank"
              aria-label="Resume"
            >
              Resume
            </Link>
          </motion.div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className=" flex  mr-2" justify="end">
        <NavbarItem className="group-hover:rotate-45 dark:group-hover:rotate-12">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
