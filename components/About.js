import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-dark text-light-text container mx-auto px-[25px] py-14"
    >
      <div className="mx-auto flex flex-col items-center ">
        <h1 className="text-2xl leading-9 font-montserrat-bold">About me</h1>
        <img src="/images/profile.png" alt="hero" className="my-6 rounded-lg" />
        <div className="font-montserrat-medium text-lg">
          <p>
            I help{" "}
            <span className="font-montserrat-bold">
              designers, agencies and businesses
            </span>{" "}
            bring their ideas to life.
          </p>
          <br />
          <p>
            Based in Bangalore, I'm a{" "}
            <span className="font-montserrat-bold">MERN</span> stack Developer
            who's <span className="font-montserrat-bold">detail oriented </span>
            and make sure that the final product is pixel perfect.
          </p>
          <br />
          <p>
            Powered by Figma, VS Code and coffee, I can turn your requirements
            into CMS-ified websites streamlined for the best on{" "}
            <span className="font-montserrat-bold">time</span> and
            <span className="font-montserrat-bold"> on budget</span>.
          </p>
        </div>
        <a
          target="_blank"
          href={process.env.RESUME_URL}
          className="px-5 py-[14px] bg-primary text-xl rounded-[4px] font-montserrat-bold mt-12"
        >
          Resume
        </a>
      </div>
    </section>
  );
};
