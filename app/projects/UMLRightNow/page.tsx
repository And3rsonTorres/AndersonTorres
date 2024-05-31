/**
 * Renders the UML Right NOW page, which provides an overview of the application and its key features.
 * This page serves as the main entry point for the UML Right NOW web application.
 */
import { Link } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introducing UML Right NOW",
};

function UMLRightNow() {
  return (
    <div className="prose lg:prose-xl text-center m-auto dark:prose-invert">
      <h1>
        Introducing UML Right NOW: Revolutionizing Degree Pathway Planning
      </h1>

      <h2>Overview</h2>
      <p>
        UML Right NOW is an innovative web app designed to automate the process
        of degree pathway planning for students at the University of
        Massachusetts Lowell (UML). By selecting a major and optionally
        uploading an unofficial transcript, students can generate comprehensive
        degree pathways in just a few clicks. The app determines remaining
        course requirements and sorts them into upcoming semesters, effectively
        replacing the need for manual schedule building and academic advising
        appointments.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Automated Degree Pathways:</strong> Quickly generate entire
          degree plans by selecting a major. The algorithm takes into account
          prerequisite chains and course availability, ensuring that students
          have a clear, conflict-free path to graduation.
        </li>
        <li>
          <strong>Transcript Integration:</strong> Upload unofficial transcripts
          to get personalized course recommendations. The system automatically
          identifies completed courses and filters out fulfilled requirements,
          providing a tailored academic plan.
        </li>
        <li>
          <strong>Account Management:</strong> Save and view degree pathways for
          future reference. Students can create multiple pathways, allowing them
          to explore different academic scenarios and make informed decisions
          about their education.
        </li>
      </ul>

      <h2>Running the App</h2>
      <p>To run UML Right NOW locally:</p>
      <ol>
        <li>
          Ensure Node.js is installed. This is essential for running the
          server-side code.
        </li>
        <li>
          Navigate to the project directory: <code>cd uml-right-now</code>.
        </li>
        <li>
          Install dependencies: <code>npm i --legacy-peer-deps</code> (or
          <code>npm i --force</code> if needed). This step installs all
          necessary libraries and modules for the application to function
          correctly.
        </li>
        <li>
          Start the development server: <code>npm run dev</code>. This command
          launches the app in development mode, allowing you to test and
          interact with it locally.
        </li>
      </ol>
      <p>
        To build the project for production, follow the steps above and then
        run: <code>npm run build</code>. This prepares the app for deployment by
        optimizing the code and assets.
      </p>

      <h2>Tech Stack</h2>
      <p>
        <strong>Frontend:</strong> Built with Next.js and React, using MUI for
        components and Tailwind CSS for styling. These technologies ensure a
        responsive and modern user interface.
      </p>
      <p>
        <strong>Backend:</strong> Also powered by Next.js, with authentication
        handled by NextAuth.js, encryption by Bcrypt.js, and data stored in
        MongoDB using Mongoose. This stack provides a robust and secure
        environment for handling user data and application logic.
      </p>
      <p>
        <strong>Hosting:</strong> The entire application is hosted on Vercel.
        Vercel&apos;s platform offers seamless deployment, scalability, and
        performance optimization for Next.js applications.
      </p>

      <h2>Future Potential</h2>
      <p>
        UML Right NOW has the potential to significantly streamline the academic
        planning process, saving students time and ensuring they stay on track
        with their degree requirements. Future enhancements could include
        integration with official university systems for real-time updates,
        advanced customization options for pathway planning, and expanded
        support for other universities.
      </p>
      <p>
        Imagine a future where students can access real-time updates on course
        availability, receive alerts about prerequisite changes, and explore
        various academic scenarios through an intuitive and interactive
        interface. The potential for this application to become a central hub
        for academic planning is immense.
      </p>

      <p>
        Moreover, the framework established by UML Right NOW can be adapted to
        other universities, offering a scalable solution to a widespread problem
        in higher education. By leveraging the power of automation and
        intelligent algorithms, UML Right NOW represents a significant leap
        forward in academic planning technology.
      </p>
      <div className="justify-evenly-spaced flex flex-col gap-2">
        <Link
          href="https://github.com/UML-Right-NOW/UML-Right-NOW"
          aria-label="UML Right NOW GitHub Repository"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          Explore the project and contribute on GitHub.
        </Link>
        <Link
          href="https://uml-right-now.vercel.app"
          aria-label="UML Right NOW Live Application"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          For more details, visit the live application.
        </Link>
      </div>
    </div>
  );
}
export default UMLRightNow;
