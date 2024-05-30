import { Link } from "@nextui-org/react";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio page",
};
const Portfolio: React.FC = () => {
  return (
    <div className="prose lg:prose-xl text-center m-auto dark:prose-invert">
      <h1>Developer Portfolio: Where Passion Meets Expertise</h1>
      <p>
        The digital realm is brimming with software developers, each vying for
        attention. However, this portfolio website stands out as a testament to
        a unique blend of technical prowess and artistic flair.
      </p>
      <h2>A Developer's Journey: From Passion to Proficiency</h2>
      <p>
        The journey into the world of software development wasn't just a career
        choice, but a calling. This portfolio offers a glimpse into this
        journey, showcasing the evolution from a budding programmer to a
        seasoned professional. This narrative not only humanizes the profile but
        also resonates with aspiring developers who are charting their own
        paths.
      </p>
      <h2>Technical Expertise Meets Design Elegance</h2>
      <p>
        The proficiency in React, Next.js, NextUI, TailwindCSS, MongoDB, and
        Prisma is not merely a laundry list of buzzwords. Instead, this
        portfolio demonstrates how these tools are wielded to craft digital
        experiences that are both functional and visually appealing. The clean
        lines, intuitive navigation, and thoughtful use of light and dark modes
        underscore the commitment to user-centric design.
      </p>
      <h2>Beyond Code: A Visionary Collaborator</h2>
      <p>
        This portfolio isn't just about code; it's about ideas. It reveals a
        passion for innovation and an eagerness to collaborate on projects that
        push the boundaries of technology. This makes the developer more than
        just a coder; they're a visionary partner who can contribute to the
        success of any tech-driven endeavor.
      </p>
      <h2>
        Crafting a Compelling Developer Portfolio: Lessons from This Example
      </h2>
      <p>
        Building a standout portfolio website is a challenge for many
        developers. This approach offers valuable lessons. It focuses on
        showcasing not only technical skills but also personality and passion.
        It highlights the most impactful projects, providing detailed
        descriptions and visuals that showcase problem-solving abilities and
        creativity.
      </p>
      <h2>Empowering Your Developer Journey</h2>
      <p>
        This portfolio isn't just an inspiration; it's a call to action. It
        encourages developers to invest in their online presence, to showcase
        their skills in a way that is both informative and engaging. It also
        serves as a reminder that a portfolio is not a static document, but a
        living testament to one's evolving skills and aspirations.
      </p>
      <h2>Connect with the Developer: A Future of Collaboration</h2>
      <p>
        I urge you to explore this portfolio website and witness firsthand the
        fusion of technical expertise and creative vision. If you're a potential
        employer or collaborator, don't hesitate to reach out. The developer is
        not just a coder; they're a catalyst for innovation, ready to turn your
        digital dreams into reality.
      </p>
      <h4>Engage with the Developer:</h4>
      <div className="justify-evenly-spaced flex flex-row gap-2">
        <Link
          href="https://anderson-torres.vercel.app"
          aria-label="Portfolio"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          Portfolio
        </Link>

        <Link
          href="https://dev.to/and3rsontorres"
          aria-label="dev.to"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          dev.to
        </Link>

        <Link
          href="https://www.linkedin.com/in/elnito"
          aria-label="LinkedIn"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          LinkedIn
        </Link>
      </div>
      <p>
        Remember, the developer's journey is still unfolding. By connecting with
        them, you're not just gaining a talented developer; you're joining a
        community of innovators who believe in the power of technology to shape
        a brighter future.
      </p>
    </div>
  );
};

export default Portfolio;
