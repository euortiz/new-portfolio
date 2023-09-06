import palmeiras from "../assets/palmeiras.svg";
import bank from "../assets/bank.png";
import guspotilist from "../assets/guspotilist.png";
import ooptodo from "../assets/ooptodo.png";
import elpuerto from "../assets/elpuerto.png";

import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

const projectsData = [
  {
    image: palmeiras,
    title: "Palmeiras Website",
    description:
      "Using React, Vite and Tailwind, I replicated the Palmeiras website, a Brazilian football club that I'm a fan of, as closely as possible.",
    technologies: [react, tailwind],
    githubLink: "https://github.com/yourusername/palmeiras-website",
    viewProjectLink: "https://palmeiras-rho.vercel.app/",
  },
  {
    image: bank,
    title: "Modern Bank",
    description:
      "Modern bank app made with React and Tailwind offers a clean and intuitive UI for customers to efficiently manage their finances.",
    technologies: [react, tailwind],
    githubLink: "https://github.com/euortiz/react-bank-modern-app",
    viewProjectLink: "http://gusta-project-bapp.surge.sh/",
  },
  {
    image: guspotilist,
    title: "Guspotilist",
    description:
      "This App Project made with JavaScript and the Spotify API enables users to seamlessly save playlists to their Spotify accounts.",
    technologies: [html, css, javascript],
    githubLink: "https://github.com/euortiz/spotify-playlist",
    viewProjectLink: "https://gustilist.surge.sh/",
  },
  {
    image: ooptodo,
    title: "OOP TODO-LIST",
    description:
      "The todo list app made using OOP in JavaScript provides a structured approach to organizing tasks and improving productivity.",
    technologies: [html, css, javascript],
    githubLink: "https://github.com/euortiz/oop_todo_list",
    viewProjectLink: "https://oop-todo-list123.surge.sh/",
  },
  {
    image: elpuerto,
    title: "El Puerto Café",
    description:
      "The website made for a Spanish café showcases its menu, ambiance, and services to attract customers and promote its brand.",
    technologies: [html, css, javascript],
    githubLink: "https://github.com/euortiz/spanish-cafe",
    viewProjectLink: "https://elpuerto-cafe.surge.sh/",
  },
];

export default projectsData;
