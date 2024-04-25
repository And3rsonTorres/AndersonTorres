
import React from "react";
import { Navbar, NavbarContent, Link, NavbarBrand, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
/**
 * The `NavBar` component is a reusable navigation bar for the application. It includes a brand logo, navigation links, and a theme switcher.
 *
 * The `NavBar` component uses the `Navbar`, `NavbarContent`, `Link`, `NavbarBrand`, and `NavbarItem` components from the `@nextui-org/react` library to create the navigation bar.
 *
 * The `ThemeSwitcher` component is used to allow the user to switch between light and dark themes.
 *
 * The `usePathname` hook from `next/navigation` is used to determine the current page path and highlight the corresponding navigation link.
 */

export default function NavBar() {
  const pathname = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
    
          "hover:text-stone-400",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:scale-105",
          "data-[active=true]:text-stone-300",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:rounded-[4px]",
          "data-[active=true]:after:bg-zinc-300",
        ],
      }}
      className="bg-black/70  dark:bg-white/70 z-50 text-lg md:text-2xl font-medium"
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/AndersonMEmoji.png"
            width={32}
            height={32}
            alt="AndersonMemoji"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent
        justify="center"
        className="items-center justify-between gap-4 md:gap-8 lg:gap-12"
      >
        <NavbarItem isActive={pathname === "/projects"}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/projects">Projects</Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/about">About</Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/contact">Reach Out</Link>
          </motion.div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className=" flex " justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
