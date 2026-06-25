"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "@/constant/Constants";
import ThemeToggler from "@/components/Helper/ThemeToggler"; 

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:hidden">
      {/* Top bar: hamburger + theme toggler */}
      <div className="fixed top-2 right-3 z-50 flex items-center gap-1">
        <ThemeToggler />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 px-4 pt-16 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* CV Button */}
          <a
            href="/cv.pdf"
            download
            className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
