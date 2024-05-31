/**
 * The `Towwise` component is the main entry point for the TowWise application. It provides an overview of the application, its background, key features, and instructions for running the application locally. The component also includes information about the technology stack used to build the application and its future potential.
 *
 * @returns {JSX.Element} The rendered `Towwise` component.
 */
import { Link } from "@nextui-org/react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "TowWise: Your Ultimate Guide to Vehicle Towing Capacities",
};

function Towwise() {
  return (
    <div className="prose lg:prose-xl text-center m-auto dark:prose-invert">
      <h1>TowWise: Your Ultimate Guide to Vehicle Towing Capacities</h1>

      <h2>Overview</h2>
      <p>
        TowWise is a web application designed to help users determine the
        maximum towing capacity of their vehicles. This tool is invaluable for
        individuals needing to tow trailers or other heavy loads, offering
        insights into safe and optimal towing limits based on specific vehicle
        models. Whether you&apos;re planning a move, a camping trip, or any
        activity that requires towing, TowWise ensures you&apos;re equipped with
        the right information.
      </p>

      <h2>Background</h2>
      <p>
        The need for TowWise arose from a common issue observed in the rental
        industry: customers often overestimate their vehicles&apos; towing
        capabilities. This can lead to dangerous situations on the road.
        Recognizing the safety risks involved, the developer created TowWise to
        provide accurate and accessible towing information, ensuring users can
        make informed decisions.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Towing Capacities:</strong> Provides data for various vehicle
          models from 2018-2023, with plans to include more models. This feature
          helps users quickly find the towing capacity of their specific
          vehicle.
        </li>
        <li>
          <strong>VIN Decoding:</strong> Future integration to decode U.S.
          Vehicle Identification Numbers (VIN) for precise towing capacities.
          This will allow users to get even more accurate information based on
          their vehicle&apos;s unique VIN.
        </li>
        <li>
          <strong>Trailer Categories:</strong> Upcoming feature to categorize
          possible trailers based on vehicle capabilities. Users will be able to
          see what types of trailers their vehicle can safely tow.
        </li>
        <li>
          <strong>Autocomplete Search:</strong> Enhanced user experience with
          autocomplete functionality for vehicle models. This feature makes it
          easier for users to find their vehicle model quickly.
        </li>
      </ul>

      <h2>Running TowWise</h2>
      <p>To run TowWise locally, follow these steps:</p>
      <ol>
        <li>Clone the repository from GitHub.</li>
        <li>
          Install dependencies using <code>npm install</code>. This command will
          download all necessary libraries and modules for the application.
        </li>
        <li>
          Start the development server with <code>npm run dev</code>. This will
          launch the app in development mode, allowing you to test and interact
          with it locally.
        </li>
      </ol>

      <h2>Tech Stack</h2>
      <p>
        <strong>Frontend:</strong> Built with Next.js and React, styled with
        TailwindCSS, and components from NextUI. These technologies ensure a
        responsive, modern, and user-friendly interface.
      </p>
      <p>
        <strong>Backend:</strong> Utilizes Next.js and MongoDB with Mongoose for
        database operations. This stack provides a robust and secure environment
        for handling user data and application logic.
      </p>
      <p>
        <strong>Hosting:</strong> The application is hosted on Vercel.
        Vercel&apos;s platform offers seamless deployment, scalability, and
        performance optimization for Next.js applications.
      </p>

      <h2>Future Potential</h2>
      <p>
        TowWise aims to expand its features, including real-time VIN decoding,
        detailed trailer categorizations, and broader vehicle model support. By
        enhancing these functionalities, TowWise can become an essential tool
        for anyone involved in towing, ensuring safety and reliability.
      </p>
      <p>
        Imagine a future where users can access real-time updates on vehicle
        capabilities, receive alerts about trailer compatibility, and explore
        various towing scenarios through an intuitive interface. The potential
        for TowWise to become a comprehensive guide for towing is immense.
      </p>
      <p>
        Moreover, the framework established by TowWise can be adapted to other
        regions and vehicle markets, offering a scalable solution to a
        widespread need. By leveraging the power of accurate data and
        user-friendly design, TowWise represents a significant advancement in
        towing safety and convenience.
      </p>
      <div className="justify-evenly-spaced flex flex-row gap-2">
        <Link
          href="https://github.com/And3rsonTorres/TowWise"
          aria-label="TowWise GitHub Repository"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          Explore the project and contribute on GitHub.
        </Link>
        <Link
          href="https://tow-wise.vercel.app"
          aria-label="TowWise Live Application"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          For more details, visit the live application.
        </Link>
      </div>
    </div>
  );
}
export default Towwise;
