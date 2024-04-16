import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardFooter, Image, Link, Chip, Button } from "@nextui-org/react";
import Github from "@/public/githubIcon";
import { CardProps } from '@/app/Interface/interface';
import { useCardContext } from '@/app/lib/CardContext';

/**
 * A React functional component that renders a project card with a header, image, and footer.
 *
 * @param {CardProps} props - The props for the project card.
 * @param {string} props.id - The unique identifier for the project.
 * @param {string} props.version - The version of the project.
 * @param {string} props.header - The header text for the project card.
 * @param {string} [props.imagePath] - The path to the image for the project card. Defaults to "/defaultImagePath.png".
 * @param {string} props.insidelink - The URL for the project's internal link.
 * @param {string} [props.githubLink] - The URL for the project's GitHub link. Defaults to "#".
 * @param {string} props.description - The description text for the project card.
 * @param {string} [props.alternateName] - An alternate name for the project card image.
 * @returns {React.ReactElement} - The project card component.
 */
const ProjectCard: React.FC<CardProps> = ({
  id,
  version,
  header,
  imagePath = "/defaultImagePath.png",
  insidelink,
  githubLink = "#",
  description,
  alternateName,
}: CardProps): React.ReactElement => {
  const [showDescription, setShowDescription] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const active = useCardContext();

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
    if (!showDescription) {
      active?.setActiveCard(id);
    } else {
      active?.setActiveCard(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) {
        setShowDescription(false);
        active?.setActiveCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  useEffect(() => {
    if (active?.activeCard !== id) {
      setShowDescription(false);
    }
  }, [active?.activeCard, id]);

  return (
    <Card
      isFooterBlurred
      ref={cardRef}
      className="h-[300px] border-2 rounded-xl shadow-xl"
    >
      <CardHeader className="z-10 absolute top-1 flex-col items-start">
        <Chip className="bg-success text-tiny p-0.5">{version}</Chip>
        <h4 className="font-medium text-2xl">{header}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={alternateName || "Card background"}
        className="z-0 w-[300px] h-full rounded-lg object-cover"
        src={imagePath}
      />
      <CardFooter className="absolute bottom-0 w-full flex justify-between items-center p-4 bg-white/30 dark:bg-white/40 border-t max-h-52 overflow-scroll border-white rounded-b-lg">
        <div>
          {showDescription ? (
            <p className="text-black font-medium text-sm">{description}</p>
          ) : (
            <div className="flex flex-row items-center gap-10">
              <Link
                href={insidelink}
                className="button bg-primary rounded-full px-1.5 py-0.5"
              >
                Open
              </Link>
              <Button
                onClick={toggleDescription}
                className="button bg-primary rounded-full px-1.5 py-0.5"
              >
                Description
              </Button>
              <Link isBlock href={githubLink} className="github-link w-10">
                <Github />
              </Link>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
