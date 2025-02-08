import React from "react";
import about from "../assets/images/about.png";
import { GiGraduateCap } from "react-icons/gi";

import Marquee from "react-fast-marquee";

import "../styles/education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">Education & Skills </h2>

        <div className="education-row">
          <div className="education-content">
            <div className="education-content-title">
              <GiGraduateCap className="graduate-icon" />
              <h3>Software Development - Lexicon Linköping 2021 - 2022.</h3>
            </div>

            <p>
              Depth knowledge of C++, python, django and studies in UX/UI design
              principles and Agile methodologies.
            </p>
            <div className="marquee-container">
              <div className="marquee">
                <h3>Skills:</h3>
                <Marquee pauseOnHover={false} direction="right" speed={70}>
                  <div className="marquee-skill">Html</div>
                  <div className="marquee-skill">CSS</div>
                  <div className="marquee-skill">Bootstrap</div>
                  <div className="marquee-skill">C++</div>
                  <div className="marquee-skill">Python</div>
                  <div className="marquee-skill">Django</div>
                  <div className="marquee-skill">MySQL</div>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="education-content">
            <div className="education-content-title">
              <GiGraduateCap className="graduate-icon" />
              <h3>Frontend Development | EC Utbildning Växjö 2024 - 2026.</h3>
            </div>

            <p>
              Depth knowledge of HTML, CSS, JavaScript, React, TypeScript,
              Angular, C#, .NET, PostgreSQL and studies in UX/UI design
              principles and Agile methodologies.
            </p>
            <div className="marquee-container">
              <div className="marquee">
                <h3>Skills:</h3>
                <Marquee pauseOnHover={false} direction="left" speed={70}>
                  <div className="marquee-skill">Html</div>
                  <div className="marquee-skill">CSS</div>
                  <div className="marquee-skill">JavaScript</div>
                  <div className="marquee-skill">React</div>
                  <div className="marquee-skill">TypeScript</div>
                  <div className="marquee-skill">Angular</div>
                  <div className="marquee-skill">C#</div>
                  <div className="marquee-skill">.NET</div>
                  <div className="marquee-skill">PostgreSQL</div>
                  <div className="marquee-skill">UX/UI design</div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
