import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import nextjs from "../assets/nextjs.svg";
import tailwind from "../assets/tailwind.svg";
import nodejs from "../assets/nodejs.svg";
import git1 from "../assets/git1.svg";

import brazil from "../assets/brazil.svg";
import italy from "../assets/italy.svg";
import spain from "../assets/spain.svg";
import uk from "../assets/uk.svg";

const Skills = () => {
  return (
    <div
      className="xl:h-screen flex xl:px-40 md:px-10 lg:px-15 px-5 items-center justify-center flex-col bottom-5 "
      id="skills"
    >
      <h2 className="text-white text-[2.5rem] sm:text-[4rem] font-pone my-10">
        SKILLS
      </h2>
      <p className="text-white font-poppins text-[1rem] sm:text-sm md:text-md mb-10 md:w-[45rem]">
        As a skilled developer with experience in Front-End technologies,
        including React, and some exposure to back-end languages, I contribute
        effectively to the development of comprehensive web applications by
        bridging the gap between user interface and server-side logic.
      </p>
      <ul className="flex flex-wrap items-center justify-center">
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={html} className="w-[51px] h-[51px]" alt="HTML"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={css} className="w-[51px] h-[51px]" alt="CSS"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={javascript} className="w-[51px] h-[51px]" alt="JavaScript"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={react} className="w-[51px] h-[51px]" alt="React"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={nextjs} className="w-[51px] h-[51px]" alt="Next JS"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={tailwind} className="w-[51px] h-[51px]" alt="Tailwind CSS"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={nodejs} className="w-[51px] h-[51px]" alt="Node JS"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat shadow-xl">
          <img src={git1} className="w-[51px] h-[51px]" alt="GIT"/>
        </li>
      </ul>
      <h2 className="text-white text-[2.5rem] sm:text-[4rem] font-pone my-10 items-center justify-center">
        SPOKEN LANGUAGES
      </h2>
      <ul className="flex flex-wrap items-center justify-center">
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 flex flex-col items-center animate_animated animate__heartBeat shadow-xl">
          <img src={brazil} className="w-[51px] h-[51px]" alt="Brazil flag"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 flex flex-col items-center animate_animated animate__heartBeat shadow-xl">
          <img src={uk} className="w-[51px] h-[51px]" alt="United Kingdom flag"/>
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 flex flex-col items-center animate_animated animate__heartBeat shadow-xl">
          <img src={spain} className="w-[51px] h-[51px]" alt="Spain flag"/>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
