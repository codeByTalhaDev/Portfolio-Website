import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-xl border-b border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            spy
            className="text-3xl font-extrabold cursor-pointer select-none"
          >
            <span className="text-cyan-400">Talha</span>
            <span className="text-white">Dev</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">

            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={500}
                  spy
                  offset={-70}
                  activeClass="text-cyan-400 after:w-full"
                  className="
                    relative
                    capitalize
                    cursor-pointer
                    text-gray-300
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    font-medium

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-cyan-400
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* Resume */}
            <a
              href="/Talha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
            >
              Resume
            </a>

          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden text-3xl text-white"
          >
            {nav ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-gray-950/95 backdrop-blur-xl border-t border-gray-800 transition-all duration-300 ${
          nav ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-8">

          {links.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                spy
                offset={-70}
                activeClass="text-cyan-400"
                onClick={() => setNav(false)}
                className="capitalize text-xl text-gray-300 hover:text-cyan-400 transition cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}

          <a
            href="/Talha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition-all duration-300"
          >
            Resume
          </a>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;