import React from "react";
import project1 from "../assets/images/project1.png";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import "../styles/work.css";

export default function Work() {
  return (
    <section id="work" className="work">
      <h1 className="work-title">Some of my projects</h1>
      <div className="work-wrapper">
        <div className="work-container">
          <div className="work-item">
            <div className="bg-layer"></div>
            <div className="work-prj-name">
              <h4>sten sax påse</h4>
              <p>JavaScript Game Project</p>
            </div>

            <div className="work-info">
              <a href="">
                View Gitlab
                {/* <span className="arrow-icon">
                  <IoIosArrowRoundForward />
                </span> */}
              </a>
              <FaGitlab className="work-icon" />
            </div>
          </div>
          <div className="work-item">
            <div className="bg-layer"></div>
            <div className="work-prj-name">
              <h4>RB Store</h4>
              <p>React JS Project</p>
            </div>

            <div className="work-info">
              <a href="">
                View Gitlab{" "}
                {/* <span className="arrow-icon">
                  <IoIosArrowRoundForward />
                </span> */}
              </a>

              <FaGitlab className="work-icon" />
            </div>
          </div>
          <div className="work-item">
            <div className="bg-layer"></div>
            <div className="work-prj-name">
              <h4> Recipes Blog</h4>
              <p>Angular Project</p>
            </div>

            <div className="work-info">
              <a href="">
                View Github
                {/* <span className="arrow-icon">
                  <IoIosArrowRoundForward />
                </span> */}
              </a>
              <FaGithub className="work-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
