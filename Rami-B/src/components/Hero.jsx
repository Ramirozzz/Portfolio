import React from "react";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-layer"></div>
      <div className="hero-container">
        <h1>
          <span className="text-stroke">Rami B </span> <br />
          Frontend <br /> developer <br /> Student.
        </h1>

        <div className="hero-text-row">
          <p className="hero-text">
            Passionated about creating Interactive & Beautifull things.
          </p>
          <p className="hero-contact-info">
            Ramibalaghi@hotmail.com <br />
            (+46)762682562 <br />
            Linkedin: Rami Balaghi
            {/* <FaLinkedin className="socials-icon" /> Rami Balaghi */}
          </p>
        </div>
      </div>
    </section>
  );
}
