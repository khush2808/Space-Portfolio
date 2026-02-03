"use client";
import React from "react";
import { motion } from "framer-motion";
import { experienceData, educationData, achievementData, leadershipData } from "@/constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center pt-10 pb-20 px-6 md:px-12"
    >
      <div className="w-full max-w-7xl">
        {/* Main Heading */}
        <div className="w-full flex flex-col items-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 py-6 md:py-10 text-center">
            Experience and Achievements
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2"></div>
        </div>

        {/* Experience, Achievements, and Education - Side by side on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Experience Section - Left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              Experience
            </h3>
            <div className="space-y-8">
              {experienceData.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-xl font-semibold text-white">{item.role}</h4>
                    <span className="text-sm text-purple-400 font-medium">{item.period}</span>
                  </div>
                  <p className="text-cyan-400 font-medium">{item.company}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.summary}</p>
                  <ul className="space-y-2 mt-3">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="text-purple-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Achievements and Education stacked */}
          <div className="flex-1 w-full flex flex-col gap-8 lg:gap-12">
            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
                Achievements
              </h3>
              <ul className="space-y-3">
                {achievementData.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <span className="text-white font-medium">{item.title}</span>
                      <span className="text-gray-400 text-sm"> — {item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education Section - Below Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
                Education
              </h3>
              <div className="space-y-6">
                {educationData.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                      <span className="text-sm text-purple-400 font-medium">{item.period}</span>
                    </div>
                    <p className="text-cyan-400 font-medium">{item.institution}</p>
                    {item.description && (
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership & Volunteering Section - Below Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
                Leadership & Volunteering
              </h3>
              <div className="space-y-6">
                {leadershipData.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                      <span className="text-sm text-purple-400 font-medium">{item.period}</span>
                    </div>
                    <p className="text-cyan-400 font-medium">{item.organization}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.location}</p>
                    <ul className="space-y-2 mt-3">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                          <span className="text-purple-400 mt-1.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      </div>
    </section>
  );
};

export default Experience;
