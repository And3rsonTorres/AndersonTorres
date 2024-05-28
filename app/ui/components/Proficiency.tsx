/**
 * The `Proficiency` component displays a marquee of logos representing various technologies and tools that the user is proficient in.
 *
 * The component imports a set of logo icons from the `@/public/logos` module and renders them in a marquee using the `Marquee` component.
 * The `AllProficiency` component is also rendered, which likely provides additional functionality related to proficiency.
 *
 * The `style` constant defines the CSS styles applied to the marquee container.
 */
"use client";
import {
  C,
  CSS,
  Cpp,
  Docker,
  Electron,
  ExpressJS,
  Fiddle,
  Figma,
  Firebase,
  Github,
  HTML,
  HTMX,
  Ilustrador,
  Javascript,
  JSON,
  Kotlin,
  MongoDB,
  Mongoose,
  NextJS,
  NextUI,
  PhotoShop,
  PostgresSQL,
  Postman,
  Prisma,
  Python,
  Pytorch,
  ReactIcon,
  ShadcnUI,
  Tailwind,
  Typescript,
} from "@/public/logos";
import Marquee from "./Marquee";
import AllProficiency from "./ProficiencyModal";

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

const style =
  "flex w-full space-x-4 h-24  items-center mb-10 shadow shadow-indigo-700 dark:shadow-indigo-300 overflow-hidden";

const Proficiency = () => {
  return (
    <>
      <AllProficiency />
      <Marquee marqueeStyle={style}>{logos}</Marquee>
    </>
  );
};

export default Proficiency;
