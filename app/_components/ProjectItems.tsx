
"use client";
import Image from "next/image";

interface ProjectItemsProps {
  title: string;
  description: string;
  image: string;
  link: string;
  sourceCode: string;
  media: string[];
}

const ProjectItems = ({
  title,
  description,
  image,
  link,
  sourceCode,
  media,
}: ProjectItemsProps) => {
  const openProject = () => {
    const event = new CustomEvent("open-project", { detail: media });
    window.dispatchEvent(event);
  };

  return (
    <div
      onClick={openProject}
      className="relative group block p-2 cursor-pointer"
    >
      <div className="rounded-2xl overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative">
        <div className="relative">
          <div className="h-44 sm:h-60 md:h-44 w-full relative transition duration-500 bg-black/10 group-hover:bg-transparent">
            <Image
              alt={title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 object-cover object-center"
              sizes="100vw"
              src={image}
              layout="fill"
              quality={75}
            />
          </div>

          <div className="p-4">
            <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
              {title}
            </h4>
            <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;

