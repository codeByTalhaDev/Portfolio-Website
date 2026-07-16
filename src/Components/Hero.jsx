import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import Picture from "../assets/Picture.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center pt-24 px-5 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div
          data-aos="fade-right"
          className="lg:w-1/2 text-center lg:text-left"
        >
          <p className="text-cyan-400 text-lg md:text-xl font-medium mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Muhammad{" "}
            <span className="text-cyan-400">
              Talha
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 h-14 mb-6">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg leading-8 max-w-xl mx-auto lg:mx-0 mb-6">
            Passionate BS Computer Science student focused on building modern,
            scalable, and responsive web applications using React, Node.js,
            Express, MongoDB, MySQL, Docker, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-70}
            >
              <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300 hover:scale-105 cursor-pointer">
                Hire Me
              </button>
            </Link>

            <Link
              to="projects"
              smooth
              duration={500}
              offset={-70}
            >
              <button className="px-8 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer">
                View Projects
              </button>
            </Link>

          </div>
        </div>

        {/* Right Side */}
        <div
          data-aos="fade-left"
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[90px] opacity-20"></div>

            <img
              src={Picture}
              alt="Muhammad Talha"
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover object-top border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30 hover:scale-105 transition duration-500"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;