import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { randomize } from '@/app/Utils/TextUtil';
import { GrowingTextProps } from '@/app/Interface/interface';

const GrowingText: React.FC<GrowingTextProps> = ({ inputText,Title }) => {
  const [visibleText, setVisibleText] = useState<string[]>([]);
  const [showFullText, setShowFullText] = useState(false);
  const paragraphs = inputText.split('\n');

  useEffect(() => {
    if (!showFullText) {
      const interval = setInterval(() => {
        setVisibleText((prevVisibleText) => {
          const nextCharIndex = prevVisibleText.length;
          return paragraphs[0].substring(0, nextCharIndex + 1).split('');
        });
      }, 50); 

      return () => clearInterval(interval);
    }
  }, [paragraphs, showFullText]);


  return (
    <div className="flex justify-center items-center m-10">
      <div className="p-6 max-w-md mx-auto bg-white dark:bg-emerald-100 opacity-85 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:opacity-100 hover:shadow-xl">
        <div className="space-y-4 text-center text-lg">
          <h1 className="text-xl font-semibold text-center text-gray-800 mb-2">{Title}</h1>
          <h2 className="font-medium leading-tight text-gray-900">
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
