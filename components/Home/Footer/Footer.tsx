"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Heart } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername", // ← replace
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername", // ← replace
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:youremail@gmail.com", // ← replace
    icon: MdEmail,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* ── Top row: brand + tagline + socials ── */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Link
              href="#home"
              className="text-xl font-bold text-gray-900 dark:text-white tracking-tight
                hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Sonu
              <span className="text-violet-600 dark:text-violet-400">.</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Building clean, functional web experiences with precision.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              Find me on
            </span>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400
                    bg-gray-50 dark:bg-gray-900
                    border border-gray-100 dark:border-gray-800
                    hover:text-violet-600 dark:hover:text-violet-400
                    hover:border-violet-200 dark:hover:border-violet-700
                    hover:bg-violet-50 dark:hover:bg-violet-900/20
                    transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-10 border-t border-gray-100 dark:border-gray-800" />

        {/* ── Bottom row: copyright ── */}
        <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1.5 flex-wrap">
          © {year} Built with
          <Heart size={12} className="text-violet-500 fill-violet-500" />
          using Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
