import { skillCategories } from "@/data/Data";
import SectionHeading from "@/components/Helper/SectionHeading";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-blue-50/70 via-indigo-50/40 to-white dark:from-gray-900/50 dark:via-gray-900/50 dark:to-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="600">
          <SectionHeading
            title="Technical"
            highlight="Skills"
            subtitle="Technologies I've been working with recently"
          />
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map(({ category, skills }) => (
            <div key={category}>
              {/* Category label */}
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="flex items-center gap-2 mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-violet-600 dark:bg-violet-400" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {category}
                </h3>
              </div>

              {/* Skill cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="50"
                    className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl
                      bg-white dark:bg-gray-800/60
                      border border-blue-100 dark:border-gray-700/50
                      shadow-sm shadow-blue-100/50 dark:shadow-none
                      hover:border-violet-300 dark:hover:border-violet-600
                      hover:shadow-md hover:shadow-violet-100 dark:hover:shadow-violet-900/20
                      transition-all duration-200 cursor-default"
                  >
                    <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-900/30 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50 transition-colors">
                      <Icon
                        size={26}
                        className="text-violet-600 dark:text-violet-400"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
