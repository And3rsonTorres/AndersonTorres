import { about2 } from "@/public/data";
import SpandingCard from "../ui/components/SpandingCard";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <SpandingCard title="About Me" inputText={about2} />
    </div>
  );
}
export default About;
