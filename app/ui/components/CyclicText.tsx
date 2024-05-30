/**
 * `CyclicText` is a React component that displays a cyclic text animation. It shows a greeting message for 3 seconds, then transitions to a "Let's Connect" message with an animated skill phrase and a bouncing arrow icon.
 *
 * The component uses the `AnimatedCharacters` utility to animate the text, and the `useState` and `useEffect` hooks to manage the state and timing of the animation.
 *
 * The component is styled using Tailwind CSS classes, with a gradient background and a rounded border.
 */
"use client";
import { useEffect, useState } from "react";
import { AnimatedCharacters, CardBackgroundStyle } from "@/app/Utils/TextUtil";
import { TypeAnimation } from "react-type-animation";

// Text definitions
const greeting = "Hello, I'm Anderson Torres";
const handshake = "Let's Connect 🤝";
const skillPhrases = [
  "I'm skilled in",
  "I'm experienced with",
  "I have expertise in",
  "I work with",
  "I'm proficient in",
  "I specialize in",
];

const gradients = [
  "from-[#0099ff] to-[#006699]",
  "from-[#ff9900] to-[#cc6600]",
  "from-[#cc0033] to-[#ff0066]",
];

const CyclicText = () => {
  const [indexSkill, setSkillIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const greetingTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 2500);

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
    <div
      className={`flex justify-center items-center p-6 max-w-md m-10 sm:mx-auto ${CardBackgroundStyle} overflow-hidden md:max-w-2xl`}
    >
      <div className="text-center">
        {showGreeting ? (
          <TypeAnimation
            sequence={[greeting]}
            className={`text-3xl md:text-5xl font-bold pt-4 bg-clip-text text-transparent bg-gradient-to-r ${gradients[2]}`}
          ></TypeAnimation>
        ) : (
          <h1 className="text-3xl md:text-5xl font-bold pt-4">{handshake}</h1>
        )}
        <h2 className="text-xl md:text-3xl font-bold mt-4">
          {!showGreeting && (
            <AnimatedCharacters
              text={`${skillPhrases[indexSkill]}:`}
              gradientClass={gradients[colorIndex]}
            />
          )}
        </h2>
      </div>
    </div>
  );
};

export default CyclicText;
