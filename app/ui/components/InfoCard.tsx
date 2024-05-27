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
import { Avatar, Card, CardBody } from "@nextui-org/react";

const InfoCard: React.FC<SpandingCardProps> = ({
  inputText,
  title,
  imagePath,
}) => {
  return (
    <Card
      className={`flex justify-center items-center m-10 ${CardBackgroundStyle}`}
    >
      <CardBody className={`p-6 max-w-md md:max-w-2xl mx-auto overflow-hidden`}>
        <div className="space-y-4 text-center text-lg">
          {imagePath ? (
            <div className="flex justify-center">
              <Avatar src={imagePath} className="w-32 h-32 mb-2" />
            </div>
          ) : (
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
          )}

          <h2 className="font-medium leading-tight">{inputText}</h2>
        </div>
      </CardBody>
    </Card>
  );
};

export default InfoCard;
