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
      className="xl:h-screen bg-gradient-to-b from-black to-roxo flex xl:px-40 md:px-10 lg:px-15 px-5 items-center justify-center flex-col bottom-5 "
      id="skills"
    >
      <h1 className="text-white text-[3rem] sm:text-[4rem] font-pone my-20">
        SKILLS
      </h1>
      <p className="text-white font-poppins text-[1rem] sm:text-sm md:text-md mb-10 md:w-[45rem]">
        As a skilled developer with experience in Front-End technologies,
        including React, and some exposure to back-end languages, I contribute
        effectively to the development of comprehensive web applications by
        bridging the gap between user interface and server-side logic.
      </p>
      <ul className="flex flex-wrap items-center justify-center">
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={html} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={css} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={javascript} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={react} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={nextjs} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={tailwind} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={nodejs} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 animate_animated animate__heartBeat">
          <img src={git1} className="w-[51px] h-[51px]" />
        </li>
      </ul>
      <h1 className="text-white text-[3rem] sm:text-[4rem] font-pone my-10">
        SPOKEN LANGUAGES
      </h1>
      <ul className="flex flex-wrap items-center justify-center">
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 flex flex-col items-center animate_animated animate__heartBeat">
          <img src={brazil} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 flex flex-col items-center animate_animated animate__heartBeat">
          <img src={uk} className="w-[51px] h-[51px]" />
        </li>
        <li className="rounded-full bg-gray-500 p-3 border-4 border-black m-3 flex flex-col items-center animate_animated animate__heartBeat">
          <img src={spain} className="w-[51px] h-[51px]" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
