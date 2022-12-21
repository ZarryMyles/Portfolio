import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-light-text container mx-auto py-14 flex flex-col items-center"
    >
      <h1 className="font-montserrat-bold text-2xl leading-[34px] mb-6">
        Contact
      </h1>
      <p className="font-montserrat-medium text-lg leading-[30px] mb-4">
        Let's get to Work
      </p>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/mahanth-n/"
        className="px-5 py-[14px] bg-primary border-light-text border-[2.5px] text-xl rounded-[4px] font-montserrat-bold"
      >
        LinkedIn
      </a>
    </section>
  );
};
