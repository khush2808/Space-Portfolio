"use client";
import React from "react";
import { motion } from "framer-motion";
import { experienceData, educationData, achievementData } from "@/constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center pt-10 pb-20 px-6 md:px-12"
    >
      <div className="w-full max-w-4xl space-y-12">
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 pl-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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

      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      </div>
    </section>
  );
};

export default Experience;
