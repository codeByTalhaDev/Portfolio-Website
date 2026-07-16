import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";

const Footer = () => {
  const [time, setTime] = useState("");

  // Live Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-PK", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050505] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        {/* Thank You */}
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold">
            Thank You
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Thanks for Visiting My Portfolio
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8 text-sm sm:text-base">
            I truly appreciate you taking the time to explore my portfolio.
            I'm always excited to learn new technologies, solve real-world
            problems, and collaborate on meaningful software projects.
          </p>
        </div>

        {/* Developer Status */}
        <div className="mt-14 bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          {/* Header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-800 bg-gray-900">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>

            <span className="ml-3 text-gray-400 text-sm font-mono">
              talha@portfolio:~
            </span>
          </div>

          {/* Console */}
          <div className="p-6 font-mono text-sm md:text-base">
            <p className="text-cyan-400">&gt; portfolio.status</p>

            <div className="mt-5 space-y-4">
              <p className="text-gray-300">
                <span className="text-gray-500">Status</span>
                {" : "}
                <span className="inline-flex items-center gap-2 text-green-400">
                  <FaCircle size={8} />
                  Available for Opportunities
                </span>
              </p>

              <p className="text-gray-300">
                <span className="text-gray-500">Current Focus</span>
                {" : "}
                MERN Stack • AWS • DevOps
              </p>

              <p className="text-gray-300">
                <span className="text-gray-500">Local Time</span>
                {" : "}
                {time} (PKT)
              </p>

              <p className="text-gray-300">
                <span className="text-gray-500">Version</span>
                {" : "}
                Portfolio v1.0
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Talha. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Designed & Developed with{" "}
            <span className="text-red-500">❤️</span>{" "}
            by{" "}
            <span className="text-cyan-400 font-medium">
              Muhammad Talha
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;