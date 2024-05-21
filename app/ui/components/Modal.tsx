/**
 * Renders a modal dialog with a title, content, and a close button.
 *
 * @param isOpen - A boolean indicating whether the modal should be displayed.
 * @param onClose - A function to be called when the modal is closed.
 * @param children - The content to be displayed inside the modal.
 * @param Title - The title to be displayed at the top of the modal.
 * @returns A React component that renders the modal.
 */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalProps } from "@/app/Interface/interface";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, Title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-screen h-full z-50 fixed backdrop-blur-sm top-0 left-0 flex flex-wrap justify-center items-center overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/30 dark:bg-white/50 w-9/12 max-w-3xl rounded-xl shadow p-5 justify-center shadow-indigo-700 dark:shadow-indigo-400"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="w-full border-b-2 border-gray-300 text-center text-lg mb-4">
              {Title}
            </h1>
            <div className="flex flex-wrap mb-4 pt-4 justify-evenly border-b-2">
              {children}
            </div>
            <button
              className="w-full text-white py-2 px-4 rounded-md bg-danger hover:bg-danger-300 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
