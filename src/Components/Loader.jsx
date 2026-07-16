import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-lg text-center">

        {/* Logo */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          <span className="text-white">Talha</span>{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            Dev
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-500 uppercase tracking-[6px] text-xs md:text-sm">
          Full Stack Developer
        </p>

        {/* Loading */}
        <p className="mt-10 text-gray-300 text-lg font-medium">
          Loading Portfolio
          <span className="text-cyan-400">{dots}</span>
        </p>

        {/* Progress Bar */}
        <div className="mt-6 h-2 w-full rounded-full bg-gray-800 overflow-hidden">

          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />

        </div>

        {/* Percentage */}
        <div className="mt-3 flex justify-between text-sm text-gray-500 font-mono">

          <span>{progress}%</span>

          <span className="text-cyan-400">
            Initializing...
          </span>

        </div>

      </div>

    </div>
  );
};

export default Loader;