import { useEffect, useState } from "react";

export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  }, []);

  return [
    {
      element: ".section-title",
      animation: {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
    },
    {
      element: ".hero-title",
      animation: {
        delay: 500,
        origin: windowWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".hero-cta",
      animation: {
        delay: 1000,
        origin: windowWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".about-wrapper__image",
      animation: {
        delay: 600,
        origin: "bottom",
      },
    },
    {
      element: ".about-wrapper__info",
      animation: {
        delay: 1000,
        origin: windowWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".project-wrapper__text",
      animation: {
        delay: 500,
        origin: windowWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".project-wrapper__image",
      animation: {
        delay: 1000,
        origin: windowWidth > 768 ? "right" : "bottom",
      },
    },
    {
      element: ".contact-wrapper",
      animation: {
        delay: 800,
        origin: "bottom",
      },
    },
  ];
};