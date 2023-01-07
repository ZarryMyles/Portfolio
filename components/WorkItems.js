import React from "react";
import { hoverCursor } from "./elements/hoverCursor";
import { PrimaryButton, OutlineButton } from "./elements/buttons";

const projects = [
  {
    title: "Adoptapet",
    image: "/images/ProjectImgs/adoptapet.png",
    p1: "A Full-stack Web application to tackle the issue of stray animals",
    p2: "Deployed Locally using seperate Linux virtual machines for frontend, backend and backup purposes.",
    tech: "Python, Flask, Tailwind CSS, MySQL",
    sourceCode: "https://github.com/ZarryMyles/adoptapet",
    liveDemo: "",
    buttons: 1,
  },
  {
    title: "SCM using Blockchain",
    image: "/images/ProjectImgs/SCM.png",
    p1: "Created a full-stack Supply Chain Management web app that runs on the Ethereumn network.",
    p2: "Smart contracts were created and used with Solidity with the app running on a Ganache Ethereum test network.",
    tech: "ReactJs, NodeJs, Ganache, Solidity, Truffle, Web3.js, IPFS",
    sourceCode: "https://github.com/ZarryMyles/projEth",
    liveDemo: "",
    buttons: 1,
  },
  {
    title: "Mirius Interni",
    image: "/images/ProjectImgs/mirius.png",
    p1: "A highly dynamic and responsive website built for an Interior-design company",
    p2: "The website was deployed on a Linux server using NGINX and PM2.",
    tech: "ReactJs, Strapi, Tailwind CSS, Nginx, MongoDB",
    sourceCode: "",
    liveDemo: "https://www.miriusinterni.com/",
    buttons: 1,
  },
  {
    title: "Genesis Media",
    image: "/images/ProjectImgs/genesis.png",
    p1: "A responsive website built for a branding company",
    p2: "10+ dependancies were used after optimising and the website was deployed on Github pages.",
    tech: "ReactJs, Tailwind CSS, Github Pages",
    sourceCode: "",
    liveDemo: "https://genesismedia.in/#/",
    buttons: 1,
  },
  {
    title: "Shradha.design",
    image: "/images/ProjectImgs/shradha.png",
    p1: "A responsive portfolio website with lots of animations built for a designer",
    p2: "Framer Motion, Animate.Css and Swiper were some of the dependancies used to pull off the animations.",
    tech: "ReactJs, Tailwind CSS, Vercel (Hosting)",
    sourceCode: "https://github.com/ZarryMyles/sam/tree/master",
    liveDemo: "https://www.shradha.design/",
    buttons: 2,
  },
];

export const WorkItemsMob = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          className="mx-3 rounded-lg bg-dark text-light-text mb-16"
          key={project.title}
        >
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

export const WorkItemsDesk = ({ cursorShow, cursorHide }) => {
  return (
    <div className="flex flex-col my-[100px] gap-[100px] z-10 ">
      {projects.map((project) => (
        <div
          onMouseEnter={cursorHide}
          onMouseLeave={cursorShow}
          className="w-[1000px] z-20 relative bg-no-repeat bg-center bg-fixed bg-clip-border bg-contain h-[470px] flex justify-center items-center odd:ml-auto hover:shadow-2xl transition-all duration-300 ease-in-out"
          style={{
            background: `linear-gradient(0deg, rgba(4, 4, 4, 0.65), rgba(4, 4, 4, 0.65)), url(${project.image});`,
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="font-montserrat-extrabold text-[40px] text-light-text">
            {project.title}
          </h1>
          <WorkModalDesk
            p1={project.p1}
            p2={project.p2}
            tech={project.tech}
            sourceCode={project.sourceCode}
            liveDemo={project.liveDemo}
            buttons={project.buttons}
          />
          <hoverCursor />
        </div>
      ))}
    </div>
  );
};

export const WorkModalDesk = ({
  p1,
  p2,
  tech,
  sourceCode,
  liveDemo,
  buttons,
}) => {
  return (
    <div className="flex pt-[24px] px-[30px] pb-[34px] -left-[500px] absolute bg-dark rounded-lg flex-col gap-[40px] max-w-[450px] ">
      <p className="text-[18px] text-light-text font-montserrat">
        {p1}
        <span className="block mt-[28px]">{p2}</span>
      </p>
      <div className=" flex flex-col">
        <h1 className="font-montserrat-bold text-light-text text-[20px] leading-6 mb-4">
          Tech Stack
        </h1>
        <div className="flex flex-wrap gap-2">
          {tech.split(",").map((tech) => (
            <span className="bg-dark-gray leading-7 text-light-text px-3 py-[5px] rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {buttons === 1 &&
        (sourceCode ? (
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <PrimaryButton className="" content="Source Code" />
          </a>
        ) : (
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <PrimaryButton content="See Live" />
          </a>
        ))}
      {buttons === 2 && (
        <div className="flex flex-row gap-4">
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <PrimaryButton content="Source Code" />
          </a>
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <OutlineButton
              content="See Live"
              border="#DE3C3F"
              textColor="#E3E6E8"
            />
          </a>
        </div>
      )}
    </div>
  );
};
