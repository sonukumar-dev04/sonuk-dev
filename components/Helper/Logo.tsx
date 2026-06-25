import { Terminal } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="#home"
      className="flex items-center gap-2 group"
      aria-label="Home"
    >
      <div
        className="flex items-center justify-center w-9 h-9 rounded-xl
          bg-gradient-to-br from-violet-600 to-indigo-600
          shadow-md shadow-violet-200 dark:shadow-violet-900/40
          group-hover:scale-105 transition-transform duration-200"
      >
        <Terminal size={18} className="text-white" strokeWidth={2.5} />
      </div>
    </Link>
  );
};

export default Logo;
