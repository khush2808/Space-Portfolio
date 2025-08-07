import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-20">
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
          description="SyncStreamis a video calling platform enabling seamless virtual meetings with features like screen sharing, chat, and secure video calls."
          link="https://sync-stream-app.vercel.app/"
          key="5"
          github="https://github.com/khush2808/sync-stream-app"
        />
        <ProjectCard
          src="/cryptotracker.png"
          title="Crypto Tracker"
          description="A web app to track cryptocurrency prices in real time, with features to view price history and set custom alerts for market changes."
          link="https://crypto-tracker-khush.vercel.app/"
          key="6"
        />
        <ProjectCard
          src="/financemate.png"
          title="FinanceMate"
          description="A personal finance tool that helps users manage their budgets, track expenses, and visualize spending habits through easy-to-read charts."
          link="https://finance-mate.vercel.app/"
          key="7"
        />
        <ProjectCard
          src="/tomato.png"
          title="Tomato - Food Delivery"
          description="A food delivery app that allows users to browse menus, place orders, and track their food in real time. Offers smooth navigation and user-friendly design."
          link="https://food-delivery-frontend-no0l.onrender.com/"
          key="8"
        />
        <ProjectCard
          src="/portfolio.png"
          title="My Portfolio"
          description="A personal portfolio website showcasing my projects, skills, and experiences. Designed to highlight my work in web development and software engineering."
          link="https://khushshah.vercel.app"
          key="9"
        />
              <p className="text-center text-gray-500">(Not updated check my github for latest projects)</p>

      </div>
    </div>
  );
};

export default Projects;
