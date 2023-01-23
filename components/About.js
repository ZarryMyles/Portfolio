import React from "react";
import { PrimaryButton } from "./elements/buttons";

export const About = () => {
  return (
    <>
      {/* Desktop View */}
      <section
        id="about"
        className="text-light-text mb-[210px] mx-auto hidden md:flex flex-col relative mt-[110px] pt-[50px]"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          className="text-[#DADDE0] ml-[108px] text-[120px] leading-[90px] font-montserrat-extrabold"
        >
          About Me
        </h1>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="absolute z-0 top-[50px] right-0 bg-primary h-[150px] w-1/4"
        />
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="bg-dark z-10 flex flex-row w-[80%] -pb-16 relative"
        >
          <img
            src="/images/profile.png"
            alt="pic of me :)"
            className="w-[450px] h-[450px] absolute top-24 left-[108px]"
          />
          <div className="flex flex-col items-start justify-center ml-[640px] mt-24 mb-14 mr-[110px] tracking-[0.02em]">
            <p className="text-light-text text-base font-montserrat-light">
              I help designers, agencies and businesses bring their ideas to
              life.
            </p>
            <p className="text-light-text text-base font-montserrat-light mt-8">
              Based in Bangalore, I'm a MERN stack Developer who's detail
              oriented and makes sure that the final product is pixel perfect.
            </p>
            <p className="text-light-text text-base font-montserrat-light mt-8">
              Powered by Figma, VS Code and ☕, I can turn your requirements
              into CMS-ified websites streamlined for performance, on time and
              in budget.
            </p>
            <a
              target="_blank"
              href={process.env.RESUME_URL}
              className="mt-[21px]"
            >
              <PrimaryButton content="Resume" />
            </a>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        id="aboutMobile"
        className="md:hidden min-h-screen bg-dark text-light-text container mx-auto px-[25px] py-14"
      >
        <div className="mx-auto flex flex-col items-center ">
          <h1 className="text-2xl leading-9 font-montserrat-bold">About me</h1>
          <img
            src="/images/profile.png"
            alt="hero"
            className="my-6 rounded-lg"
          />
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
              who's{" "}
              <span className="font-montserrat-bold">detail oriented </span>
              and make sure that the final product is pixel perfect.
            </p>
            <br />
            <p>
              Powered by Figma, VS Code and coffee, I can turn your requirements
              into <span className="font-montserrat-bold">CMS-ified</span>{" "}
              websites streamlined for{" "}
              <span className="font-montserrat-bold">performance</span>,
              <span className="font-montserrat-bold"> on time</span> and
              <span className="font-montserrat-bold"> in budget</span>.
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
    </>
  );
};
