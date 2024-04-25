import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
