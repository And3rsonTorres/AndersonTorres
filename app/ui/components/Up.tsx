"use client";
import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "@nextui-org/react";

export default function Up() {
  const [visible, setVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 sm:right-8 ${visible ? "visible" : "hidden"} hover:-translate-y-1 hover:scale-110`}
    >
      <Tooltip content="Scroll to Top">
        <Button aria-label="Scroll to Top" onClick={scrollUp} radius="full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Tooltip>
    </div>
  );
}
