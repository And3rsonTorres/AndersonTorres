import { useEffect, useState } from "react";
import { AnimatedCharacters } from "@/app/Utils/TextUtil";
// Text definitions
const welcome = "Greetings 👋";
const intro = "Anderson Over Here";
const secondLine = "I'm a recent graduate from the UMASS Lowell";
const thirdline=" with a Bachelor's degree in Computer Science."
const forthline = "I'm currently working With: ";
const working = ["MongoDB", "NextJS", "Typescript","ExpressJS", "Python", "SQL", "PostgresSQL", "AWS", "Docker", "..." ];


const gradients = [
    "from-[#00ed64] to-[#00684a]",
    "from-white to-[#007acc]", 
    "from-pink-500 to-yellow-500",
    "from-purple-500 to-pink-500",
];




/**
* Renders a cyclic text component that displays a series of text lines with animated characters and gradient effects.
* The text lines cycle through a set of predefined strings, with the color and order of the lines changing every 2.5 seconds.
*/
const CyclicText = () => {
const [indexWork, setWorkIndex] = useState(0);
const [colorIndex, setColorIndex] = useState(0);
useEffect(() => {
const intervalSecondLine = setInterval(() => {
setWorkIndex(prev => (prev + 1) % working.length);
setColorIndex(prev => (prev + 1) % gradients.length);
}, 2500);

return () => {
clearInterval(intervalSecondLine);
};
}, []);

return (
<div className="flex justify-center items-center ">
<div className="text-center">
<h1 className="text-5xl md:text-7xl font-bold  p-10">
{welcome}
</h1>
<h2 className="text-3xl md:text-5xl font-bold m-4" >

<AnimatedCharacters text={intro} gradientClass={gradients[colorIndex]} />
<br />
<AnimatedCharacters text={secondLine} gradientClass={gradients[(colorIndex + indexWork) % gradients.length]} />
<br />
<AnimatedCharacters text={thirdline} gradientClass={gradients[(colorIndex + indexWork) % gradients.length]} />
<br />
<AnimatedCharacters text={forthline} gradientClass={gradients[colorIndex]} />
<AnimatedCharacters text={working[indexWork]} gradientClass={gradients[colorIndex]}
/>
</h2>
</div>
</div>
);
};

export default CyclicText;
