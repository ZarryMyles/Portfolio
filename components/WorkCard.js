import React from "react";

const projects = [
  {
    title: "Adoptapet",
    image: "/images/ProjectImgs/adoptapet.png",
    p1: "A Full-stack Web application to tackle the issue of stray animals",
    p2: "Deployed Locally using seperate Linux virtual machines for frontend, backend and backup purposes.",
    tech: "Python, Flask, Tailwind CSS, MySQL",
    sourceCode: "https://github.com/ZarryMyles/adoptapet",
    liveDemo: "",
  },
  {
    title: "Supply Chain Management using Blockchain",
    image: "/images/ProjectImgs/SCM.png",
    p1: "Created a full-stack Supply Chain Management web app that runs on the Ethereumn network.",
    p2: "Smart contracts were created and used with Solidity with the app running on a Ganache Ethereum test network.",
    tech: "ReactJs, NodeJs, Ganache, Solidity, Truffle, Web3.js, IPFS",
    sourceCode: "https://github.com/ZarryMyles/projEth",
    liveDemo: "",
  },
  {
    title: "Mirius Interni",
    image: "/images/ProjectImgs/mirius.png",
    p1: "A highly dynamic and responsive website built for an Interior-design company",
    p2: "The website was deployed on a Linux server using NGINX and PM2.",
    tech: "ReactJs, Strapi, Tailwind CSS, Nginx, MongoDB",
    sourceCode: "",
    liveDemo: "https://www.miriusinterni.com/",
  },
  {
    title: "Genesis Media",
    image: "/images/ProjectImgs/genesis.png",
    p1: "A responsive website built for a branding company",
    p2: "10+ dependancies were used after optimising and the website was deployed on Github pages.",
    tech: "ReactJs, Tailwind CSS, Github Pages",
    sourceCode: "",
    liveDemo: "https://genesismedia.in/#/",
  },
  {
    title: "Shradha.design",
    image: "/images/ProjectImgs/shradha.png",
    p1: "A responsive portfolio website with lots of animations built for a designer",
    p2: "Framer Motion, Animate.Css and Swiper were some of the dependancies used to pull off the animations.",
    tech: "ReactJs, Tailwind CSS, Vercel(Hosting)",
    sourceCode: "https://github.com/ZarryMyles/sam/tree/master",
    liveDemo: "https://www.shradha.design/",
  },
];

export const WorkCard = () => {
  return (
    <>
      {projects.map((project) => (
        <div className="mx-3 rounded-lg bg-dark text-light-text mb-16">
          <img src={project.image} alt="hero" className="rounded-t-lg" />
          <div className="py-10 px-7">
            <h1 className="font-montserrat-bold text-xl leading-6 mb-4">
              {project.title}
            </h1>
            <p className="text-lg">{project.p1}</p>
            <br />
            <p className="text-lg">{project.p2}</p>
            <div className="my-10">
              <h1 className="font-montserrat-bold text-xl leading-6 mb-4">
                Tech Stack
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(",").map((tech) => (
                  <span className="bg-dark-gray text-light-text px-3 py-[5px] rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer">
                <button className="bg-primary  block text-xl leading-5 font-montserrat-bold text-light-text px-[14px] py-5 rounded-[4px]">
                  Live Demo
                </button>
              </a>
            )}
            {project.sourceCode && (
              <a href={project.sourceCode} target="_blank" rel="noreferrer">
                <button className="bg-primary mt-5 text-xl leading-5 font-montserrat-bold text-light-text px-[14px] py-5 rounded-[4px]">
                  Source Code
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
