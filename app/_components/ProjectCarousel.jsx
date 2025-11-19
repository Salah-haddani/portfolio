"use client";
import React, { useState } from "react";
import ProjectItems from "./ProjectItems"; // Assuming ProjectItems is in the same directory
import "../../app/globals.css";

// RENAMED COMPONENT
const ProjectCarousel = ({ projects }) => {
  // State to track the index of the currently visible project
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Navigation Handlers ---

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      // Loop back to the start after the last project
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      // Loop back to the end after the first project
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Get the current project to display
  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full overflow-hidden py-10 px-4 sm:px-0">
      <div className="flex justify-center items-center">
        {/* Project Item Display */}
        {/* Added utility classes for responsive sizing on mobile/small screens */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          {currentProject && (
            <ProjectItems
              title={currentProject.title}
              description={currentProject.description}
              image={currentProject.image}
              link={currentProject.link}
              sourceCode={currentProject.sourceCode}
              media={currentProject.media}
            />
          )}
        </div>
      </div>

      {/* --- Navigation Arrows --- */}

      {/* Previous Button (Left) */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 ml-2 p-3 sm:p-4 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
        aria-label="Previous project"
      >
        <span className="text-xl sm:text-2xl">&#10094;</span> {/* Left Arrow */}
      </button>

      {/* Next Button (Right) */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 p-3 sm:p-4 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
        aria-label="Next project"
      >
        <span className="text-xl sm:text-2xl">&#10095;</span>{" "}
        {/* Right Arrow */}
      </button>

      {/* --- Index Indicator (Optional) --- */}
      <div className="text-center mt-4 text-sm text-gray-400">
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  );
};

export default ProjectCarousel;
