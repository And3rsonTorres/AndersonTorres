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
        className={`flex w-6/12 justify-center items-center rounded-xl p-6 max-w-md mx-auto animate-spin`}
      >
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            fill="none"
            stroke="#eee"
          ></circle>

          <path
            d="M50 5 A 45 45 0 0 1 95 50"
            fill="none"
            strokeWidth="10"
            stroke="#4f46e5"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <CardProvider>
      <div className="flex flex-wrap justify-evenly m-auto gap-4">
        {cards.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>
    </CardProvider>
  );
};

export default CardManager;
