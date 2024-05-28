/**
 * The main React component for the application, which renders various UI components
 * related to the user's profile, projects, and contact information.
 */
import CyclicText from "./ui/components/CyclicText";
import SpandingCard from "./ui/components/SpandingCard";
import { about, projects } from "@/public/data";
import CardManager from "./ui/components/CardManager";
import Proficiency from "./ui/components/Proficiency";
import ContactUs from "./ui/components/ContactForm";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CyclicText />
      <Proficiency />
      <SpandingCard inputText={projects} title="Projects" />
      <CardManager />
      <SpandingCard inputText={about} title="About Me" />
      <ContactUs />
    </div>
  );
};
export default App;
