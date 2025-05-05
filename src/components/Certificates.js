import React from "react";
import "./Certificates.css";

const certificates = [
  {
    title: "AWS Badge",
    description: "AWS certi bedge from Amazone.",
    link: "https://www.credly.com/go/gymvTiJd",
  },
  {
    title: "Using Python to Access Web Data",
    description: "Using Python to Access Web Data From Coursera.",
    link: "https://www.coursera.org/account/accomplishments/verify/25URE5KS5PWC",
  },
  {
    title: "Python Data Structures",
    description: "Python Data Structures From Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/LJTPWXCCCL2M",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    description: "The Bits and Bytes of Computer Networking From Google",
    link: "https://www.coursera.org/account/accomplishments/verify/VD6K249HQLFZ",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    description: "Programming for Everybody (Getting Started with Python) From Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/Z2PT267GPTW7",
  },
  {
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    description: "Capstone: Retrieving, Processing, and Visualizing Data with Python From Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/VDQJ6MDT5CL4",
  },
];

function Certificates() {
  return (
    <section className="certificates">
      <h2>Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
