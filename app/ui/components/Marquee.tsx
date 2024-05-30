/**
 * A React functional component that renders a marquee-style animation with the provided children.
 *
 * The marquee effect is achieved by doubling the children array and animating the content to create a seamless loop.
 * The animation is controlled using the `motion.div` component from the Framer Motion library.
 *
 * @param {MarqueeProps} props - The props for the Marquee component.
 * @param {React.ReactNode} props.children - The content to be displayed in the marquee.
 * @param {string} props.marqueeStyle - The CSS class name to apply to the marquee container.
 * @returns {React.ReactElement} - The rendered Marquee component.
 */
import React from "react";
import { motion } from "framer-motion";
import { MarqueeProps } from "@/app/Interface/interface";

const Marquee: React.FC<MarqueeProps> = ({ children, marqueeStyle }) => {
  const childrenArray = React.Children.toArray(children);

  // Double the children array to ensure seamless loop
  const infiniteChildren = [...childrenArray, ...childrenArray];

  return (
    <div className={`${marqueeStyle}`}>
      <motion.div
        className="flex"
        animate={{ x: "-50%" }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {infiniteChildren.map((child, index) => (
          <motion.div className="px-2" key={index} whileHover={{ scale: 1.1 }}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
