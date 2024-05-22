/**
 * A React component that renders a card with an animated text effect.
 *
 * @param {SpandingCardProps} props - The component props.
 * @param {string} props.inputText - The text to be displayed in the card.
 * @param {string} props.Title - The title to be displayed in the card.
 * @returns {JSX.Element} - The rendered SpandingCard component.
 */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardBackgroundStyle, randomize } from "@/app/Utils/TextUtil";
import { SpandingCardProps } from "@/app/Interface/interface";
import { Card, CardBody } from "@nextui-org/react";

const SpandingCard: React.FC<SpandingCardProps> = ({ inputText, title }) => {
  const [visibleText, setVisibleText] = useState<string[]>([]);
  const paragraphs = inputText.split("\n");

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleText((prevVisibleText) => {
        const nextCharIndex = prevVisibleText.length;
        return paragraphs[0].substring(0, nextCharIndex + 1).split("");
      });
    }, 50);

    return () => clearInterval(interval);
  }, [paragraphs]);

  return (
    <Card
      className={`flex justify-center items-center m-10 ${CardBackgroundStyle}`}
    >
      <CardBody
        className={`p-6 max-w-md md:max-w-2xl mx-auto overflow-hidden `}
      >
        <div className="space-y-4 text-center text-lg text-black dark:text-white">
          <h1 className="text-xl font-semibold text-center  mb-2">{title}</h1>
          <h2 className="font-medium leading-tight ">
            {visibleText.map((char, index) => (
              <motion.span
                key={index}
                initial={{ ...randomize() }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.002 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>
      </CardBody>
    </Card>
  );
};

export default SpandingCard;
