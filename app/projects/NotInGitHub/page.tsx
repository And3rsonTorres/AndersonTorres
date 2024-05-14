/**
 * A React functional component that renders a message indicating that the content is not available, and provides a button to contact the developer for more information.
 *
 * The component uses the `useRouter` hook from Next.js to redirect the user to the "/contact" route when the button is clicked.
 *
 * The component is styled using Tailwind CSS classes, and uses the `motion.div` component from the Framer Motion library to animate the content on mount and exit.
 */

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NotInGitHub: React.FC = () => {
  const router = useRouter();

  const redirectToGitHub = () => {
    router.push("/contact");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-screen items-center justify-center bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4"
      role="alert"
    >
      <h1 className="font-bold">This Content is not Available yet</h1>
      <p>Repository might be private.</p>
      <button
        className="mt-4 text-white bg-indigo-500 hover:bg-indigo-700 border-4 border-indigo-500 hover:border-indigo-700 font-bold rounded-xl p-2"
        onClick={redirectToGitHub}
      >
        Contact Me for more information
      </button>
    </motion.div>
  );
};

export default NotInGitHub;
