import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>I'd love to connect! Reach out to me via any of the platforms below.</p>
        
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <a href="mailto:ayushchugh07@gmail.com">ayushchugh07@gmail.com</a>
          </div>

          <div className="info-item">
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/ayush-chugh-2855a8259" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ayushchugh
            </a>
          </div>

          <div className="info-item">
            <FaGithub className="icon" />
            <a href="https://github.com/ayushchugh04" target="_blank" rel="noopener noreferrer">
              github.com/ayushchugh04
            </a>
          </div>
        </div>

        <p className="thankyou-msg">Looking forward to collaborating with you </p>
      </div>
    </section>
  );
}

export default Contact;
