import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";

import perfil from "../assets/perfil.svg";

const Hero = () => {
  return (
    <div
      className="h-screen bg-gradient-to-b from-roxo to-black flex xl:px-30 md:px-10 lg:px-15 px-5 items-center justify-center flex-wrap bottom-5 mt-20"
      id="about"
    >
      <div>
        <div>
          <h1 className="text-white text-[3rem] sm:text-[4rem] font-pone">
            HEY,I'M GUSTAVO<span className="text-yellow-400">!</span>
          </h1>
          <p className="text-white font-poppins font-bold text-[1.0rem] sm:text-[1.6rem]">
            Welcome to my digital garden. 🌱
          </p>
          <p className="text-white font-poppins text-[1rem] xl:w-[35em]">
            I'm a front-end developer with expertise in React. I thrive on new
            challenges and I'm always eager to learn new technologies. Let's
            create something amazing together!Contact me for any questions or
            comments
          </p>
        </div>
        <div>
          <ul className="flex my-5">
            <li className="mr-5 bg-white rounded-full transition-colors duration-300 ease-in-out group-hover:bg-black">
              <a href="https://github.com/euortiz" target="blank">
                <img
                  src={github}
                  className="sm:w-12 sm:h-12 w-8 h-8 cursor-pointer"
                />
              </a>
            </li>
            <li className="mr-5 bg-white rounded-full">
              <a href="https://www.linkedin.com/in/eu-ortiz/" target="blank">
                <img
                  src={linkedin}
                  className="sm:w-12 sm:h-12 w-8 h-8 cursor-pointer"
                />
              </a>
            </li>
            <li className="mr-5 bg-white rounded-full">
              <a href="https://wa.me/+34692124952" target="blank">
                <img
                  src={whatsapp}
                  className="sm:w-12 sm:h-12 w-8 h-8 p-1 cursor-pointer"
                />
              </a>
            </li>
            <li className="mr-5 bg-white rounded-full">
              <a href="mailto:guortiz098@hotmail.com" target="blank">
                <img
                  src={email}
                  className="sm:w-12 sm:h-12 w-8 h-8 p-1 cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={perfil} className="md:w-[600px] h-auto w-[300px]" />
      </div>
    </div>
  );
};

export default Hero;
