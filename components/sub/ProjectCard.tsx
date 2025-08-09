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
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-700/40 via-[#2A0E61]/40 to-cyan-700/40 transition-all duration-300 group-hover:from-purple-500/70 group-hover:to-cyan-500/70 group-hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.5)]">
        <div className="relative overflow-hidden rounded-[10px] bg-[#060214]/90 backdrop-blur-sm h-full shadow-lg">
          <div className="overflow-hidden">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="object-cover w-full h-[250px] transform transition-transform duration-500 group-hover:scale-[1.07]"
            />
          </div>
          <div className="relative p-5">
            <h1 className="text-xl font-semibold text-white tracking-tight">{title}</h1>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed pr-8 line-clamp-5">{description}</p>
            <a
              href={githubProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors border border-white/10"
            >
              <Image src="/github.svg" alt="GitHub" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
