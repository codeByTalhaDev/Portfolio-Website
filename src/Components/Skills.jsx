import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiSequelize,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-5xl text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-5xl text-cyan-400" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-5xl text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-5xl text-white" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-5xl text-green-500" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-5xl text-blue-500" />,
  },
  {
    name: "Sequelize",
    icon: <SiSequelize className="text-5xl text-cyan-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-sky-400" />,
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-5xl text-blue-400" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-5xl text-orange-500" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-5xl text-white" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-5 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to develop modern, responsive,
            and scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6
              flex flex-col items-center justify-center
              hover:border-cyan-400 hover:-translate-y-2
              hover:shadow-xl hover:shadow-cyan-500/20
              transition-all duration-300 group"
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold text-center">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;