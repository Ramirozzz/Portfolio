import React from "react";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1>Rami Balaghi</h1>
      </div>
      <div className="footer-bottom-row">
        <div className="socials">
          <p className="footer-text">A Frontend developer student.</p>
          <div className="socials-container">
            <FaGitlab className="socials-icon" />
            <FaGithub className="socials-icon" />
            <FaLinkedin className="socials-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}
