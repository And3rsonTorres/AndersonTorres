/**
 * Renders the CPP Portfolio page, which showcases Anderson Torres' work for the Comp IV course at the University of Massachusetts Lowell.
 * This page includes an introduction, key features, tech stack, notable projects, learning outcomes, and future enhancements.
 * It also provides a link to view the portfolio PDF and a link to the GitHub repository.
 */
//import PdfViewer from "@/app/ui/components/PdfViewer";
import { Link } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPP Portfolio",
};

export default function CPP() {
  if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== "undefined") {
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      window.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    } else {
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      global.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    }
  }

  return (
    <>
      <div className="prose lg:prose-xl text-center m-auto dark:prose-invert">
        <h1>CPP Portfolio: A Comprehensive Project Showcase</h1>

        <h2>Introduction</h2>
        <p>
          Anderson Torres&apos; CPP Portfolio is a culmination of his work for
          the Comp IV course at the University of Massachusetts Lowell. This
          repository showcases a variety of projects, demonstrating proficiency
          in C++ and software development skills.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Project Showcase:</strong> Includes a range of projects that
            highlight different aspects of C++ programming and problem-solving
            abilities.
          </li>
          <li>
            <strong>Documentation:</strong> Each project is well-documented,
            providing insights into the objectives, methodologies, and outcomes.
          </li>
          <li>
            <strong>Screenshots:</strong> Visual representations of projects to
            give a clearer understanding of the outputs and interfaces.
          </li>
        </ul>

        <h2>Tech Stack</h2>
        <p>
          <strong>Primary Language:</strong> C++
        </p>
        <p>
          <strong>Development Tools:</strong> Visual Studio Code and G++ as
          suited for different projects.
        </p>
        <p>
          <strong>Libraries and Frameworks:</strong> Utilizes standard C++
          libraries,SFML,BOOST and Valgrind.
        </p>

        <h2>Notable Projects</h2>
        <ul>
          <li>
            <strong>DNA aligment:</strong> Focuses on data structures and
            algorithms, showcasing implementation and optimization techniques.
          </li>
          <li>
            <strong>Sokoban:</strong> A GUI-based application, demonstrating the
            integration of graphical interfaces with backend logic.
          </li>
        </ul>

        <h2>Learning Outcomes</h2>
        <p>Through this portfolio, Anderson has demonstrated:</p>
        <ul>
          <li>Strong understanding of C++ programming.</li>
          <li>Ability to apply theoretical concepts to practical problems.</li>
          <li>
            Proficiency in using development tools and debugging techniques.
          </li>
          <li>Skills in documentation and presentation of technical work.</li>
        </ul>

        <h2>Future Enhancements</h2>
        <p>
          The portfolio serves as a solid foundation for further development.
          Future enhancements could include:
        </p>
        <ul>
          <li>
            <strong>Expanded Project List:</strong> Adding more projects
            covering different aspects of software development.
          </li>
          <li>
            <strong>Collaborative Work:</strong> Including projects developed in
            team settings to showcase collaboration skills.
          </li>
          <li>
            <strong>Advanced Topics:</strong> Exploring areas like machine
            learning, network programming, and system design.
          </li>
        </ul>

        {
          // working around errors that inhibits the PDF viewer from loading in the browser
          //<PdfViewer path="../CPP_Portfolio.pdf" />
        }
        <Link
          href="https://github.com/And3rsonTorres/CPP_Porfolio"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          Catch it on Github
        </Link>
      </div>
    </>
  );
}
