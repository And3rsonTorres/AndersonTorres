"use client"
import {  C, CSS,Cpp, Docker, Electron, ExpressJS, Fiddle, Figma, Firebase, Github, HTML, HTMX, Ilustrador, Javascript, JSON, Kotlin, MongoDB, Mongoose, NextJS, NextUI, PhotoShop, PostgresSQL, Postman, Prisma, Python, Pytorch, ReactIcon, ShadcnUI, Tailwind, Typescript } from "@/public/logos";
import {motion} from "framer-motion";
import React, { useEffect, useState } from "react";
const logos = [
<C key="c" />,
<CSS key="css" />,
<Cpp key="cpp" />,
<Docker key="docker" />,
<Electron key="electron" />,
<ExpressJS key="express" />,
<Fiddle key="fiddle" />,
<Figma key="figma" />,
<Firebase key="firebase" />,
<Github key="github" />,
<HTML key="html" />,
<HTMX key="htmx" />,
<Ilustrador key="ilustrador" />,
<Javascript key="javascript" />,
<JSON key="json" />,
<Kotlin key="kotlin" />,
<MongoDB key="mongodb" />,
<Mongoose key="mongoose" />,
<NextJS key="nextjs" />,
<NextUI key="nextui" />,
<PhotoShop key="photoshop" />,
<PostgresSQL key="postgresql" />,
<Postman key="postman" />,
<Prisma key="prisma" />,
<Python key="python" />,
<Pytorch key="pytorch" />,
<ReactIcon key="reacticon" />,
<ShadcnUI key="shadowcnui" />,
<Tailwind key="tailwind" />,
<Typescript key="typescript" />
];


const Proficiency = () => {
    const [windowWidth, setWindowWidth] = useState(1024);
    let timer=0;
    
    useEffect(() => {
      // Define a function to update the state based on the window's width
      function handleWindowResize() {
        setWindowWidth(window.innerWidth);
      }
  
      // Ensure window is defined (which it will be in the client-side environment)
      if (typeof window !== "undefined") {
        // Add event listener for resize events
        window.addEventListener("resize", handleWindowResize);
  
        // Set initial width
        handleWindowResize();
  
        // Return a cleanup function to remove the event listener
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }
    }, []);
    const calculateWidth = () => {
        if (windowWidth > 1024) {
            timer=20;
          return windowWidth; 
        } else if (windowWidth >= 360 && windowWidth < 390) {
            timer=35;
            return windowWidth +(60*logos.length); 
          }
          else if (windowWidth > 390 && windowWidth < 420) {
            timer=35;
            return windowWidth+(56*logos.length); 
          }
          else if (windowWidth > 650 && windowWidth < 700) {
            timer=25;
            return windowWidth+(40*logos.length); 
          }
          else {
            timer=30;
          return windowWidth +(15*logos.length); 
        }
      };
    return (
          
<motion.div 
      className="flex w-full space-x-4 h-24 items-center bg-black/20 dark:bg-white/40 my-10 border-y-2 border-indigo-500 overflow-hidden"
      
    >
      {logos.map((logo, index) => (
        <motion.div 
        animate={{ x: -calculateWidth() }} 
      transition={{ 
        repeat: Infinity,
        repeatType: "reverse",
        duration: timer,
        ease: "linear"
      }}
      key={index} className="inline-block">
          {logo} 
        </motion.div>
      ))}
    </motion.div>
);
  }
export default Proficiency;