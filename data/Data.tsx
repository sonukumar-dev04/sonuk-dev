import { MapPin, GraduationCap, Laptop, Code } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiRedux,
  SiShadcnui, 
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql ,
  SiGit,
  SiGithub,
  SiNpm ,
  SiPostman,
  SiVercel,
  SiRender ,
} from "react-icons/si";

// ─── About Stats ───────────────────────────────────────────
export const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "10+", label: "GitHub Repos" },
  { value: "15+", label: "Technologies" },
  { value: "10+", label: "Months Coding" },
];

// ─── About Info ────────────────────────────────────────────
export const info = [
  { icon: MapPin, text: "Hyderabad, India" },
  { icon: GraduationCap, text: "B.Com — Computers" },
  { icon: Laptop, text: "Open for opportunities" },
  { icon: Code, text: "MERN & Next.js developer" },
];

// ─── Skills ────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Frontend",
    skills: [
       { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap ", icon: SiBootstrap },
      { name: "Redux  ", icon: SiRedux  },
      { name: "Shadcnui   ", icon: SiShadcnui   },
     
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose ", icon: SiMongoose  },
      { name: "Mysql  ", icon: SiMysql   },

    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Npm ", icon: SiNpm  },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Render ", icon: SiRender  },
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────
export const projects = [
  {
    title: "Chef AI",
    description:
      "AI-Powered Recipe & Pantry Management Platform. Built with Next.js and Gemini AI — cook with ingredients you already have, get nutritional breakdowns, and export recipes as PDF.",
    image: "/images/chefai.png",
    stack: ["Next.js", "Gemini AI", "Neon DB", "Clerk", "shadcn/ui"],
    liveUrl: "https://chef-ai-lilac.vercel.app",
    githubUrl: "https://github.com/light04sk/ChefAi",
  },
  {
    title: "ProNet",
    description:
      "Full-Stack Social Networking Platform with real-time chat via Socket.io, JWT auth, friend requests, live notifications, and Cloudinary image storage.",
    image: "/images/pronet.png",
    stack: ["MERN Stack", "Socket.io", "Redux Toolkit", "JWT", "Cloudinary"],
    liveUrl: "https://mern-social-network.vercel.app",
    githubUrl: "https://github.com/light04sk/mern-social-network",
  },
  {
    title: "Cartify",
    description:
      "E-Commerce Frontend with filtering, search, sorting, pagination, infinite scroll, cart/wishlist functionality, and Supabase authentication.",
    image: "/images/cartify.png",
    stack: ["React.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://cartify-inky-omega.vercel.app",
    githubUrl: "https://github.com/light04sk/Cartify",
  },
  {
    title: "TripTide",
    description:
      "Airbnb-Inspired Property Listing Platform with full CRUD, owner auth, review/rating system, Cloudinary uploads, and Map API location display.",
    image: "/images/triptide.png",
    stack: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "Map API"],
    liveUrl: "https://trip-tide-project.onrender.com",
    githubUrl: "https://github.com/light04sk/Trip-Tide-Airbnb-clone-",
  },
];

// ─── Education ─────────────────────────────────────────────
export const education = [
  {
    type: "school",
    year: "2020",
    degree: "Secondary School (10th)",
    institution: "Santhoshi Matha School",
    description:
      "Completed my schooling with a well-rounded academic foundation.",
    grade: "GPA: 9.0 / 10",
  },
  {
    type: "intermediate",
    year: "2020 - 2022",
    degree: "Intermediate (12th) — MEC",
    institution: "Bhavan's Sri Aurobindo Junior College",
    description:
      "Studied Mathematics, Economics and Commerce. Built a strong foundation in analytical and logical thinking.",
  },
  {
    type: "degree",
    year: "2022 - 2025",
    degree: "B.Com — Computers",
    institution: "St. Mary's Centenary Degree College",
    description:
      "Graduated with a combined focus on commerce fundamentals and computer applications.",
    grade: "CGPA: 7.8 / 10",
  },
  {
    type: "course",
    year: "2025",
    degree: "Full Stack Web Development — Delta 7.0",
    institution: "Apna College",
    description:
      "Completed an in-depth MERN stack program covering both frontend and backend development — from building responsive UIs to designing REST APIs, working with databases, authentication, and deployment.",
    grade: "Completed ✓",
  },
];

// ─── Contact Info ──────────────────────────────────────────
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const contactInfo = [
  {
    icon: MdEmail,
    label: "Email",
    value: "nsonukumar39630@gmail.com",
    href: "mailto:nsonukumar39630@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/light04sk",
    href: "https://github.com/sonukumar-dev04",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://www.linkedin.com/in/sonu-kumar-dev04/",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];
