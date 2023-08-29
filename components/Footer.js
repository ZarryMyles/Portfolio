import React from "react";

export const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="mx-auto bg-dark flex flex-col items-center text-footer-gray">
        <a href="#top">
          {" "}
          <img
            className="my-[40px] focus:outline-none hover:scale-125 duration-300"
            src="/images/footer-arrow.svg"
            alt="Scroll up"
          />
        </a>
        <div className="flex flex-row mb-7">
          <a
            href="mailto:mahantha.dev@gmail.com"
            className="mr-8 md:hover:-translate-y-[2px] duration-300 "
            target="_blank"
          >
            <img src="/images/Logos/mail.svg" alt="Email" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahanth-n/"
            className="mr-8 md:hover:-translate-y-[2px] duration-300"
            target="_blank"
          >
            <img src="/images/Logos/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/ZarryMyles"
            className="mr-8 md:hover:-translate-y-[2px] duration-300"
            target="_blank"
          >
            <img src="/images/Logos/github.svg" alt="Github" />
          </a>
          <a
            href="https://codepen.io/zarrymyles/"
            target="_blank"
            className="md:hover:-translate-y-[2px] duration-300"
          >
            <img src="/images/Logos/codepen.svg" alt="Codepen" />
          </a>
        </div>
        <div className="h-0.5 w-2/4 bg-[#242424] mb-2" />
        <p className="text-xs leading-5 mb-[14px] font-mont">
          © {new Date().getFullYear()} | Built with ❤️ and ☕ | Designed by{" "}
          <a
            href="https://sam-ebon-psi.vercel.app/"
            target="_blank"
            className="underline hover:text-white duration-200"
          >
            Shradha
          </a>
        </p>
        {/* <a
          className="github-button leading-7 p-2.5 flex flex-row font-mont font-medium bg-[#f5f5f5] rounded-md mb-[30px] text-black"
          href="https://github.com/ZarryMyles"
          data-size="large"
          aria-label="Follow @ZarryMyles on GitHub"
        >
          <svg
            viewBox="0 0 16 16"
            width="28"
            height="28"
            className="octicon octicon-mark-github mr-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          Follow me @ZarryMyles
        </a> */}
      </div>
    </footer>
  );
};
