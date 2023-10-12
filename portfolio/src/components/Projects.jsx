import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import github from "../assets/github.svg";
import projectsData from "./projectsData";
import Slider from "react-slick";


const Projects = () => {

  
      var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div
      className="flex flex-col xl:px-40 md:px-10 lg:px-15 px-5 items-center justify-center lg:gap-10"
      id="projects"
    >
      <h1 className="text-white text-[2.5rem] sm:text-[4rem] font-pone my-10">
        PROJECTS
      </h1>

    <Slider {...settings} className="w-[90%]">

      {projectsData.map((project, index) => (
        <div
          key={index}
          className="items-center justify-center bg-cinza p-2 rounded-[27px] mb-5 shadow-xl"
        >
          <div className="flex items-center justify-center">
            <img
              src={project.image}
              className="rounded-[27px] w-auto h-auto"
              alt="Project Image"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-white font-pone text-[2rem]">
              {project.title}
            </h2>
            <p className="text-white font-poppins text-[1rem] md:text-md sm:mx-5 my-3">
              {project.description}
            </p>
            <ul className="flex items-center justify-center">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="mr-5 my-2">
                  <img src={tech} className="w-[3rem] h-[3rem]" alt="Stack Image"/>
                </li>
              ))}
            </ul>
            <a
              href={project.viewProjectLink}
              className="relative w-[10rem] h-[3.5rem] inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 my-5"
              target="_blank"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">VIEW PROJECT</span>
            </a>
            <a
              href={project.githubLink}
              className="relative w-[10rem] h-[3.5rem] inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              target="_blank"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-gray-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative ">
                <img src={github} className="w-[40px] z-10" alt="Github"/>
              </span>
            </a>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default Projects;
