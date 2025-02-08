import React from "react";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [changeNavColor, setChangeNavColor] = useState(false);

  // Changing text color on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setChangeNavColor(true);
      } else setChangeNavColor(false);
    });
  });

  return (
    <nav className="navbar">
      <div className={`navbar-container ${changeNavColor && "navbar-bg"}`}>
        <div className="navbar-logo">
          <p className="logo">Rami Balaghi</p>
        </div>
        <ul className="navbar-list">
          <a href="#about">
            <li className="navbar-links">About</li>
          </a>

          <a href="#education">
            <li className="navbar-links">Education</li>
          </a>

          <a href="#work">
            <li className="navbar-links">Work</li>
          </a>

          <li className="navbar-links resume-download">Resume</li>
        </ul>
      </div>
    </nav>
  );
}
