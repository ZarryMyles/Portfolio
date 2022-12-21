import React from "react";
import { WorkCard } from "./WorkCard";

export const Work = () => {
  return (
    <section
      id="work"
      className="bg-light-text text-dark container mx-auto flex flex-col items-center"
    >
      <h1 className="font-montserrat-bold text-2xl leading-[34px] mt-[88px] mb-6">
        Work
      </h1>
      <div className="flex flex-col gap-16">
        <WorkCard />
      </div>
    </section>
  );
};
