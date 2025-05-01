import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false); // State to toggle modal visibility

  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal developer portfolio built with React.",
      image: "https://via.placeholder.com/600x300.png?text=Portfolio+Website",
      link: "https://github.com/your-username/portfolio",
    },
    {
      title: "E-Commerce App",
      description: "A simple e-commerce platform using React and Node.js.",
      image: "https://via.placeholder.com/600x300.png?text=E-Commerce+App",
      link: "https://github.com/your-username/ecommerce-app",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeatherMap API.",
      image: "https://via.placeholder.com/600x300.png?text=Weather+App",
      link: "https://github.com/your-username/weather-app",
    },
  ];

  // Handle the "Contact" button click
  const handleContactClick = () => {
    setShowContactModal(true); // Show the modal
  };

  // Handle closing the modal
  const closeModal = () => {
    setShowContactModal(false); // Hide the modal
  };

  // Handle the "View Work" button click to scroll to the projects section
  const handleViewWorkClick = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Ayush</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <h1>Hi, I am Ayush Chugh</h1>
        <h2>Full Stack Developer</h2>
        <div className="home-buttons">
          <button className="primary-btn" onClick={handleContactClick}>Contact</button>
          <button className="outline-btn" onClick={handleViewWorkClick}>View Work</button>
        </div>
      </section>
      

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
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
      </section>

      {/* Placeholder Sections */}
     
<section id="about" className="about-section">
  <div className="about-card">
    <h2>About Me</h2>
    <p>
      I am a passionate Full Stack Developer with experience in building dynamic web applications using technologies such as React, Node.js, and more.
      I have worked on various projects including portfolio websites, e-commerce platforms, and weather apps. I love to continuously learn new technologies and improve my skills.
    </p>
  </div>
</section>



<section id="skills" className="skills-section">
  <div className="skills-card">
    <h2>Skills</h2>
    <ul className="skills-list">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React JS</li>
      <li>PHP</li>
      <li>Java</li>
      <li>Android Development</li>
    </ul>
  </div>
</section>


      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Contact Information</h2>
              <button className="close-btn" onClick={closeModal}>X</button>
            </div>
            <div className="modal-body">
              <div className="contact-card">
                <p><strong>Name:</strong> Ayush Chugh</p>
                <p><strong>Email:</strong> ayushchugh07@gmail.com</p>
                <p><strong>Phone:</strong> 7777957448</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">© {new Date().getFullYear()} Ayush Chugh</footer>
    </div>
  );
}

export default App;
