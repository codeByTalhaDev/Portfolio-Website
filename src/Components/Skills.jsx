const Skills = () => {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git"
  ];

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-black text-white"
    >

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 80}   // 🔥 stagger effect
            className="bg-gray-900 border border-gray-700 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center 
            hover:border-cyan-400 hover:scale-105 transition duration-300"
          >
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-cyan-400">
              {skill}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;