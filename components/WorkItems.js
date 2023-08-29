import React, { useState } from "react";
import { PrimaryButton, OutlineButton } from "./elements/buttons";

export const WorkItemsMob = ({
  title,
  image,
  p1,
  p2,
  tech,
  sourceCode,
  liveDemo,
  buttons,
  itemNo,
}) => {
  return (
    <div
      data-aos={itemNo % 2 ? "fade-left" : "fade-right"}
      data-aos-duration="600"
      className="mx-3 rounded-lg bg-dark text-light-text mb-16"
      key={title}
    >
      <img src={image} alt="hero" className="rounded-t-lg" />
      <div className="py-10 px-7">
        <h1 className="font-mont font-bold text-xl leading-6 mb-4">{title}</h1>
        <p className="text-lg font-mont">{p1}</p>
        <br />
        <p className="text-lg font-mont">{p2}</p>
        <div className="my-10">
          <h1 className="font-mont font-bold text-xl leading-6 mb-4">
            Tech Stack
          </h1>
          <div className="flex flex-wrap gap-2">
            {tech.split(",").map((tech, key) => (
              <span
                key={key}
                className="bg-dark-gray text-light-text font-mont px-3 py-[5px] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {buttons === 1 &&
          (sourceCode ? (
            <a href={sourceCode} target="_blank" rel="noreferrer">
              <PrimaryButton className="" content="Source Code" />
            </a>
          ) : (
            <a href={liveDemo} target="_blank" rel="noreferrer">
              <PrimaryButton content="See Live" />
            </a>
          ))}
        {buttons === 2 && (
          <div className="flex flex-row gap-4">
            <a href={sourceCode} target="_blank" rel="noreferrer">
              <PrimaryButton content="Source Code" />
            </a>
            <a href={liveDemo} target="_blank" rel="noreferrer">
              <OutlineButton
                content="See Live"
                border="#DE3C3F"
                textColor="#E3E6E8"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export const WorkItemsDesk = ({
  title,
  image,
  p1,
  p2,
  tech,
  sourceCode,
  liveDemo,
  buttons,
  itemNo,
}) => {
  const [showModal, setShowModal] = useState(false);
  const togglePopUp = () => setShowModal(!showModal);

  return (
    <div
      data-aos={itemNo % 2 ? "fade-left" : "fade-right"}
      data-aos-duration="600"
      className="flex flex-col my-[100px] gap-[100px] z-10 "
    >
      <div
        key={title}
        onClick={() => togglePopUp()} //This is so the modal closes when clicked outside
        className={
          itemNo % 2
            ? "w-[1000px] z-20 hover:cursor-pointer relative bg-no-repeat bg-center bg-clip-border bg-contain h-[470px] flex justify-center items-center ml-auto hover:shadow-2xl transition-all duration-300 ease-in-out"
            : "w-[1000px] z-20 hover:cursor-pointer relative bg-no-repeat bg-center bg-clip-border bg-contain h-[470px] flex justify-center items-center hover:shadow-2xl transition-all duration-300 ease-in-out"
        }
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(4, 4, 4, 0.65), rgba(4, 4, 4, 0.65)), url(${image})`,
        }}
      >
        <h1 className="font-mont font-extrabold text-[40px] text-light-text">
          {title}
        </h1>
        <WorkModalDesk
          showModal={showModal}
          image={image}
          p1={p1}
          p2={p2}
          tech={tech}
          sourceCode={sourceCode}
          liveDemo={liveDemo}
          buttons={buttons}
        />
      </div>
    </div>
  );
};

export const WorkModalDesk = ({
  p1,
  p2,
  tech,
  sourceCode,
  liveDemo,
  buttons,
  showModal,
}) => {
  return (
    <div
      className={
        showModal
          ? "flex pt-[24px] absolute px-[30px] pb-[34px] bg-dark rounded-lg flex-col gap-[40px] max-w-[450px] "
          : "hidden"
      }
    >
      <p className="text-[18px] text-light-text font-mont">
        {p1}
        <span className="block mt-[28px]">{p2}</span>
      </p>
      <div className=" flex flex-col">
        <h1 className="font-mont font-bold text-light-text text-[20px] leading-6 mb-4">
          Tech Stack
        </h1>
        <div className="flex flex-wrap gap-2">
          {tech.split(",").map((tech, key) => (
            <span
              key={key}
              className="bg-dark-gray leading-7 text-light-text font-mont px-3 py-[5px] rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {buttons === 1 &&
        (sourceCode ? (
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <PrimaryButton className="" content="Source Code" />
          </a>
        ) : (
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <PrimaryButton content="See Live" />
          </a>
        ))}
      {buttons === 2 && (
        <div className="flex flex-row gap-4">
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <PrimaryButton content="Source Code" />
          </a>
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <OutlineButton
              content="See Live"
              border="#DE3C3F"
              textColor="#E3E6E8"
            />
          </a>
        </div>
      )}
    </div>
  );
};
