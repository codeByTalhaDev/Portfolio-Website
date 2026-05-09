import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="text-cyan-400"
        className="cursor-pointer text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400"
      >
        {"<Talha Dev />"}
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-cyan-400"
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Resume Button (Desktop) */}
      <a
        href="/Talha_Resume.pdf"
        target="_blank"
        className="hidden md:block bg-cyan-500 px-3 md:px-4 py-2 rounded-lg hover:bg-cyan-400 transition text-sm md:text-base"
      >
        Resume
      </a>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-cyan-400"
              onClick={() => setOpen(false)}
              className="text-lg hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}

          {/* Resume Mobile */}
          <a
            href="/Talha_Resume.pdf"
            target="_blank"
            className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-400"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
