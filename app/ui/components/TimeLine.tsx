/**
 * Renders a timeline component that displays a list of items with titles, dates, descriptions, and developed abilities.
 *
 * @param items - An array of timeline item objects, each with the following properties:
 *   - title: The title of the timeline item.
 *   - date: The date associated with the timeline item.
 *   - description: The description of the timeline item.
 *   - skillsLearned: An array of skills or abilities developed during the timeline item.
 */
import { TimelineItem } from "@/app/Interface/interface";
import { CardBackgroundStyle } from "@/app/Utils/TextUtil";
import { motion } from "framer-motion";

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="flex flex-col items-center mx-auto my-10 p-4">
      <h1
        className={`${CardBackgroundStyle} text-lg md:text-3xl font-semibold text-center px-4 md:px-6`}
      >
        Timeline
      </h1>
      <div className="w-full overflow-hidden">
        {items
          .slice()
          .reverse()
          .map((item, index) => {
            return (
              <motion.div
                key={index}
                className={`flex flex-col w-full ${index === 0 ? "mt-10" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`${CardBackgroundStyle} p-4 rounded-xl my-4 w-full max-w-md md:max-w-2xl`}
                >
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-md mb-1">{item.date}</p>
                  <p className="leading-tight mt-2">{item.description}</p>
                  {item.skillsLearned.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-semibold mb-1">
                        Developed abilities:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skillsLearned.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-indigo-100 dark:bg-indigo-500 hover:scale-105 px-2 py-1 rounded-full text-sm"
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
    </div>
  );
};

export default Timeline;
