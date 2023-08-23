import React, { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-[80px] bg-cinza flex justify-between items-center fixed w-screen top-0 z-50">
      <h1 className="text-white text-[3rem] font-pone ml-5 cursor-pointer">
        GOrtiz
      </h1>
      <div className="sm:hidden mr-5 fixed right-0">
        <button
          className="text-white text-2xl focus:outline-none nav-button"
          onClick={toggleMenu}
        >
          {showMenu ? "×" : "☰"}
        </button>
      </div>
      <ul
        className={`${
          showMenu ? "block" : "hidden"
        } sm:flex flex-col sm:flex-row items-center mt-4 sm:mt-0 nav-container`}
      >
        <li className="nav-item">
          <a href="#about" className="nav-link">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a href="#experience" className="nav-link">
            EXPERIENCE
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            PROJECTS
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            SKILLS
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
