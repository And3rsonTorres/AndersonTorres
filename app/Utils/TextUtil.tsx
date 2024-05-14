import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Generates a random object with x, y, and opacity properties, used for the initial and exit animations of the `AnimatedCharacters` component.
 * @returns {Object} An object with random x, y, and opacity values.
 */
export const randomize = () => {
  return {
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    opacity: 0,
  };
};
/**
 * Renders a string of text with each character animated individually using the Framer Motion library.
 *
 * @param {string} text - The text to be rendered.
 * @param {string} gradientClass - A CSS class that defines the gradient to be applied to the text.
 * @returns {React.ReactNode} - A React component that renders the animated text.
 */
export const AnimatedCharacters = ({
  text,
  gradientClass,
}: {
  text: string;
  gradientClass: string;
}) =>
  text.split("").map((char, index) =>
    char === " " ? (
      <span key={index + char}>&nbsp;</span>
    ) : (
      <motion.span
        key={index + char} // Ensuring unique key for each character
        initial={randomize()}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={randomize()}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${gradientClass}`}
      >
        {char}
      </motion.span>
    )
  );
/**
 * A React component that renders a sticky image with a fading overlay effect based on the user's scroll progress.
 *
 * @param {Object} props - The component props.
 * @param {string} props.imgUrl - The URL of the image to be displayed.
 * @returns {JSX.Element} - The rendered sticky image component.
 */
export const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${12 * 2}px)`,
        top: 12,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

/**
 * A React component that renders an overlay with a subheading and heading, with a parallax scrolling effect.
 *
 * @param {Object} props - The component props.
 * @param {string} props.subheading - The subheading text to display.
 * @param {string} props.heading - The heading text to display.
 * @returns {JSX.Element} - The rendered overlay component.
 */
export const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

export const CardBackgroundStyle =
  "border-2 border-indigo-500 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-emerald-700 dark:to-emerald-500";
export const InputStyle =
  "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";
