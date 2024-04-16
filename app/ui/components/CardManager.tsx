import { CardManagerProps } from '@/app/Interface/interface';
import { CardProvider } from '@/app/lib/CardContext';
import React from 'react';
import ProjectCard from './Card';


/**
 * Renders a collection of `ProjectCard` components wrapped in a `CardProvider` context.
 *
 * @param props - The props for the `CardManager` component.
 * @param props.cards - An array of card data objects to be rendered.
 * @param props.onCardClick - A callback function to be called when a card is clicked.
 * @param props.onCardDelete - A callback function to be called when a card is deleted.
 */

    
    const CardManager: React.FC<CardManagerProps> = ({ cards }) => {
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