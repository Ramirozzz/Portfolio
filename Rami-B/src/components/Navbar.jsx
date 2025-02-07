import React from "react";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [changeNavColor, setChangeNavColor] = useState(false);

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
          <a href="/">
            <li className="navbar-links">Hem</li>
          </a>

          <a href="#education">
            <li className="navbar-links">Education</li>
          </a>

          <a href="#about">
            <li className="navbar-links">About</li>
          </a>

          <li className="navbar-links">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
