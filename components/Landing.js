import React from "react";

export const Landing = () => {
  return (
    <section id="hero" className="min-h-screen container mx-auto">
      <div className="hero-title font-montserrat-medium px-[22px] h-screen flex flex-col justify-center items-start">
        <p className="text-2xl leading-[34px]">
          Hi, I'm{" "}
          <span className="font-montserrat-bold text-primary">Mahanth</span>.
          <br />I design and build
          <span className="font-montserrat-bold"> websites </span>
          focused on{" "}
          <span className="font-montserrat-bold ">
            {" "}
            simplicity and performance
          </span>
          .
        </p>
        <p className="flex flex-row items-center justify-center text-xl leading-5 font-montserrat-bold mt-9">
          Know More
          <span className="arrow primary next ml-[15px]" />
          <span className="arrow secondary next" />
        </p>
      </div>
    </section>
  );
};
