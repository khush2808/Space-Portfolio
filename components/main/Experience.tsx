"use client";
import React from "react";
import { motion } from "framer-motion";
import { experienceData, achievementData } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center py-24 px-6 md:px-12 gap-14"
    >
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
       {/* {Experience &}   */}
       Resume
      </motion.h2>

      {/* Timeline */}
      <div className="w-full max-w-4xl relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-cyan-500/40 to-transparent" />
        <ul className="space-y-10">
          {experienceData.map((item, idx: number) => (
            <motion.li
              key={idx}
              variants={idx % 2 === 0 ? slideInFromLeft(0.2) : slideInFromRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`relative flex flex-col md:flex-row md:items-center gap-4 md:gap-10 ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right" : ""} space-y-2`}>                
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="text-sm text-gray-400 font-medium">{item.company} • {item.period}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.summary}</p>
                <ul className="list-disc text-gray-400 text-sm pl-5 space-y-1">
                  {item.highlights.map((h: string, i: number)=>(
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-3 h-4 w-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 shadow shadow-purple-500/40" />
            </motion.li>
          ))}
        </ul>
      </div>

      {/**
       * Achievements & Resume CTA temporarily disabled per request.
       * To re-enable, remove the surrounding comment block and restore sections below.
       */}
      {false && (
        <>
          <motion.div
            variants={slideInFromLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full max-w-4xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Key Achievements</h3>
            <div className="grid grid-cols-1 gap-6">
              {achievementData.map((a, i: number) => (
                <div key={i} className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-purple-600/40 via-cyan-500/40 to-transparent">
                  <div className="h-full w-full rounded-xl bg-[#05010b]/80 backdrop-blur-sm p-5 flex flex-col gap-3 group-hover:bg-[#070312]/80 transition-colors">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                      {a.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">Provide the exact wording for your two key points and I'll update them.</p>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col items-center gap-5"
          >
            <p className="text-gray-400 text-center max-w-xl text-sm md:text-base">
              Want the full detail (projects, stack depth, problem-solving metrics, and responsibilities)? Grab the latest resume below.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition shadow shadow-purple-700/30"
              >
                View Resume
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM12 18l-4-4h3V9h2v5h3l-4 4z" />
                </svg>
              </a>
              <a
                href="https://github.com/khush2808"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 font-medium text-sm text-cyan-300 border border-cyan-600/40 hover:bg-cyan-600/10 transition"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </>
      )}

      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/encryption.webm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05010b] via-transparent to-[#05010b]" />
      </div>
    </section>
  );
};

export default Experience;
