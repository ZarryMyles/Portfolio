import React from "react";

// Primary Button
export const PrimaryButton = ({ content }) => {
  return (
    <>
      <button className="flex hover:-translate-y-[2px] duration-150 ease-in-out flex-row items-center justify-center px-5 md:px-5 py-[14px] text-xl leading-5 font-montserrat-bold bg-primary rounded-[5px] text-light-text">
        {content}
      </button>
    </>
  );
};

// Outline Button
export const OutlineButton = ({ content, border, textColor }) => {
  return (
    <>
      <button
        className="flex hover:-translate-y-[2px] duration-150 ease-in-out flex-row items-center justify-center px-5 md:px-5 py-[14px] text-lg leading-5 font-montserrat-bold bg-transparent rounded-[4px] border-[2.5px]"
        style={{
          borderColor: border,
          color: textColor,
        }}
      >
        <span className="">{content}</span>
      </button>
    </>
  );
};
