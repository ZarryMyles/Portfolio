import React from "react";
import { WorkItemsMob, WorkItemsDesk } from "./WorkItems";

export default function Work({ showModal, hideModal, modalVisible }) {
  const projects = [
    {
      itemNo: 1,
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
      itemNo: 2,
      title: "Shradha.design",
      image: "/images/ProjectImgs/shradha.png",
      p1: "A responsive portfolio website with lots of animations built for a designer",
      p2: "Framer Motion, Animate.Css and Swiper were some of the dependancies used to pull off the animations.",
      tech: "ReactJs, Tailwind CSS, Vercel (Hosting)",
      sourceCode: "https://github.com/ZarryMyles/sam/tree/October-2023-changes",
      liveDemo: "https://www.shradha-b.com/",
      buttons: 2,
    },
    {
      itemNo: 3,
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
      itemNo: 4,
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
      itemNo: 5,
      title: "SCM using Blockchain",
      image: "/images/ProjectImgs/SCM.png",
      p1: "Created a full-stack Supply Chain Management web app that runs on the Ethereumn network.",
      p2: "Smart contracts were created using Solidity and used with the app running on a Ganache Ethereum test network.",
      tech: "ReactJs, NodeJs, Ganache, Solidity, Truffle, Web3.js, IPFS",
      sourceCode: "https://github.com/ZarryMyles/projEth",
      liveDemo: "",
      buttons: 1,
    },
  ];

  return (
    <>
      {/* Mobile */}
      <section
        onClick={hideModal}
        className="bg-light-text md:hidden text-dark container mx-auto flex flex-col items-center"
      >
        <h1
          data-aos="zoom-in"
          data-aos-duration="300"
          className="font-mont font-bold text-2xl leading-[34px] mt-[88px] mb-6"
        >
          Work
        </h1>
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <WorkItemsMob
              key={index}
              itemNo={project.itemNo}
              title={project.title}
              image={project.image}
              p1={project.p1}
              p2={project.p2}
              tech={project.tech}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
              buttons={project.buttons}
            />
          ))}
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden mx-auto md:flex flex-col mt-[100px]">
        {/* Design Elements (Try to make this modular somehow? :) ) */}
        <div className="h-full relative w-full ">
          <h1 className="absolute text-[#DADDE0] top-[120px] left-[20px] font-mont font-extrabold text-[120px] leading-[135px] -rotate-90">
            Work
          </h1>
          <h1 className="absolute text-[#DADDE0] top-[650px] right-[20px] font-mont font-extrabold text-[120px] leading-[135px] -rotate-90">
            Work
          </h1>
          <h1 className="absolute text-[#DADDE0] top-[1650px] left-[20px] font-mont font-extrabold text-[120px] leading-[135px] -rotate-90">
            Work
          </h1>
          <h1 className="absolute text-[#DADDE0] top-[2180px] right-[20px] font-mont font-extrabold text-[120px] leading-[135px] -rotate-90">
            Work
          </h1>
        </div>
        {/* Actual Work items */}
        {projects.map((project, index) => (
          <WorkItemsDesk
            key={index}
            itemNo={project.itemNo}
            title={project.title}
            image={project.image}
            p1={project.p1}
            p2={project.p2}
            tech={project.tech}
            sourceCode={project.sourceCode}
            liveDemo={project.liveDemo}
            buttons={project.buttons}
            showModal={showModal}
            modalVisible={modalVisible}
          />
        ))}
      </section>
    </>
  );
}
