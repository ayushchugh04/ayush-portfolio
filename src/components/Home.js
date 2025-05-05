import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleViewWorkClick = () => {
    window.location.href = "/projects";
  };

  return (
    <section className="home-section">
      <div className="home-content">
        <div className="text-area">
          <h1>Hi, I am Ayush Chugh</h1>
          <h2>Full Stack Developer</h2>
          <div className="home-buttons">
            <button className="primary-btn" onClick={handleContactClick}>
              Contact
            </button>
            <button className="outline-btn" onClick={handleViewWorkClick}>
              View Work
            </button>
          </div>
        </div>
        <div className="photo-area">
          <img src="/images/ayush.jpg" alt="Ayush Chugh" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Home;
