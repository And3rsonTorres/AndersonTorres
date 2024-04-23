import { motion, } from "framer-motion";

export const randomize = () => {
    return {
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      opacity: 0
    };
  };
  export const AnimatedCharacters = ({
    text,
    gradientClass,
  }: {
    text: string;
    gradientClass: string;
  }) => (
    text.split("").map((char, index) => (
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
    ))
  );
  