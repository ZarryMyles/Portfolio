import React from "react";
import $ from "jquery";

export default function Navbar({ resume }) {
  const links = [
    {
      name: "About",
      link: "#about",
      linkMobile: "#aboutMobile",
      targ: "_self",
    },
    {
      name: "Work",
      link: "#work",
      linkMobile: "#work",
      targ: "_self",
    },
    {
      name: "Contact",
      link: "#contact",
      linkMobile: "#contact",
      targ: "_self",
    },
    {
      name: "Resume",
      link: resume,
      linkMobile: resume,
      targ: "_blank",
    },
  ];

  // Function for mobile navbar slider button
  const handleToggle = () => {
    $("#sideMenu").toggleClass("translate-x-full");
    $("#sideButton").toggleClass("active");
  };

  return (
    <div className="overflow-hidden w-screen">
      {/* Mobile Navbar */}
      <div className="md:hidden overflow-hidden pl-5 py-1 top-0 fixed z-50 w-full flex justify-between items-center h-auto">
        <a href="/#top">
          <img src="/images/Logos/mahanth.svg" alt="Mahanth Logo" />
        </a>
        <nav
          id="sideMenu"
          className="text-xl sideMenu text-light-text fixed  p-24 text-center bg-dark inset-y-0 right-0 transform transition items-center translate-x-full duration-500 ease-in-out uppercase min-h-screen w-full flex z-10 flex-col justify-around min-w-screen"
        >
          {links.map((value, key) => (
            <div key={key} className="block" onClick={handleToggle}>
              <a href={value.linkMobile} target={value.targ} rel="noreferrer">
                {value.name}
              </a>
            </div>
          ))}
        </nav>
        <button onClick={handleToggle} className="z-50 flex" id="sideButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="70"
            viewBox="0 0 200 200"
          >
            <g stroke-width="6.5" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#DE3C3F"
                fill-rule="evenodd"
                stroke="#DE3C3F"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#DE3C3F"
              />
              <path
                d="M72 125.143h28.75"
                fill="#DE3C3F"
                fill-rule="evenodd"
                stroke="#DE3C3F"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#DE3C3F"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#DE3C3F"
                fill-rule="evenodd"
                stroke="#DE3C3F"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#DE3C3F"
                fill-rule="evenodd"
                stroke="#DE3C3F"
              />
            </g>
          </svg>
        </button>
      </div>

      {/* Desktop Navbar */}
      <div
        data-aos="fade-down"
        data-aos-duration="400"
        data-aos-delay="400"
        className="w-full text-dark hidden zed md:flex absolute justify-between items-center px-[108px] md:py-8"
      >
        <a href="/#top" className="flex items-center">
          <img src="/images/Logos/mahanth.svg" alt="Mahanth Logo" />
        </a>
        <div className="flex gap-x-8 font-montserrat-medium flex-row ">
          {links.map((value, key) => (
            <a
              key={key}
              href={value.link}
              target={value.targ}
              rel="noreferrer"
              className="text-lg cursor-pointer leading-8 inline-block hover:text-primary no-underline border-none"
            >
              {value.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
