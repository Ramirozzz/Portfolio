import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

import "../styles/menu.css";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="menu">
      <div className="menu-container">
        <button className="toggleMenu-btn">
          <CgMenuGridO
            className="menu-icon"
            onClick={() => setToggleMenu(true)}
          />{" "}
          <div>Menu</div>
        </button>
        {toggleMenu && (
          <ul className="menu-list">
            <a href="#about">
              <li className="menu-links">About</li>
            </a>

            <a href="#education">
              <li className="menu-links">Education</li>
            </a>

            <a href="#work">
              <li className="menu-links">Work</li>
            </a>

            <li className="menu-links resume-download">Resume</li>
          </ul>
        )}
      </div>
    </div>
  );
}
