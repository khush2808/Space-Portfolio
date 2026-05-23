"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";

import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 px-6 md:px-12 lg:px-20 pt-40 md:pt-44 lg:pt-36 w-full z-[20]"
    >
      <div className="h-full w-full lg:flex-[1.35] flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
        <div
          className="flex flex-col gap-4 text-5xl md:text-6xl font-bold text-white max-w-[680px] lg:max-w-[1120px] w-auto h-auto"
        >
          <h1 className="Welcome-text text-[36px] md:text-[44px] px-2 pr-4 py-2">
            Khush Shah
          </h1>
          <span className="text-5xl md:text-7xl lg:text-8xl leading-none lg:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-300 to-teal-300">
            Software Engineer
          </span>
        </div>

        <motion.div
          variants={slideInFromTop}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-1"
        >
          <a
            href="#projects"
            className="py-3 px-6 text-center text-white cursor-pointer rounded-lg min-w-[160px] bg-gradient-to-r from-rose-500/35 via-amber-500/25 to-teal-500/25 border border-amber-300/25 shadow-[inset_0_0_14px_rgba(251,191,36,0.2)] hover:from-rose-500/45 hover:via-amber-500/35 hover:to-teal-500/35 transition"
          >
            View Work
          </a>
          <a
            href="https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 text-center text-amber-100 cursor-pointer rounded-lg min-w-[160px] border border-amber-300/35 hover:bg-amber-300/10 transition"
          >
            Resume
            <FaExternalLinkAlt className="inline-block ml-2 align-middle" size={13} />
          </a>
        </motion.div>
      </div>

      <div
        className="hidden lg:flex lg:flex-[0.65] h-full justify-center items-center"
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
