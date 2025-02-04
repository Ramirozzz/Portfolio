import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <p className="logo">Rami Balaghi</p>
        </div>
        <ul className="navbar-list">
          <li className="navbar-links">Hem</li>
          <li className="navbar-links">About</li>
          <li className="navbar-links">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
