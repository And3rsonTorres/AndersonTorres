import type { Metadata } from "next";
import { Providers } from "../app/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Portfolio",
  description: "Anderson Torres Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="dark:text-white text-black bg-gray-100 dark:bg-gray-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
