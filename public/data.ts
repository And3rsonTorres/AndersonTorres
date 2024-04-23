import { CardProps } from "@/app/Interface/interface";

export const about = `My name is Anderson Torres, and I was born in the Dominican Republic. I am passionate about using my skills in computer science to create products that can improve society. With both an Associate's and a Bachelor's degree in Computer Science, I am equipped with the knowledge and skills necessary to innovate and create impactful solutions.

One idea that has been close to my heart is to develop a device that could help blind people regain their sight. I believe that technology has the power to transform lives, and by leveraging advancements in computer science, we can create innovative solutions to address real-world challenges.

My goal is to use my expertise in computer science to develop products that not only push the boundaries of innovation but also have a positive impact on society. I am excited about the opportunity to make a difference in the lives of others.`;

export const projects = `I have worked on several projects throughout my time at UMass Lowell. These projects have taught me the importance of teamwork and collaboration, and I am eager to learn more about the industry.`;

export const cardsData: CardProps[] = [
    {
      id: 'Cpp',
      version: '1',
      header: 'C++ Portfolio',
      imagePath: 'https://github.com/And3rsonTorres/CPP_Porfolio/assets/106359275/7fdc5ef7-ae06-473f-a349-4f7cbe637a48',
      insidelink: '/projects/CPP',
      githubLink: 'https://github.com/And3rsonTorres/CPP_Porfolio',
      description: 'C++ Portfolio showcasing projects I have worked on during COMP IV of the UMASS LOWELL.',
      alternateName: 'C++ Portfolio'
    },
    {
      id: 'Porfolio',
      version: '0.1',
      header: 'Portfolio Website',
      imagePath: '/images/project-beta.jpg',
      insidelink: '/',
      githubLink: 'https://github.com/And3rsonTorres/AndersonTorres',
      description: 'This is a portfolio website for my projects. It is currently in beta.',
      alternateName: 'Portfolio Website'
    },
    {
      id: 'Towwise',
      version: '0.1',
      header: 'TowWise',
      imagePath: '/images/project-beta.jpg',
      insidelink: '/projects/beta',
      githubLink: 'https://github.com/And3rsonTorres/TowWise',
      description: 'TowWise is a web application designed to provide users with information about the maximum towing capacity of their vehicles. The app serves as a valuable tool for individuals who need to tow trailers, caravans, or other loads, offering insights into the safe and optimal towing limits based on their specific vehicle models.',
      alternateName: 'TowWise'
    }]