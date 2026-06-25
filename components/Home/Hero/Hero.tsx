"use client";

import { TypeAnimation } from "react-type-animation";
import { FolderOpen, Download } from "lucide-react";

const HeroSection = () => {
  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden
        bg-[radial-gradient(ellipse_at_top_left,_#e0e7ff_0%,_#f0f4ff_40%,_#ffffff_100%)]
        dark:bg-[radial-gradient(ellipse_at_top_left,_#0f0c29_0%,_#1a1040_50%,_#0d1b4b_100%)]"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Available badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-white/80">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white"
        >
          Hi, I&apos;m{" "}
          <span className="text-violet-600 dark:text-violet-400">Sonu</span>
        </h1>

        {/* Type animation */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-white/85 h-10 flex items-center"
        >
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "Next.js Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </div>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="300"
          className="text-base sm:text-lg text-gray-500 dark:text-white/60 max-w-xl leading-relaxed"
        >
          Passionate about building scalable web applications with modern
          technologies. Currently looking for opportunities to grow and
          contribute.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <button
            onClick={handleViewProjects}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
              bg-gray-900 text-white hover:bg-gray-700
              dark:bg-white dark:text-gray-900 dark:hover:bg-white/90
              transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
          >
            <FolderOpen size={17} />
            View Projects
          </button>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
              border border-gray-300 text-gray-800 bg-white hover:bg-gray-50
              dark:border-white/30 dark:text-white dark:bg-white/10 dark:hover:bg-white/20
              backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <Download size={17} />
            Download CV
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 dark:from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
