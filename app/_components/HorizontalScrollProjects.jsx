"use client";
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
