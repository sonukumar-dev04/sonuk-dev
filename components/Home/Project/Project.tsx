import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/Data";
import SectionHeading from "@/components/Helper/SectionHeading";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="600">
          <SectionHeading
            title="Featured"
            highlight="Projects"
            subtitle="A selection of my recent work and side projects"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="650"
              data-aos-delay={index * 100}
              className="group relative flex flex-col rounded-2xl overflow-hidden
                border border-blue-100 dark:border-gray-800
                bg-gray-50 dark:bg-gray-900
                hover:border-violet-200 dark:hover:border-violet-800
                hover:shadow-xl hover:shadow-violet-100/50 dark:hover:shadow-violet-900/20
                transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Live + GitHub buttons — appear on image hover */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                      bg-white text-gray-900 hover:bg-violet-600 hover:text-white
                      shadow-md transition-colors duration-200"
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                      bg-white text-gray-900 hover:bg-violet-600 hover:text-white
                      shadow-md transition-colors duration-200"
                  >
                    <SiGithub size={12} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6">
                {/* Title + number */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <span className="text-4xl font-black text-gray-100 dark:text-gray-800 select-none flex-shrink-0 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Description — more space, more visible */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="border-t border-blue-100 dark:border-gray-800" />

                {/* Stack + Links row */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full
                          bg-violet-50 dark:bg-violet-900/30
                          text-violet-700 dark:text-violet-300
                          border border-violet-100 dark:border-violet-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links (always visible) */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      title="GitHub"
                    >
                      <SiGithub size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
