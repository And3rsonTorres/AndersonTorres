import React, { createContext, useState, useContext, ReactNode } from 'react';
 import { CardContextType } from '../Interface/interface';


 const CardContext = createContext<CardContextType | undefined>(undefined);
/**
 * The CardContext is a React context that provides access to the card-related state and functions.
 * It is used to manage the state and behavior of cards in the application.
 */

export const useCardContext = () => useContext(CardContext);

export const CardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <CardContext.Provider value={{ activeCard, setActiveCard }}>
      {children}
    </CardContext.Provider>
  );
};
