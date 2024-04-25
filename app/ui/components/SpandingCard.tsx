import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { randomize } from '@/app/Utils/TextUtil';
import { SpandingCardProps } from '@/app/Interface/interface';
import { Card, CardBody } from '@nextui-org/react';

const SpandingCard: React.FC<SpandingCardProps> = ({ inputText,Title }) => {
  const [visibleText, setVisibleText] = useState<string[]>([]);
  const paragraphs = inputText.split('\n');

  useEffect(() => {
      const interval = setInterval(() => {
        setVisibleText((prevVisibleText) => {
          const nextCharIndex = prevVisibleText.length;
          return paragraphs[0].substring(0, nextCharIndex + 1).split('');
        });
      }, 50); 

      return () => clearInterval(interval);
    
  }, [paragraphs]);


  return (
    <Card className="flex justify-center items-center m-10">
      <CardBody className="p-6 max-w-md mx-auto bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-emerald-700 dark:to-emerald-500  
      opacity-85 rounded-xl shadow-md overflow-hidden 
      md:max-w-2xl hover:opacity-100 hover:shadow-xl
      border-2 border-indigo-500
      ">
        <div className="space-y-4 text-center text-lg text-black dark:text-white">
          <h1 className="text-xl font-semibold text-center  mb-2">{Title}</h1>
          <h2 className="font-medium leading-tight ">
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
      </CardBody>
    </Card>
  );
};

export default SpandingCard;
