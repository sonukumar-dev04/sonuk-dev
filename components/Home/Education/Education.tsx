import { GraduationCap, School, BookOpen, Code2 } from "lucide-react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { education } from "@/data/Data";

const iconMap: Record<string, React.ElementType> = {
  school: School,
  intermediate: BookOpen,
  degree: GraduationCap,
  course: Code2,
};

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-b from-blue-50/70 via-indigo-50/40 to-white dark:from-gray-900/50 dark:via-gray-900/50 dark:to-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="My"
          highlight="Education"
          subtitle="My academic journey and learning path"
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Center vertical line — hidden on mobile */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px
            bg-gradient-to-b from-violet-400 via-violet-300 to-transparent
            dark:from-violet-600 dark:via-violet-800"
          />

          <div className="flex flex-col gap-12">
            {education.map((item, index) => {
              const Icon = iconMap[item.type] ?? GraduationCap;
              const isLeft = index % 2 === 0; // even = card on right, odd = card on left

              return (
                <div
                  key={index}
                  className="relative flex items-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 80}
                >
                  {/* ── MOBILE layout (always full width) ── */}
                  <div className="flex gap-5 items-start w-full md:hidden">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full
                      bg-white dark:bg-gray-950
                      border-2 border-violet-400 dark:border-violet-600
                      flex items-center justify-center shadow-md"
                    >
                      <Icon
                        size={16}
                        className="text-violet-600 dark:text-violet-400"
                      />
                    </div>
                    <EducationCard item={item} />
                  </div>

                  {/* ── DESKTOP zigzag layout ── */}
                  <div className="hidden md:flex w-full items-center gap-0">
                    {/* Left side */}
                    <div className="w-1/2 flex justify-end pr-10">
                      {!isLeft && <EducationCard item={item} />}
                    </div>

                    {/* Center icon */}
                    <div
                      className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full
                      bg-white dark:bg-gray-950
                      border-2 border-violet-400 dark:border-violet-600
                      flex items-center justify-center
                      shadow-lg shadow-violet-100 dark:shadow-violet-900/30"
                    >
                      <Icon
                        size={18}
                        className="text-violet-600 dark:text-violet-400"
                      />
                    </div>

                    {/* Right side */}
                    <div className="w-1/2 pl-10">
                      {isLeft && <EducationCard item={item} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Reusable card ──────────────────────────────────────────
const EducationCard = ({ item }: { item: (typeof education)[0] }) => (
  <div
    className="flex-1 rounded-2xl p-5
    bg-white dark:bg-gray-900
    border border-blue-100 dark:border-gray-800
    shadow-sm shadow-blue-100/50 dark:shadow-none
    hover:border-violet-200 dark:hover:border-violet-700
    hover:shadow-lg hover:shadow-violet-50 dark:hover:shadow-violet-900/10
    transition-all duration-200"
  >
    <span
      className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full
      bg-violet-50 dark:bg-violet-900/40
      text-violet-600 dark:text-violet-400
      border border-violet-100 dark:border-violet-800/60 mb-3"
    >
      {item.year}
    </span>

    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
      {item.degree}
    </h3>

    <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mt-0.5">
      {item.institution}
    </p>

    {item.description && (
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
        {item.description}
      </p>
    )}

    {item.grade && (
      <div
        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg
        bg-gray-50 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        {item.grade}
      </div>
    )}
  </div>
);

export default EducationSection;
