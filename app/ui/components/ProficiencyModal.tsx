/**
 * Renders a modal component that displays a list of proficiency logos.
 * The modal can be opened and closed using a button.
 */

"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import {
  Github,
  CSS,
  JSON,
  Prisma,
  C,
  Cpp,
  Docker,
  Electron,
  ExpressJS,
  Fiddle,
  Figma,
  Firebase,
  HTML,
  HTMX,
  Ilustrador,
  Javascript,
  Kotlin,
  MongoDB,
  Mongoose,
  NextJS,
  NextUI,
  PhotoShop,
  PostgresSQL,
  Postman,
  Python,
  Pytorch,
  ReactIcon,
  ShadcnUI,
  Tailwind,
  Typescript,
} from "@/public/logos";
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
  <Typescript key="typescript" />,
];

const AllProficiency: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex self-start">
      <Modal title="I am Experience With" isOpen={isOpen} onClose={closeModal}>
        {logos.map((child, index) => (
          <div className="px-1 w-30 h-30" key={index}>
            {child}
          </div>
        ))}
      </Modal>
      <button
        className={` hover:scale-105 shadow shadow-indigo-700 dark:shadow-indigo-300 font-bold pt-2 px-4 rounded-t-full ${
          isOpen ? "invisible" : ""
        }`}
        onClick={openModal}
      >
        See All Proficiency
      </button>
    </div>
  );
};

export default AllProficiency;
