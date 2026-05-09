import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-12 text-gray-400">

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">

        {/* Brand Section */}
        <div data-aos="fade-right" className="max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
            Talha Dev
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-7 mb-4">
            Frontend Developer focused on building modern,
            responsive and interactive web applications.
          </p>

          <p className="text-cyan-400 font-medium text-sm sm:text-base">
            Open for Freelance & Internships
          </p>
        </div>

        {/* Contact Section */}
        <div data-aos="fade-up">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
            Contact
          </h3>

          <div className="space-y-3 text-sm sm:text-base">
            <p className="hover:text-cyan-400 transition">
              📍 Gujranwala, Pakistan
            </p>

            <p className="hover:text-cyan-400 transition break-all">
              📧 talhamughal02148@gmail.com
            </p>

            <p className="hover:text-cyan-400 transition">
              📞 +92 317 7914821
            </p>
          </div>
        </div>

        {/* Social Section */}
        <div data-aos="fade-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
            Connect
          </h3>

          <div className="flex gap-5 text-2xl">

            {/* GitHub */}
            <a
              href="https://github.com/codeByTalhaDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:talhamughal0785@gmail.com"
              className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <MdEmail />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-800 text-sm sm:text-base">
        © 2026 Talha Dev. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;