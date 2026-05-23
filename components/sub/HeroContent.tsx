"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-36 lg:pt-24 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box mx-auto lg:mx-0 mt-4 md:mt-6 max-w-full py-2.5 px-4 border border-[#7042f88b] opacity-[0.9]"
        >
          <h2 className="Welcome-text text-xs sm:text-sm md:text-base font-medium whitespace-normal text-center">
            Software Intern at Cisco · Competitive Programmer · Full-stack Developer
          </h2>
        </motion.div>

        <div
          className="flex flex-col gap-4 mt-4 md:mt-6 text-5xl md:text-6xl font-bold text-white max-w-[680px] w-auto h-auto"
        >
          <h1 className="Welcome-text text-[36px] md:text-[44px] px-2 pr-4 py-2">
            Khush Shah
          </h1>
        </div>

        <motion.div
          variants={slideInFromTop}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-1"
        >
          <a
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg min-w-[160px]"
          >
            View Work
          </a>
          <a
            href="https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 text-center text-cyan-200 cursor-pointer rounded-lg min-w-[160px] border border-cyan-500/40 hover:bg-cyan-500/10 transition"
          >
            Resume
            <FaExternalLinkAlt className="inline-block ml-2 align-middle" size={13} />
          </a>
        </motion.div>
      </div>

      <div
        className="hidden lg:flex w-full h-full justify-center items-center"
      >
        <motion.div variants={slideInFromRight(0.8)}>
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
