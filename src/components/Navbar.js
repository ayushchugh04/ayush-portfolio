import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Make sure your styles are here

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="logo">Ayush</div>
      <ul className="nav-links">
        <li className={location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={location.pathname === "/skills" ? "active" : ""}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={location.pathname === "/certificates" ? "active" : ""}>
          <Link to="/certificates">Certificates</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navbar-actions">
        {/* Download Resume Button */}
        <a
          href="/ayushresume.pdf"
          download="Ayush_Chugh_Resume.pdf"
          className="resume-btn"
          style={{ textDecoration: 'none' }}
        >
          Download Resume
        </a>

        {/* Dark Mode Toggle */}
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
