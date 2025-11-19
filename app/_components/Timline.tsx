import React from "react";

export default function Timline() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 relative">
      
      
      <div className="max-w-3xl mx-auto  relative">
        <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-green-400 to-transparent -left-4 md:-left-10">
          <span className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-full bg-green-500 shadow-[0_0_0_1px_#ffffff10] rotate-180 left-1"></span>
        </div>
        <div className="border-b border-gray-800">
          <h1 className="text-sm font-bold text-black my-8 relative">
            <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-green-300 bg-gray-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
            July - August 2025 | Web Developer | Internship
          </h1>
          <div className="mb-8">
            <div className="flex flex-row space-x-2 items-start my-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-green-500 mt-[3px] flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-black text-sm md:text-base">
              <strong>At Siemens:</strong> Contributed to enhancing an internal web interface and automating data workflows through CSV processing for analysis and reporting, while developing the dashboard interface and implementing front-end logic in JavaScript with a focus on user experience.
              <br />
              <strong>Technologies:</strong> Flask, Shell scripting, AG Grid, Bootstrap, WinSCP, JavaScript.
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-800">
          <h1 className="text-sm font-bold text-black my-8 relative">
            <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-gray-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
            February - June 2025 | Software Engineer | Internship
          </h1>
          <div className="mb-8">
            <div className="flex flex-row space-x-2 items-start my-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-green-500 mt-[3px] flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-black text-sm md:text-base">
              <strong>At Kasineuf:</strong> Contributed to developing a solution to digitalize workflows in the real estate and construction sectors, designing secure RESTful APIs for seamless front-end integration, and building responsive interfaces with reusable components focused on user experience.
              <br />
              <strong>Technologies:</strong> Angular, NodeJS, Express.js, Power BI, RxJS, Tailwind, npm, Git.
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-sm font-bold text-black my-8 relative">
            <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-gray-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
            July 2024 | Web Developer | Internship
          </h1>
          <div className="mb-8">
            <div className="flex flex-row space-x-2 items-start my-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-green-500 mt-[3px] flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-black text-sm md:text-base">
              <strong>At Orange:</strong> Collaborated within a team to develop a mobile application facilitating communication
              for people with speech difficulties.
              <br />
              <strong>Technologies:</strong> Figma, JavaScript, FastAPI, Python.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
