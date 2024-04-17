"use client"
import { cardsData } from "@/public/ProjectData";
import CardManager from "../ui/components/CardManager";

function Projects() {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1>Projects</h1>
        
        <CardManager cards={[...cardsData]}/>
      </div>
    );
  }
  export default Projects;