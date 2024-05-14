"use client";
import CardManager from "../ui/components/CardManager";
import InfoCard from "../ui/components/InfoCard";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InfoCard
        title="Projects"
        inputText="Here you can find some of my projects more will be added later."
      />

      <CardManager />
    </div>
  );
}
export default Projects;
