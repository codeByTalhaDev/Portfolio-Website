import Picture from "../assets/Picture.png";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-20 px-5 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Side */}
          <div
            data-aos="fade-right"
            className="lg:w-2/5 flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500 blur-[90px] opacity-20 rounded-full"></div>

              <img
                src={Picture}
                alt="Muhammad Talha"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl object-cover object-top border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30 hover:scale-105 transition duration-500"
              />

            </div>
          </div>

          {/* Right Side */}
          <div
            data-aos="fade-left"
            className="lg:w-3/5"
          >

            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Muhammad <span className="text-cyan-400">Talha</span>
            </h3>

            <h4 className="text-xl text-gray-300 mb-6">
              Full Stack Developer
            </h4>

            <p className="text-gray-400 leading-6 mb-6">
              I'm a BS Computer Science student passionate about developing
              modern, scalable, and responsive web applications. I enjoy
              solving real-world problems by building full-stack applications
              with clean architecture and user-friendly interfaces.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">

              <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6 text-center hover:border-cyan-400 transition">

                <h4 className="text-3xl font-bold text-cyan-400">
                  5+
                </h4>

                <p className="text-gray-400 mt-2">
                  Projects
                </p>

              </div>

              <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6 text-center hover:border-cyan-400 transition">

                <h4 className="text-3xl font-bold text-cyan-400">
                  1+
                </h4>

                <p className="text-gray-400 mt-2">
                  Years Learning
                </p>

              </div>

              <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6 text-center hover:border-cyan-400 transition">

                <h4 className="text-2xl font-bold text-cyan-400">
                  BSCS
                </h4>

                <p className="text-gray-400 mt-2">
                  Student
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;