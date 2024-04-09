
import type { Metadata } from "next";
import {Providers} from "../app/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Porfolio",
  description: "Anderson Torres Porfolio",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

