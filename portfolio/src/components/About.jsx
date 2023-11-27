import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";
import perfil from "../assets/perfil.svg";


const Hero = () => {
  return (
    <div
      className="h-screen flex xl:px-30 md:px-10 lg:px-15 px-5 items-center justify-center flex-wrap bottom-5 mt-20"
      id="about"
    >
      <div>
        <div className="animate__animated animate__fadeInLeft">
          <h1 className="text-white text-[3rem] sm:text-[4rem] font-pone">
            HEY,I'M GUSTAVO<span className="text-yellow-400">!</span>
          </h1>
          <p className="text-white font-poppins font-bold text-[1.0rem] sm:text-[1.6rem]">
            Welcome to my digital garden. 🌱
          </p>
          <p className="text-white font-poppins text-[1rem] xl:w-[35em]">
            I'm a front-end/mobile developer with expertise in React. I thrive on new
            challenges and I'm always eager to learn new technologies. Let's
            create something amazing together!Contact me for any questions or
            comments
          </p>
        </div>
        <div>
          <ul className="flex my-5 animate__animated animate__fadeInLeft">
            <li className="mr-5 bg-white rounded-full max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <a href="https://github.com/euortiz" target="blank">
                <img
                  src={github}
                  className="sm:w-12 sm:h-12 w-8 h-8 cursor-pointer"
                  alt="Github"
                />
              </a>
            </li>
            <li className="mr-5 bg-white rounded-full max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <a href="https://www.linkedin.com/in/eu-ortiz/" target="blank">
                <img
                  src={linkedin}
                  className="sm:w-12 sm:h-12 w-8 h-8 cursor-pointer"
                  alt="Linkedin"
                />
              </a>
            </li>
            <li className="mr-5 bg-white rounded-full max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <a href="https://wa.me/+34692124952" target="blank">
                <img
                  src={whatsapp}
                  className="sm:w-12 sm:h-12 w-8 h-8 p-1 cursor-pointer"
                  alt="Whatsapp"
                />
              </a>
            </li>
            <li className="mr-5 bg-white rounded-full max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <a href="mailto:guortiz098@hotmail.com" target="blank">
                <img
                  src={email}
                  className="sm:w-12 sm:h-12 w-8 h-8 p-1 cursor-pointer"
                  alt="e-mail"
                />
              </a>
            </li>
          </ul>
          <div className="animate__animated animate__fadeInRight">
            <a  
              href="https://drive.google.com/drive/u/0/folders/1ZdsDAsUFN2LVjEE9dj8vb6FZZwLzhxgM" 
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              target="_blank">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease font-bold">Download CV</span>
              <span className="relative invisible">Download CV</span>
            </a>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight my-10 ">
        <img src={perfil} className="lg:w-[600px] h-auto w-[300px]" alt="Gustavo photo" loading="eager"/>
      </div>
    </div>
  );
};

export default Hero;
