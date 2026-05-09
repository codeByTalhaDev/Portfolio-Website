import { Link } from "react-scroll";
import Picture from "../assets/Picture.png";

const Hero = () => {
  return (
    <section
      id="home"
      data-aos="fade-down"
      className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 pt-20 pb-10 bg-black text-white min-h-[90vh]"
    >
      {/* Left Side */}
      <div className="max-w-2xl text-center lg:text-left flex flex-col justify-center">
        <h3 className="text-cyan-400 text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
          Hello, I'm
        </h3>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Muhammad Talha
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4 sm:mb-6">
          React Frontend Developer
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 mb-6 sm:mb-8 md:mb-10">
          I build modern, responsive and user-friendly web applications using
          React and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <Link to="contact" smooth={true} duration={500}>
            <button className="w-full sm:w-auto bg-cyan-500 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-cyan-400 hover:scale-105 transition text-base md:text-lg">
              Hire Me
            </button>
          </Link>

          <Link to="projects" smooth={true} duration={500}>
            <button className="w-full sm:w-auto border border-cyan-500 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-cyan-500 hover:scale-105 transition text-base md:text-lg">
              View Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center w-full lg:w-auto">
        <img
          src={Picture}
          alt="Hero"
          className="w-[160px] sm:w-[200px] md:w-[320px] lg:w-[400px] rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/30"
        />
      </div>
    </section>
  );
};

export default Hero;
