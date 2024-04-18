
/**
 * Represents the properties of a card component.
 *
 * @property {string} id - The unique identifier for the card.
 * @property {string} version - The version of the card.
 * @property {string} header - The header text for the card.
 * @property {string} [imagePath] - The path to the image for the card.
 * @property {string} insidelink - The URL for the link inside the card.
 * @property {string} [githubLink] - The URL for the GitHub link associated with the card.
 * @property {string} description - The description text for the card.
 * @property {string} [alternateName] - An alternate name for the card.
 */
export interface CardProps {
  id: string;
  version: string;
  header: string;
  imagePath?: string;
  insidelink: string;
  githubLink?: string;
  description: string;
  alternateName?: string;
}
/**
 * Represents the context for the active card in the application.
 *
 * @property {string | null} activeCard - The ID of the currently active card, or null if no card is active.
 * @property {(cardId: string | null) => void} setActiveCard - A function to set the active card by its ID.
 */
export interface CardContextType {
  activeCard: string | null;
  setActiveCard: (cardId: string | null) => void;
}
/**
 * Represents the properties of a card manager component.
 *
 * @property {CardProps[]} cards - An array of card properties.
 */
export interface CardManagerProps {
  cards: CardProps[];
}
/**
 * Represents the properties of a growing text component.
 *
 * @property {string} inputText - The text to be displayed in the growing text component.
 */
export interface GrowingTextProps {
  inputText: string;
}
  