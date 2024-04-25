"use client";

import CyclicText from "./ui/components/CyclicText";
import SpandingCard from "./ui/components/SpandingCard";
import { about, projects } from "@/public/data";
import CardManager from "./ui/components/CardManager";
import Proficiency from "./ui/components/ShowProficiency";
import ContactUs from "./ui/components/ContactForm";
const App = () => {

  return (
    <div className="flex flex-col items-center justify-center">
    <CyclicText/>
    <Proficiency/>
      <SpandingCard  inputText={projects} Title="Projects"/>
      <CardManager/>
      <ContactUs/>
      <SpandingCard  inputText={about} Title="About Me"/>
      
    </div>
  );
};
export default App;
