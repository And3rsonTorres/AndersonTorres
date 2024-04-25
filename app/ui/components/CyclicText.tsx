import { useEffect, useState } from "react";
import { AnimatedCharacters } from "@/app/Utils/TextUtil";

// Text definitions
const name = "Anderson";
const greeting = "Hello, I'm";
const handshake = "Let's Connect 🤝";
const skillPhrases = [
    "I'm skilled in",
    "I'm experienced with",
    "I have expertise in",
    "I work with",
    "I'm proficient in",
    "I specialize in"
  ];

const gradients = [
  "from-[#0099ff] to-[#006699]",
  "from-[#ff9900] to-[#cc6600]",
  "from-[#ff0066] to-[#cc0033]"
];

/**
 * Renders a cyclic text component that displays a series of text lines with animated characters and gradient effects.
 * The text lines cycle through a set of predefined strings, with the color and order of the lines changing every 2.5 seconds.
 */
const CyclicText = () => {
  const [indexSkill, setSkillIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const greetingTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);

    const intervalSecondLine = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skillPhrases.length);
      setColorIndex((prev) => (prev + 1) % gradients.length);
    }, 2500);

    return () => {
      clearTimeout(greetingTimer);
      clearInterval(intervalSecondLine);
    };
  }, []);

  return (
    <div className="flex justify-center items-center border-2 border-indigo-500 rounded-xl p-6 max-w-md mx-auto bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-emerald-700 dark:to-emerald-500 opacity-85 shadow-md overflow-hidden md:max-w-2xl hover:opacity-100 hover:shadow-xl">
      <div className="text-center">
        {showGreeting ? (
          <h1 className="text-5xl md:text-7xl font-bold pt-10">{greeting}<br /><AnimatedCharacters text={name} gradientClass={gradients[0]}/></h1>
        ) : (
          <h1 className="text-5xl md:text-7xl font-bold pt-10">{handshake}</h1>
        )}
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          {!showGreeting && (
            <>
              <AnimatedCharacters
                text={`${skillPhrases[indexSkill]}:`}
                gradientClass={gradients[colorIndex]}
              />
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 m-auto text-indigo-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
            </>
          )}
        </h2>
        
      </div>    </div>
  );
};

export default CyclicText;
