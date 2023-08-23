import kosi from "../assets/kosi.svg";
import zyme from "../assets/10zyme.svg";

const Experience = () => {
  return (
    <div
      className="xl:h-screen bg-gradient-to-b from-black to-roxo flex flex-col xl:px-40 md:px-10 lg:px-15 px-5 items-center justify-center flex-wrap"
      id="experience"
    >
      <h1 className="text-white text-[3rem] sm:text-[4rem] font-pone my-20">
        EXPERIENCE
      </h1>

      <div className="flex sm:flex-nowrap flex-wrap justify-center items-center mb-20 bg-cinza rounded-[2rem] p-5 border-2 border-white xl:w-[50rem] lg:h-[15rem] md:w-[50rem] w-[22rem] h-[40rem] sm:h-[28rem] sm:w-[30rem]">
        <img src={zyme} className="rounded-full bg-black p-2 my-5" />
        <div className="ml-0 sm:ml-5">
          <h2 className="text-white font-pone text-[2rem]">10 ZYME</h2>
          <h3 className="text-white font-poppins font-bold text-[1.5rem]">
            Front-End - Internship | |{" "}
            <span className="text-yellow-300">AUGUST 2023 - Currently</span>
          </h3>
          <p className="text-white font-poppins text-[1rem] sm:text-sm md:text-md">
            In my role as a Front-End Developer at 10zyme, I harness a suite of
            essential tools, including HTML, CSS, JavaScript, and React. These
            tools empower me to proficiently craft and enhance user interfaces,
            masterfully manage styling and layout intricacies, seamlessly
            execute React-based implementations, foster collaborative efforts,
            and adeptly tackle complex problem-solving challenges.
          </p>
        </div>
      </div>

      <div className="flex sm:flex-nowrap flex-wrap justify-center items-center mb-20 bg-cinza rounded-[2rem] p-5 border-2 border-white xl:w-[50rem] lg:h-[15rem] md:w-[50rem] w-[22rem] h-[40rem] sm:h-[28rem] sm:w-[30rem]">
        <img src={kosi} className="rounded-full bg-black p-2 my-5" />
        <div className="ml-0 sm:ml-5">
          <h2 className="text-white font-pone text-[2rem]">KOSI AFRICA</h2>
          <h3 className="text-white font-poppins font-bold text-[1.5rem]">
            Web Developer - Volunteer |{" "}
            <span className="text-yellow-300">JULY 2023 - Currently</span>
          </h3>
          <p className="text-white font-poppins text-[1rem] sm:text-sm md:text-md">
            As a web developer in Kosi, Africa, I was responsible for website
            maintenance, utilizing tools such as WordPress. This role afforded
            me the opportunity to collaborate with a talented and diverse team,
            contributing to a dynamic and enriching work environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
