"use client";
import Image from "next/image";
import React from "react";


interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  github?: string;
}

const ProjectCard = ({ src, title, description, link, github }: Props) => {
  const githubProfileLink =
    github || "https://github.com/khush2808";
  return (
    <div
      role="link"
      onClick={() => window.open(link, "_blank")}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer"
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="object-cover w-full h-[250px]"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 pr-10">{description}</p>

        <a
          href={githubProfileLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
        >
          <Image src="/github.svg" alt="GitHub" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
