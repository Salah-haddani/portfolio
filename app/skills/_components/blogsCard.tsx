"use client";
import { Skeleton } from "@/components/ui/skelton";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  title: string;
  image: string;
  url: string;
  description: string;
  author?: string;
}

export function CardDemo({
  image,
  title,
  url,
  author,
  description,
}: BlogProps) {
  function getLuminance(hex: string): number {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const a = [r, g, b].map((v) => {
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }

  return (
    <Link href={url} target="_blank" className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer bg-cover overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", // or 'contain'
          backgroundPosition: "center", // Center the image
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={image}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-300 relative z-10">
              {title}
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {author}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

CardDemo.Skeleton = function SkeletonCardDemo() {
  return (
    <div  className="max-w-xs w-[320px] group/card">
      <div
        className={cn(
          "cursor-pointer bg-cover overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        )}
       
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        <Skeleton className="h-10 w-10 rounded-full border-2 object-cover" />

          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-300 relative z-10">
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          </p>
        </div>
      </div>
    </div>
  );
};
