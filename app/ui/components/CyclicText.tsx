import { useEffect, useState } from "react";
import { AnimatedCharacters } from "@/app/Utils/TextUtil";
// Text definitions
const staticFirstLine = "Hi there 👋";
const dynamicPartsSecondLine = ["Anderson here", "welcome to my corner"];
const staticThirdLinePart1 = "where My ";
const dynamicWords = ["magical", "Alchemical", "Radiants"];
const staticThirdLinePart2 = "Sites/Apps START";

// Gradient styles for each dynamic word
const gradients = [
    "from-pink-500 to-yellow-500", // Gradient for "magic"
    "from-green-500 to-blue-500", // Gradient for "Alchemical"
    "from-purple-500 to-pink-500" // Gradient for "Radiant"
];

// Gradient specifically for "Anderson here"
const andersonGradient = "from-teal-400 to-cyan-500";



const CyclicText = () => {
    const [indexSecondLine, setIndexSecondLine] = useState(0);
    const [indexThirdLine, setIndexThirdLine] = useState(0);

    useEffect(() => {
        const intervalSecondLine = setInterval(() => {
            setIndexSecondLine(prev => (prev + 1) % dynamicPartsSecondLine.length);
        }, 4000); // Cycle every 4 seconds

        const intervalThirdLine = setInterval(() => {
            setIndexThirdLine(prev => (prev + 1) % dynamicWords.length);
        }, 3000); // Cycle dynamic words every 3 seconds

        return () => {
            clearInterval(intervalSecondLine);
            clearInterval(intervalThirdLine);
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                    {staticFirstLine}
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                    {indexSecondLine === 0 ?
                        <AnimatedCharacters text={dynamicPartsSecondLine[indexSecondLine]} gradientClass={andersonGradient} />
                        : dynamicPartsSecondLine[indexSecondLine]
                    }
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                    {staticThirdLinePart1} {" "}
                    <AnimatedCharacters
                        text={dynamicWords[indexThirdLine]}
                        gradientClass={gradients[indexThirdLine]}
                    />
                    {` ${staticThirdLinePart2}`}
                </h2>
            </div>
        </div>
    );
};

export default CyclicText;
