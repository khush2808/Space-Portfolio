import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspinsm:hidden"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Khush Shah
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
          </div>
        </div>

        <div className="hidden sm:flex flex-row gap-4 items-center">
  {Socials.map((social) => (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      key={social.name}
      aria-label={social.name}
      title={social.name}
      className="w-7 h-7 flex items-center justify-center overflow-hidden rounded"
    >
      <Image
        src={social.src}
        alt={social.name}
        width={28}
        height={28}
        className="w-7 h-7 object-cover"
      />
    </a>
  ))}
   {/* <a href="https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view" target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume" className="flex items-center gap-2 group">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
       className="w-6 h-6 text-gray-300 group-hover:text-white transition"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 9V3.5L19.5 9H14z" />
    </svg>
     <span className="text-sm text-gray-300 group-hover:text-white transition hidden md:inline">Resume</span>
  </a> */}
</div>

      </div>
    </div>
  );
};

export default Navbar;
