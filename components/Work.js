import React from "react";
import { WorkItemsMob, WorkItemsDesk } from "./WorkItems";

export const Work = ({ cursorShow, cursorHide }) => {
  return (
    <>
      {/* Mobile */}
      <section className="bg-light-text md:hidden text-dark container mx-auto flex flex-col items-center">
        <h1 className="font-montserrat-bold text-2xl leading-[34px] mt-[88px] mb-6">
          Work
        </h1>
        <div className="flex flex-col gap-16">
          <WorkItemsMob />
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden mx-auto md:flex flex-col mt-[100px]">
        {/* Design Elements (Try to make this modular somehow? :) ) */}
        <div className="h-full relative w-full ">
          <h1 className="absolute text-[#DADDE0] top-[120px] left-[20px] font-montserrat-extrabold text-[120px] leading-[135px] -rotate-90">
            Work
          </h1>
        </div>
        {/* Actual Work items */}
        <WorkItemsDesk cursorShow={cursorShow} cursorHide={cursorHide} />
      </section>
    </>
  );
};
