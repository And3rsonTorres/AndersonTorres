/**
 * Renders an `InfoCard` component with a title and input text.
 *
 * @param inputText - The text to display in the card.
 * @param title - The title to display at the top of the card.
 * @returns A React component that renders the `InfoCard`.
 */

"use client";
import React from "react";
import { CardBackgroundStyle } from "@/app/Utils/TextUtil";
import { SpandingCardProps } from "@/app/Interface/interface";
import { Card, CardBody } from "@nextui-org/react";

const InfoCard: React.FC<SpandingCardProps> = ({ inputText, title }) => {
  return (
    <Card className="flex justify-center items-center m-10">
      <CardBody
        className={`p-6 max-w-md mx-auto ${CardBackgroundStyle} opacity-85 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:opacity-100 hover:shadow-xl`}
      >
        <div className="space-y-4 text-center text-lg text-black dark:text-white">
          <h1 className="text-xl font-semibold text-center mb-2">{title}</h1>
          <h2 className="font-medium leading-tight">{inputText}</h2>
        </div>
      </CardBody>
    </Card>
  );
};

export default InfoCard;
