import {CardProps } from '@/app/Interface/interface';
import { CardProvider } from '@/app/lib/CardContext';
import React, { useEffect, useState } from 'react';
import ProjectCard from './Card';


/**
 * Renders a collection of `ProjectCard` components wrapped in a `CardProvider` context.
 *
 * @param props - The props for the `CardManager` component.
 * @param props.cards - An array of card data objects to be rendered.
 * @param props.onCardClick - A callback function to be called when a card is clicked.
 * @param props.onCardDelete - A callback function to be called when a card is deleted.
 */

    
    const CardManager = () => {
      const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setCards(data); // Assuming the API returns an array of card data
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Or any other loading state representation
  }
      return (
        <CardProvider>
          <div className="flex flex-wrap justify-center md:justify-start m-auto gap-4">
            {cards.map(card => (
              <ProjectCard key={card.id} {...card} />
            ))}
          </div>
        </CardProvider>
      );
    };
    
    export default CardManager;