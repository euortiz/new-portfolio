import email2 from "../assets/email2.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";

const Contact = () => {
  return (
    <div
      className="xl:h-screen bg-gradient-to-b from-roxo to-black flex flex-col xl:px-40 md:px-10 lg:px-15 px-5 items-center justify-center flex-wrap"
      id="contact"
    >
      <h1 className="text-white text-[3rem] sm:text-[4rem] font-pone my-20">
        CONTACT
      </h1>
      <form
        id="formulario"
        role="form"
        action="https://formsubmit.co/guortiz098@hotmail.com"
        method="POST"
        className="bg-black opacity-50 rounded-[30px] p-10 flex flex-col md:flex-row sm:w-[600px] md:w-[710px] mb-20"
      >
        <div className="flex flex-col mr-0 md:mr-20 md:w-[50%]">
          <input
            id="name"
            className="my-3 bg-cinza opacity-50 rounded-full font-pone text-white border border-gray-300 p-2 placeholder-gray-400::placeholder focus:outline-none focus:border-roxo focus:ring"
            type="name"
            placeholder="NAME"
            autoComplete="name"
            required
          ></input>
          <input
            id="email"
            className="my-3 bg-cinza opacity-50 rounded-full font-pone text-white border border-gray-300 p-2 placeholder-gray-400::placeholder focus:outline-none focus:border-roxo focus:ring"
            type="email"
            placeholder="E-MAIL"
            autoComplete="email"
            required
          ></input>

          <input
            id="text-area"
            className="my-3 bg-cinza opacity-50 font-pone text-white border border-gray-300 p-2 placeholder-gray-400::placeholder focus:outline-none focus:border-roxo focus:ring rounded-xl h-[5rem] sm:h-[7rem]"
            type="text"
            placeholder="MESSAGE"
            autoComplete="text-area"
            required
          ></input>
          <button
            className="bg-roxo rounded-full p-1 my-4 text-white font-pone text-[1.5rem]"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div>
              <span>SEND</span>
            </div>
          </button>
        </div>
        <div>
          <ul className="flex flex-col items-start">
            <li className="items-center justify-center flex my-3">
              <img src={location} className="w-[25px] h-[25px]" />
              <a className="text-white font-poppins ml-3">
                London, United Kingdom
              </a>
            </li>
            <li className="items-center justify-center flex my-3">
              <img src={email2} className="w-[25px] h-[25px]" />
              <a
                className="text-white font-poppins ml-3 cursor-pointer"
                href="mailto:guortiz098@hotmail.com"
                target="_blank"
              >
                guortiz098@hotmail.com
              </a>
            </li>
            <li className="items-center justify-center flex my-3">
              <img src={phone} className="w-[25px] h-[25px]" />
              <a
                href="https://wa.me/+34692124952"
                target="_blank"
                className="text-white font-poppins ml-3 cursor-pointer"
              >
                +34 692 12 49 52
              </a>
            </li>
          </ul>
        </div>
      </form>
      <h3 className="text-white font-poppins text-[0.8rem]">Gustavo Ortiz</h3>
      <h4 className="text-white font-poppins text-[0.8rem]">
        © ALL OF THE RIGHTS RESERVED
      </h4>
    </div>
  );
};

export default Contact;