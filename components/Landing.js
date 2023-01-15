import React from "react";
import { PrimaryButton } from "./elements/buttons";

export const Landing = () => {
  return (
    <section id="hero" className="min-h-screen container mx-auto">
      <div className="hero-title font-montserrat-medium md:font-montserrat px-[22px] md:px-[108px] h-screen flex flex-col justify-center items-start">
        <p
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-2xl md:text-[38px] leading-[34px] md:leading-[62px]"
        >
          Hi, I'm{" "}
          <span className="font-montserrat-bold text-primary">Mahanth</span>.
          <br />I design and build
          <span className="font-montserrat-bold"> websites </span>
          focused on <span className="hidden md:block" />
          <span className="font-montserrat-bold ">
            {" "}
            simplicity and performance
          </span>
          .
        </p>
        <a
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="200"
          href="#contact"
          className="hidden md:block mt-[14px]"
        >
          <PrimaryButton content="Get in touch" />
        </a>
        <p className="md:hidden flex flex-row items-center justify-center text-xl leading-5 font-montserrat-bold mt-9">
          Know More
          <span className="arrow primary next ml-[15px]" />
          <span className="arrow secondary next" />
        </p>
      </div>
      {/* Arrows at bottom of section */}
      <div className="hidden mb-5 md:flex flex-row items-center justify-center absolute bottom-0 left-0 right-0">
        <p className="flex flex-row items-center justify-center text-xl leading-5 font-montserrat-bold rotate-90">
          <span className="arrow primary next ml-[15px]" />
          <span className="arrow secondary next" />
        </p>
      </div>
    </section>
  );
};
