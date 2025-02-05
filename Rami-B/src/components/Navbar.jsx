import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <p className="logo">Rami Balaghi</p>
        </div>
        <ul className="navbar-list">
          <a href="/">
            <li className="navbar-links">Hem</li>
          </a>

          <a href="/">
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
