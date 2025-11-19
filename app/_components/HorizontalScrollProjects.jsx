"use client";
import React from "react";
import ProjectItems from "../_components/ProjectItems";
import "../../app/globals.css";

const HorizontalScrollProjects = ({ projects }) => {
  return (
    <div className="w-full py-10">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          max-w-6xl 
          mx-auto
        "
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <ProjectItems
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              sourceCode={project.sourceCode}
              media={project.media}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollProjects;

/*"use client";
import React, { useRef } from "react";
import ProjectItems from "../_components/ProjectItems";
import "../../app/globals.css";

const HorizontalScrollProjects = ({ projects }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // width of card
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-10">
      <button
        onClick={scrollLeft}
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-10
          bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full 
          flex items-center justify-center backdrop-blur-sm
        "
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth px-10
          no-scrollbar
        "
      >
        {projects.map((project, index) => (
          <div key={index} className="min-w-[260px] md:min-w-[300px]">
            <ProjectItems
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              sourceCode={project.sourceCode}
              media={project.media}
            />
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-10
          bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full
          flex items-center justify-center backdrop-blur-sm
        "
      >
        ›
      </button>
    </div>
  );
};

export default HorizontalScrollProjects;
*/
/*"use client";
import React, { useRef, useState } from "react";
import ProjectItems from "../_components/ProjectItems";
import "../../app/globals.css";

const HorizontalScrollProjects = ({ projects }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const duplicatedProjects = [...projects, ...projects];

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className={`flex min-w-full`}
        style={{
          animation: "scroll 30s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
          width: `${duplicatedProjects.length * 300}px`,
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] mx-4">
            <ProjectItems
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              sourceCode={project.sourceCode}
              media={project.media}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollProjects;
*/
