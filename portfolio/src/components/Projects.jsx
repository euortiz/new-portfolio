import React from "react";
import palmeiras from "../assets/palmeiras.png";
import github from "../assets/github.svg";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-roxo to-black flex flex-col xl:px-40 md:px-10 lg:px-15 px-5 items-center justify-center flex-wrap lg:gap-10">
      <h1 className="text-white text-[3rem] sm:text-[4rem] font-pone my-20">
        PROJECTS
      </h1>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="flex flex-wrap lg:flex-nowrap items-center justify-center bg-cinza p-2 rounded-[27px] mb-5"
        >
          <div>
            <img
              src={project.image}
              className="rounded-[27px] lg:w-[550px] lg:h-[400px]"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-white font-pone text-[2rem]">
              {project.title}
            </h2>
            <p className="text-white font-poppins text-[1rem] md:text-md lg:w-[400px] sm:mx-5 my-3">
              {project.description}
            </p>
            <ul className="flex items-center justify-center">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="mr-5 my-2">
                  <img src={tech} className="w-[3rem] h-[3rem]" />
                </li>
              ))}
            </ul>
            <a
              href={project.viewProjectLink}
              className="text-white font-pone text-[2rem] bg-roxo rounded-full p-1 w-[15rem] flex items-center justify-center my-5 cursor-pointer"
            >
              VIEW PROJECT
            </a>
            <a
              href={project.githubLink}
              className="bg-gray-500 rounded-full p-1 w-[15rem] flex items-center justify-center cursor-pointer"
            >
              <img src={github} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
