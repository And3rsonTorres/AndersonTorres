/**
 * Renders a collection of `ProjectCard` components wrapped in a `CardProvider` context.
 *
 * @param props - The props for the `CardManager` component.
 * @param props.cards - An array of card data objects to be rendered.
 * @param props.onCardClick - A callback function to be called when a card is clicked.
 * @param props.onCardDelete - A callback function to be called when a card is deleted.
 */
"use client";
import { CardProps } from "@/app/Interface/interface";
import { CardProvider } from "@/app/lib/CardContext";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Spinner } from "@nextui-org/react";
import { CardBackgroundStyle } from "@/app/Utils/TextUtil";

const CardManager = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div
        className={`flex w-6/12 justify-center items-center rounded-xl p-6 max-w-md mx-auto ${CardBackgroundStyle}`}
      >
        <Spinner />
        <h1 className="text-4xl">Loading...</h1>
      </div>
    );
  }
  return (
    <CardProvider>
      <div className="flex flex-wrap justify-center md:justify-start m-auto gap-4 py-10">
        {cards.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>
    </CardProvider>
  );
};

export default CardManager;
