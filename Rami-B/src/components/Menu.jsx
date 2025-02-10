import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

import "../styles/menu.css";

export default function Menu({ changeNavColor }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="menu">
      <div className="menu-container ">
        {!toggleMenu ? (
          <button
            onClick={() => setToggleMenu(true)}
            className={`toggleMenu-btn ${
              changeNavColor && "toggleMenu-colors"
            }`}
          >
            <CgMenuGridO className="menu-icon" />
            <div>Menu</div>
          </button>
        ) : (
          <button
            onClick={() => setToggleMenu(false)}
            className={`toggleMenu-btn ${
              changeNavColor && "toggleMenu-colors"
            }`}
          >
            <IoCloseOutline className="menu-icon" />
          </button>
        )}

        {toggleMenu && (
          <ul className="menu-list scale-up-center">
            <a href="#about">
              <li className="menu-links">About</li>
            </a>

            <a href="#education">
              <li className="menu-links">Education</li>
            </a>

            <a href="#work">
              <li className="menu-links">Work</li>
            </a>

            <div className="btn-container">
              <button className="button" type="button">
                <span className="button__text">Download CV</span>
                <span className="button__icon">
                  <a href="Rami-CV.pdf" download>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35 35"
                      id="bdd05811-e15d-428c-bb53-8661459f9307"
                      data-name="Layer 2"
                      className="svg"
                    >
                      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                    </svg>
                  </a>
                </span>
              </button>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}
