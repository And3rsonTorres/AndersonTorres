"use client";
import { about2, timelines } from "@/public/data";
import InfoCard from "../ui/components/InfoCard";
import Timeline from "../ui/components/TimeLine";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import Modal from "../ui/components/Modal";
import ContactForm from "../ui/components/ContactForm";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:grid md:grid-cols-2 gap-0">
        <InfoCard title="About Me" inputText={about2} />
        <Image
          src="/BikePicture.png"
          alt="Me on a motorcycle"
          className="order-1 z-0 max-w-md md:max-w-2xl my-10"
        />
      </div>
      <Timeline items={timelines} />
      <Modal
        title="Thanks For Contacting me"
        isOpen={isOpen}
        onClose={closeModal}
      >
        <ContactForm />
      </Modal>
      <button
        className={`bg-primary font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1 m-10
      ${isOpen ? "invisible" : ""}`}
        onClick={openModal}
      >
        Do you Want to Colaborate or need help with something?
      </button>
    </div>
  );
}
export default About;
