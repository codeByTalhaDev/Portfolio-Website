import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, desc, tech, image, GithubLink }) => {
  return (
    <div className="h-[435px] flex flex-col bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 hover:-translate-y-2 transition">
      {/* Image */}
      <div className="w-full h-52 bg-gray-800 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        <p className="text-gray-400 leading-7 mb-2">{desc}</p>

        <p className="text-cyan-400 mb-4">{tech}</p>

        {/* Buttons fixed at bottom */}
        <div className="mt-auto flex gap-4">
          <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-400 transition w-full">
            Live Demo
          </button>

          <a
            href={GithubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 transition w-full">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
