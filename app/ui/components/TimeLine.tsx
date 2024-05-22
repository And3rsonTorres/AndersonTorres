"use client";
import { TimelineItem } from "@/app/Interface/interface";
import { CardBackgroundStyle } from "@/app/Utils/TextUtil";
import { motion } from "framer-motion";

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className={`flex flex-col md:max-w-2xl m-10`}>
      <h1
        className={`${CardBackgroundStyle} text-xl font-semibold text-center`}
      >
        Timeline
      </h1>
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className={`flex flex-col ${
              isEven
                ? "md:items-end md:text-end"
                : "md:items-start md:text-start"
            } ${index === 0 ? "mt-10" : ""}`}
            initial={{ opacity: 0, x: isEven ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div
              className={`${CardBackgroundStyle} p-4 rounded-xl my-4 shadow-md ${
                isEven ? "md:ml-auto" : "md:mr-auto"
              } md:w-3/4`}
            >
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-md mb-1">{item.date}</p>
              <p className="leading-tight mt-2">{item.description}</p>
              {item.skillsLearned.length > 0 && (
                <div className="mt-2">
                  <h4 className="font-semibold mb-1 group:">Skills Learned:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skillsLearned.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-indigo-100 dark:bg-indigo-500 hover:scale-105 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
