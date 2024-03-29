import React from "react";
import { PrimaryButton } from "./elements/buttons";

export const Landing = () => {
  return (
    <section id="hero" className="min-h-screen container mx-auto">
      <div className="hero-title font-mont font-medium px-[22px] md:px-[108px] h-screen flex flex-col justify-center items-start">
        <p
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-out-cubic"
          className="hidden md:block md:text-[38px] leading-[34px] md:leading-[62px]"
        >
          Hi, I'm{" "}
          <span className="font-mont font-bold text-primary">Mahanth</span>.
          <br />I design and build
          <span className="font-mont font-bold"> websites </span>
          focused on <span className="hidden md:block" />
          <span className="font-mont font-bold ">
            {" "}
            simplicity and performance
          </span>
          .
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-out-cubic"
          className="text-2xl md:hidden leading-[34px]"
        >
          Hi, I'm{" "}
          <span className="font-mont font-bold text-primary">Mahanth</span>.
          <br />I design and build
          <span className="font-mont font-bold"> websites </span>
          focused on <span className="hidden md:block" />
          <span className="font-mont font-bold ">
            {" "}
            simplicity and performance
          </span>
          .
        </p>
        <a
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="300"
          href="#contact"
          className="hidden md:block mt-[14px]"
        >
          <PrimaryButton content="Get in touch" />
        </a>
        <a
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="300"
          href="#about"
          className="md:hidden"
        >
          <p className="flex flex-row items-center justify-center text-xl leading-5 font-mont font-bold mt-9">
            Know More
            <span className="arrow primary next ml-[15px]" />
            <span className="arrow secondary next" />
          </p>
        </a>
      </div>
      {/* Arrows at bottom of section */}
      <div className="hidden mb-5 md:flex flex-row items-center justify-center absolute bottom-0 left-0 right-0">
        <p className="flex flex-row items-center justify-center text-xl leading-5 font-mont font-bold rotate-90">
          <span className="arrow primary next ml-[15px]" />
          <span className="arrow secondary next" />
        </p>
      </div>
    </section>
  );
};
