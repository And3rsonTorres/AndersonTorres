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
export interface SpandingCardProps {
  inputText: string;
  title: string;
}

/**
 * Represents the properties of a marquee component.
 *
 * @property {React.ReactNode} children - The content to be displayed in the marquee.
 * @property {string} marqueeStyle - The CSS class names to apply to the marquee.
 * @property {number} [seconds] - The duration in seconds for the marquee animation.
 */
export interface MarqueeProps {
  children: React.ReactNode;
  marqueeStyle: string;
  seconds?: number;
}
/**
 * Represents an email message.
 *
 * @property {string | undefined} to - The email address of the recipient.
 * @property {string | undefined} from - The email address of the sender.
 * @property {string} subject - The subject line of the email.
 * @property {string} text - The plain text content of the email.
 * @property {string} html - The HTML content of the email.
 */
/**
 * Represents the properties of an email.
 * @property {string | undefined} to - The email address of the recipient.
 * @property {string | undefined} from - The email address of the sender.
 * @property {string} subject - The subject line of the email.
 * @property {string} text - The plain text content of the email.
 * @property {string} html - The HTML content of the email.
 */
export interface EmailProps {
  to: string | undefined;
  from: string | undefined;
  subject: string;
  text: string;
  html: string;
}

/**
 * Represents the properties of a modal component.
 *
 * @property {string} Title - The title of the modal.
 * @property {string | React.ReactNode | JSX.Element} children - The content to be displayed in the modal.
 * @property {boolean} isOpen - Indicates whether the modal is open or closed.
 * @property {() => void} onClose - A function to be called when the modal is closed.
 */
export interface ModalProps {
  Title: string;
  children: string | React.ReactNode | JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}
