import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-8 pb-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-20">
        <ProjectCard
          src="/portfolio.png"
          title="My Portfolio"
          description="A personal portfolio website showcasing my projects, skills, and experiences. Designed to highlight my work in web development and software engineering."
          link="https://khushshah.vercel.app"
          key="1"
          github="https://github.com/khush2808/space-portfolio"
        />
        <ProjectCard
          src="/storify.png"
          title="Storify"
          description="Storify is a versatile storage app where users can store, rename, delete, share, and organize all types of files. With features like sorting and file management, it makes organizing your digital assets easy and efficient."
          link="https://storifyy.vercel.app"
          key="2"
          github="https://github.com/khush2808/storify"
        />
        <ProjectCard
          src="/syncstream.png"
          title="SyncStream"
          description="SyncStream is a video calling platform enabling seamless virtual meetings with features like screen sharing, chat, and secure video calls."
          link="https://sync-stream-app.vercel.app/"
          key="3"
          github="https://github.com/khush2808/sync-stream-app"
        />
        <ProjectCard
          src="/cryptotracker.png"
          title="Crypto Tracker"
          description="A web app to track cryptocurrency prices in real time, with features to view price history and set custom alerts for market changes."
          link="https://crypto-tracker-khush.vercel.app/"
          key="4"
          github="https://github.com/khush2808/crypto-tracker-app"
        />
        <ProjectCard
          src="/financemate.png"
          title="FinanceMate"
          description="A personal finance tool that helps users manage their budgets, track expenses, and visualize spending habits through easy-to-read charts."
          link="https://finance-mate.vercel.app/"
          key="5"
          github="https://github.com/khush2808/finance-mate"
        />
        <ProjectCard
          src="/tomato.png"
          title="Tomato - Food Delivery"
          description="A food delivery app that allows users to browse menus, place orders, and track their food in real time. Offers smooth navigation and user-friendly design."
          link="https://food-delivery-frontend-no0l.onrender.com/"
          key="6"
          github="https://github.com/khush2808/zomato-clone"
        />
        <ProjectCard
          src="/claude-code-clone.png"
          title="Claude Code Clone"
          description="An AI-powered CLI coding assistant built with Gemini 2.5 Flash, LangGraph for agent workflows, and MCP for tool integration. Features filesystem operations, GitHub integration, web search, and conversation memory with PostgreSQL."
          link="https://github.com/khush2808/claude-code-clone"
          key="7"
          github="https://github.com/khush2808/claude-code-clone"
        />
        <div className="col-span-full flex flex-col items-center space-y-4 mt-4">
          <p className="text-center text-gray-500 text-sm max-w-2xl">
            Looking for more? This list highlights a subset. Visit my GitHub profile for all repositories, more recent work, and latest projects.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://github.com/khush2808?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-2 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 transition"
            >
              <img src="/github.svg" alt="GitHub" className="w-4 h-4 opacity-80" />
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
