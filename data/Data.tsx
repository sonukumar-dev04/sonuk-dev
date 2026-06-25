import { MapPin, GraduationCap, Laptop, Coffee } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel,
} from "react-icons/si";

// ─── About Stats ───────────────────────────────────────────
export const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "10+", label: "GitHub Repos" },
  { value: "10+", label: "Technologies" },
  { value: "6+", label: "Months Coding" },
];

// ─── About Info ────────────────────────────────────────────
export const info = [
  { icon: MapPin, text: "Hyderabad, India" },
  { icon: GraduationCap, text: "B.Tech — Computer Science" },
  { icon: Laptop, text: "Open for opportunities" },
  { icon: Coffee, text: "Powered by chai & curiosity" },
];

// ─── Skills ────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss  },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────
export const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Features smooth scroll navigation, dark/light mode, type animations, and fully responsive design across all devices.",
    image: "/images/projects/portfolio.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://yourportfolio.vercel.app",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Project Two",
    description:
      "Describe your second project here — what problem it solves, what you built, and what you learned. Keep it specific and honest.",
    image: "/images/projects/project2.png",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://yourproject.vercel.app",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    description:
      "Describe your third project here. Even a small CRUD app or a clone project counts — mention the key features and tech you used.",
    image: "/images/projects/project3.png",
    stack: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://yourproject.vercel.app",
    githubUrl: "https://github.com/yourusername/project3",
  },
];

// ─── Education ─────────────────────────────────────────────
export const education = [
  {
    type: "school",
    year: "2018 - 2019",
    degree: "Secondary School (10th)",
    institution: "Your School Name",
    description: "Completed schooling with focus on Science and Mathematics.",
    grade: "GPA: 9.2 / 10",
  },
  {
    type: "intermediate",
    year: "2020 - 2021",
    degree: "Intermediate (12th) — MPC",
    institution: "Your College Name",
    description:
      "Studied Mathematics, Physics and Chemistry. Developed strong analytical thinking.",
    grade: "Score: 92%",
  },
  {
    type: "degree",
    year: "2022 - 2026",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Your University Name",
    description:
      "Currently pursuing my degree with focus on web development, data structures, and software engineering.",
    grade: "CGPA: 7.8 / 10",
  },
  {
    type: "course",
    year: "2024",
    degree: "Full Stack Web Development",
    institution: "Online / Self-taught (YouTube, Udemy etc.)",
    description:
      "Learned MERN stack, Next.js, TypeScript, Tailwind CSS and built multiple projects hands-on.",
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
    value: "youremail@gmail.com",
    href: "mailto:youremail@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];
