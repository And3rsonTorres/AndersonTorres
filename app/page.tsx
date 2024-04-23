"use client";

import CyclicText from "./ui/components/CyclicText";
import GrowingText from "./ui/components/GrowingText";
import { about, projects } from "@/public/data";
import CardManager from "./ui/components/CardManager";
const App = () => {

  return (
    <div className="flex flex-col items-center justify-center">
      <CyclicText/>
      <GrowingText  inputText={projects} Title="Projects"/>
      <CardManager/>
      <GrowingText  inputText={about} Title="About Me"/>
      
    </div>
  );
};
export default App;
