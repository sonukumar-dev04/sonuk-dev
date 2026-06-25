import React from "react";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
}

const SectionHeading = ({
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) => {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        {title}{" "}
        <span className="text-violet-600 dark:text-violet-400">
          {highlight}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
