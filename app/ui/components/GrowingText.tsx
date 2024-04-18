import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { randomize } from '@/app/Utils/TextUtil';
import { GrowingTextProps } from '@/app/Interface/interface';

const GrowingText: React.FC<GrowingTextProps> = ({ inputText }) => {
  const [visibleText, setVisibleText] = useState<string[]>([]);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    if (showFullText) {
      setVisibleText(inputText.split(''));
    } else {
      const interval = setInterval(() => {
        setVisibleText((prevVisibleText) => {
          const nextCharIndex = prevVisibleText.length;
          return inputText.substring(0, nextCharIndex + 1).split('');
        });
      }, 10); // Adjust the interval time to control the speed of the reveal

      return () => clearInterval(interval);
    }
  }, [inputText, showFullText]);

  const handleClick = () => {
    setShowFullText(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="space-y-4">
          {/* Header element added here */}
          <h1 className="text-xl font-semibold text-center text-gray-800 mb-2">Interactive Text Display</h1>
          <h2 className="text-lg font-medium leading-tight text-gray-900 cursor-pointer" onClick={handleClick}>
            {visibleText.map((char, index) => (
              <motion.span
                key={index}
                initial={{ ...randomize() }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.002 }} 
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GrowingText;
