import React from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import ResumeNew from "./Resume/ResumeNew";

const Pages = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <ResumeNew />
    </div>
  );
};

export default Pages;
