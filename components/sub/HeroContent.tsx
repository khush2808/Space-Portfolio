"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div
      className="flex flex-row items-center justify-center px-20 pl-10 md:mt-40 lg:mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        > */}
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
        
        {/* </motion.div> */}

        <div
          className="flex flex-col  gap-6 mt-16 md:mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          <h1 className="Welcome-text text-[32px] px-2 pr-4 py-2">
            Khush Shah
          </h1>
          </span>
          <span>
            {"\n "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Software Engineer{"\n "}
            </span>
            {"\n "}
        </span>
        </div>

        {/* <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          AIR 48 ICPC Regionalist&apos;24 | Expert on Codeforces (1606) | Knight on LeetCode (2005) | 4★ CodeChef (1982). Full Stack Developer skilled in Next.js, TypeScript, Gen-AI, and building scalable systems. 2000+ DSA problems solved.
        </motion.p> */}
        {/* <motion.a
          href="https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view"
          target="_blank"
          rel="noopener noreferrer"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          My Resume
          <FaExternalLinkAlt className="inline-block ml-2 align-middle" size={14} />
        </motion.a> */}

        
      </div>

      <div
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </div>
    </div>
  );
};

export default HeroContent;
