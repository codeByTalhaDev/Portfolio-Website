import Picture from "../assets/Picture.png";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-gray-950 text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">
        About Me
      </h2>

      {/* Content */}
      <div
        data-aos="fade-right"
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Image */}
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src={Picture}
            alt="about"
            data-aos="zoom-in"
            className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-2xl border-4 border-cyan-500 shadow-lg shadow-cyan-500/20"
          />
        </div>

        {/* Text */}
        <div className="max-w-2xl text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6 text-cyan-400">
            Who I Am
          </h3>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8 mb-4 md:mb-6">
            I am a BS Computer Science student passionate about full stack web
            development using the MERN Stack. I enjoy building modern,
            responsive, and interactive web applications with MongoDB, Express,
            React, and Node.js.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-7 md:leading-8 mb-8 md:mb-10">
            My goal is to become a professional MERN Stack developer and work on
            real-world scalable projects.{" "}
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 sm:gap-10">
            <div className="text-center">
              <h4 className="text-3xl sm:text-4xl font-bold text-cyan-400">
                5+
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">Projects</p>
            </div>

            <div className="text-center">
              <h4 className="text-3xl sm:text-4xl font-bold text-cyan-400">
                1+
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Years Learning
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-3xl sm:text-4xl font-bold text-cyan-400">
                BSCS
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">Education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
