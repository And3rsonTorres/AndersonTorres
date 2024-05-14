"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavBar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <NavBar />
        {children}
        <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
