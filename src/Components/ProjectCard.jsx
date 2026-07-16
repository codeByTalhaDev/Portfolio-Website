import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProjectCard = ({
  title,
  desc,
  tech,
  image,
  GithubLink,
  LiveLink,
}) => {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <div
        data-aos="zoom-in"
        className="max-w-md mx-auto flex flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20"
      >
        {/* Image */}
        <div
          onClick={() => setPreview(true)}
          className="h-42 cursor-pointer overflow-hidden bg-black"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">

          {/* Fixed Title Height */}
          <div className="h-14">
            <h3 className="text-xl font-bold text-white line-clamp-2">
              {title}
            </h3>
          </div>

          {/* Fixed Description Height */}
          <div className="h-20 mt-2">
            <p className="text-sm leading-6 text-gray-400 line-clamp-4">
              {desc}
            </p>
          </div>

          {/* Fixed Tech Stack Height */}
          <div className="h-24 mt-4 flex flex-wrap content-start gap-2">
            {tech.split(",").map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-400"
              >
                {item.trim()}
              </span>
            ))}
          </div>

          {/* Buttons always at bottom */}
          <div className="mt-auto flex gap-3">
            {LiveLink ? (
              <a
                href={LiveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2.5 font-semibold text-black transition hover:bg-cyan-400">
                  <FaExternalLinkAlt size={13} />
                  Live Demo
                </button>
              </a>
            ) : (
              <button
                disabled
                className="flex-1 rounded-lg bg-gray-800 py-2.5 text-gray-500 cursor-not-allowed"
              >
                Live Demo
              </button>
            )}

            <a
              href={GithubLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500 py-2.5 font-semibold transition hover:bg-cyan-500 hover:text-black cursor-pointer">
                <FaGithub />
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm">
          <button
            onClick={() => setPreview(false)}
            className="absolute right-6 top-6 text-3xl text-white hover:text-cyan-400 cursor-pointer"
          >
            <FaTimes />
          </button>

          <img
            src={image}
            alt={title}
            className="max-h-[90vh] w-full max-w-5xl rounded-xl border border-cyan-500 object-contain"
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;