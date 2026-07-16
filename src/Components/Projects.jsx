import ProjectCard from "./ProjectCard";

import SalesManagement from "../assets/sales-management-system.png";
import EnquirySystem from "../assets/enquiry-form.png";

const projects = [
  {
    title: "Sales Management System",
    image: SalesManagement,

    desc: "A full-stack ERP-style Sales Management System featuring authentication, customer, supplier, employee, inventory, and purchase management with Docker support.",

    tech:
      "React, Node.js, Express.js, MySQL, Sequelize, Tailwind CSS, Docker",

    GithubLink:
      "https://github.com/codeByTalhaDev/Sales_Management_System",

    LiveLink: "",
  },

  {
    title: "Customer Enquiry Management System",

    image: EnquirySystem,

    desc: "A MERN Stack application to create, manage, update, search, and delete customer enquiries through a responsive dashboard.",

    tech:
      "React, Node.js, Express.js, MongoDB",

    GithubLink:
      "https://github.com/codeByTalhaDev/Enquiry-Form-Project",

    LiveLink: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-5 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div
          data-aos="fade-up"
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Here are some projects I've developed using modern technologies.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;