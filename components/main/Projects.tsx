import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-8 pb-20"
      id="projects"
    >
      <div className="w-full flex flex-col items-center mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 py-6 md:py-10 text-center">
          Featured Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-20">
        <ProjectCard
          src="/claude-code-clone.png"
          title="Claude Code Clone"
          description="An AI-powered CLI coding assistant built with Gemini, LangGraph agent workflows, MCP tool integration, PostgreSQL memory, GitHub access, and web search."
          link="https://github.com/khush2808/claude-code-clone"
          key="1"
          github="https://github.com/khush2808/claude-code-clone"
          technologies={["Gemini", "LangGraph", "MCP", "PostgreSQL"]}
        />
        <ProjectCard
          src="/flyhigh.jpg"
          title="FlyHigh"
          description="An event-driven airline management system with Authentication, Flight, Booking, and Reminder microservices. Uses RabbitMQ and Nodemailer for asynchronous notifications."
          link="https://github.com/khush2808/FlyHigh"
          key="2"
          github="https://github.com/khush2808/FlyHigh"
          technologies={["Node.js", "Express", "RabbitMQ", "MySQL"]}
        />
        <ProjectCard
          src="/syncstream.png"
          title="SyncStream"
          description="SyncStream is a video calling platform enabling seamless virtual meetings with features like screen sharing, chat, and secure video calls."
          link="https://sync-stream-app.vercel.app/"
          key="3"
          github="https://github.com/khush2808/sync-stream-app"
          technologies={["Next.js", "Video", "Realtime"]}
        />
        <ProjectCard
          src="/storify.png"
          title="Storify"
          description="A storage app where users can store, rename, delete, share, sort, and organize files with a clean file-management workflow."
          link="https://storifyy.vercel.app"
          key="4"
          github="https://github.com/khush2808/storify"
          technologies={["Next.js", "Storage", "Auth"]}
        />
        <ProjectCard
          src="/portfolio.png"
          title="Space Portfolio"
          description="A responsive portfolio built with Next.js, Tailwind CSS, Framer Motion, and space-themed visual assets to present projects, skills, and experience."
          link="https://khushshah.vercel.app"
          key="5"
          github="https://github.com/khush2808/space-portfolio"
          technologies={["Next.js", "Tailwind", "Framer Motion"]}
        />
        <ProjectCard
          src="/financemate.png"
          title="FinanceMate"
          description="A personal finance tool that helps users manage budgets, track expenses, and visualize spending habits through clear charts."
          link="https://finance-mate.vercel.app/"
          key="6"
          github="https://github.com/khush2808/finance-mate"
          technologies={["React", "Charts", "Finance"]}
        />
        <ProjectCard
          src="/cryptotracker.png"
          title="Crypto Tracker"
          description="A web app to track cryptocurrency prices in real time, inspect price history, and monitor market changes."
          link="https://crypto-tracker-khush.vercel.app/"
          key="7"
          github="https://github.com/khush2808/crypto-tracker-app"
          technologies={["React", "API", "Crypto"]}
        />
        <ProjectCard
          src="/tomato.png"
          title="Tomato - Food Delivery"
          description="A food delivery app for browsing menus, placing orders, and tracking food with a smooth customer-facing flow."
          link="https://food-delivery-frontend-no0l.onrender.com/"
          key="8"
          github="https://github.com/khush2808/zomato-clone"
          technologies={["React", "Node.js", "MongoDB"]}
        />
        <div className="col-span-full flex flex-col items-center space-y-4 mt-4">
          <p className="text-center text-gray-500 text-sm max-w-2xl">
            Looking for more? Visit my GitHub profile for all repositories, more recent work, and latest projects.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://github.com/khush2808?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-2 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 transition"
            >
              <Image src="/github.svg" alt="" width={16} height={16} className="opacity-80" />
              View All Repos
            </a>
            <a
              href="https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-2 border border-cyan-600/40 text-cyan-300 hover:bg-cyan-600/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM12 18l-4-4h3V9h2v5h3l-4 4z" />
              </svg>
              Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
