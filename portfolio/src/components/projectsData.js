import palmeiras from "../assets/palmeiras.svg";
import bank from "../assets/bank.svg";
import guspotilist from "../assets/guspotilist.svg";
import ooptodo from "../assets/ooptodo.svg";
import elpuerto from "../assets/elpuerto.svg";
import carprojeto from "../assets/carprojeto.svg";


import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import typescript from "../assets/typescript.svg";
import nextjs from "../assets/nextjs.svg";
import spotify from "../assets/spotify.svg";
import travel from "../assets/travel.svg";




const projectsData = [
  {
    image: carprojeto,
    title: "CarHub",
    description:
      "CarHub is a web application designed to enhance the user experience when browsing and exploring different car options.",
    technologies: [nextjs, react, typescript],
    githubLink: "https://github.com/euortiz/car_store",
    viewProjectLink: "https://car-store-2v8q.vercel.app/",
  },
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
    image: travel,
    title: "Travel App",
    description: "Responsive UI with a modern aesthetic for a camp travel website, ensuring a seamless and engaging online experience for users.",
    technologies: [nextjs, react, tailwind],
    githubLink: "https://github.com/euortiz/travel_app",
    viewProjectLink: "https://travel-app-one-kappa.vercel.app/"
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
    technologies: [html, css, javascript, spotify],
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
