"use client";

import Image from "next/image";
import { stats, info } from "@/data/Data";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About{" "}
            <span className="text-violet-600 dark:text-violet-400">Me</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-base">
            Get to know the developer behind the code
          </p>
        </div>

        {/* Main content: photo + text */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Photo */}
          <div className="w-full lg:w-2/5 flex justify-center flex-shrink-0">
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="100"
              className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-violet-100 dark:border-violet-900/50"
            >
              <Image
                src="/images/profile1.png"
                alt="Sonu — profile photo"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
                priority
              />
              {/* Subtle violet overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-violet-900/30 to-transparent" />
            </div>
          </div>

          {/* Text content */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="150"
            className="w-full lg:w-3/5 flex flex-col gap-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
              A passionate developer who loves to build
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I come from a commerce background — I completed my B.Com in
              Computers, which gave me a foundation in both computer
              applications and business fundamentals. But my real passion has
              always been web development. My journey started with curiosity
              about how websites work, and it has grown into a love for building
              clean, functional, and user-friendly applications.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I enjoy working with the MERN stack and Next.js, and I&apos;m
              always learning something new. I believe in writing clean code,
              solving real problems, and continuously improving my skills.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              {info.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                >
                  <div className="p-1.5 rounded-lg bg-violet-50 dark:bg-violet-900/30">
                    <Icon
                      size={15}
                      className="text-violet-600 dark:text-violet-400"
                    />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="80"
              className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl
                bg-blue-50/40 dark:bg-gray-900 border border-blue-100 dark:border-gray-800
                hover:border-violet-200 dark:hover:border-violet-800 transition-colors duration-200"
            >
              <span className="text-3xl font-extrabold text-violet-600 dark:text-violet-400">
                {value}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
