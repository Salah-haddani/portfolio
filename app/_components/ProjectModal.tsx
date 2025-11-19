"use client";
import { useState } from "react";

interface ProjectModalProps {
    media: string[];
    onClose: () => void;
  }

export default function ProjectModal({ media, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % media.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + media.length) % media.length);

  const current = media[index];
  const isVideo = current.endsWith(".mp4") || current.endsWith(".webm");

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="relative bg-zinc-900 p-4 rounded-xl w-[90%] md:w-[70%]">
        
        <button
          className="absolute top-3 right-3 text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex items-center justify-center h-[400px]">
          {isVideo ? (
            <video
              src={current}
              controls
              className="h-full rounded-lg"
            ></video>
          ) : (
            <img src={current} className="h-full rounded-lg object-contain" />
          )}
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ›
        </button>
      </div>
    </div>
  );
}
