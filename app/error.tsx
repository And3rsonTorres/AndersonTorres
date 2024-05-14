/**
 * Renders an error message in a styled alert box with animation.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The error message to display.
 * @returns {React.ReactElement} - The error message component.
 */
"use client";
import React from "react";
import { motion } from "framer-motion";

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-screen items-center justify-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline"> {message}</span>
    </motion.div>
  );
};

export default Error;
