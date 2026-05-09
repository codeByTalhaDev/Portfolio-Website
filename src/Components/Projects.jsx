import ProjectCard from "./ProjectCard";
import enquiryImg from "../assets/Enquiry.png";

const Projects = () => {
  const projects = [
    {
      image: enquiryImg,
      title: "Customer Enquiry Dashboard",
      desc: "A full-stack MERN enquiry management system with complete CRUD functionality",
      tech: "• React.js • Node.js • Express.js • MongoDB",
      GithubLink: "https://github.com/codeByTalhaDev/Enquiry-Form-Project",
    },
    {
      image: "https://picsum.photos/500/300",
      title: "CRUD App",
      desc: "Full stack CRUD application using MERN stack.",
      tech: "React Node MongoDB",
      GithubLink: "https://github.com/codeByTalhaDev/Enquiry-Form-Project",
    },
    {
      image: "https://picsum.photos/500/300",
      title: "Todo App",
      desc: "Task management application with clean UI.",
      tech: "React CSS",
      GithubLink: "https://github.com/codeByTalhaDev/Enquiry-Form-Project",
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-gray-950 text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-4">
        Projects
      </h2>

      {/* Grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard data-aos="zoom-in" key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
