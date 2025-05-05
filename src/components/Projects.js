import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio built with React.",
    image: "/images/image.png",
    link: "https://github.com/ayushchugh04/ayush-portfolio.git",
  },
  {
    title: "E-Commerce App",
    description: "A simple e-commerce platform using PHP.",
    image: "/images/ecom.png",
    link: "https://github.com/ayushchugh04/E-commerce-website.git",
  },
  {
    title: "Quiz Web",
    description: "A Quiz Website that will ask you simple questions in a time-constrained environment.",
    image: "/images/quiz.png",
    link: "https://github.com/ayushchugh04/quiz.git",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
