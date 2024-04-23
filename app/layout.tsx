
import type { Metadata } from "next";
import {Providers} from "../app/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Porfolio",
  description: "Anderson Torres Porfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" className={inter.className}>

<body className=" w-full min-h-screen bg-LightModeBG dark:bg-DarkModeBG bg-scroll bg-center text-white">
<Providers>
{children}
</Providers>
</body>
</html>
);
};


