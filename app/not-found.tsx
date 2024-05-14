/**
 * Renders a 404 Not Found page with a message and a button to go back to the previous page.
 * This component is used when a requested page does not exist on the website.
 */

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-screen items-center justify-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
      role="alert"
    >
      <h1 className="font-bold">404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        className="text-black bg-slate-200 hover:bg-warning border-4 border-slate-200 hover:text-white font-bold rounded-xl p-2"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </motion.div>
  );
}
