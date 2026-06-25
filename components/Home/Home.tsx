import React from "react";
import HeroSection from "./Hero/Hero";
import SkillsSection from "./Skills/Skills";
import AboutSection from "./About/About";
import ProjectsSection from "./Project/Project";
import EducationSection from "./Education/Education";
import ContactSection from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Home;
