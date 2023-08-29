import React from "react";
import { OutlineButton } from "./elements/buttons";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto flex flex-col items-center justify-start"
    >
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
        className="hidden md:block text-[#DADDE0] text-[120px] leading-[90px] font-mont font-extrabold"
      >
        Connect with me
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="bg-primary w-full text-light-text py-14 md:py-20 flex flex-col items-center"
      >
        <h1 className="block md:hidden font-mont font-bold text-2xl leading-[34px] mb-6">
          Contact
        </h1>
        <p className="font-mont font-medium md:hidden text-lg leading-[30px] mb-4">
          Let's get to Work :)
        </p>
        <p className="font-mont font-bold hidden md:block text-[32px] leading-[60px] mb-5">
          Let's get to Work :)
        </p>
        <a
          className=""
          target="_blank"
          href="https://www.linkedin.com/in/mahanth-n/"
        >
          <OutlineButton
            content="LinkedIn"
            border="#E3E6E8"
            textColor="#E3E6E8"
          />
        </a>
      </div>
    </section>
  );
};
