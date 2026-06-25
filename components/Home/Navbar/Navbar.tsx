"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { navLinks } from "@/constant/Constants";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import Logo from "@/components/Helper/Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [...navLinks].map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-violet-600 dark:text-violet-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-600 dark:bg-violet-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right side: Theme + Download CV */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggler />
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white transition-colors duration-200"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
