import React, { useState, useEffect, useRef } from "react";
import "../styles/about.css";
export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor = scrollPosition > 470 ? "#222222" : "#c4c4c4";
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-title-container">
          <h4 className="about-title">Little something about me:</h4>
        </div>

        <p
          className="about-text"
          style={{ color: textColor, transition: "all 0.8s ease" }}
        >
          My name is Rami Balaghi and I enjoy with passion creating dynamic web
          experiences. My interest in
          <strong className="strong-text"> Web Development</strong> is huge, and
          I thrive when I'm designing, learning, exploring, and constantly
          thinking about how to improve and optimize. <br />
          <span
            style={{ color: textColor, transition: "all 0.8s ease" }}
            className="about-text-span"
          >
            As a dedicated
            <strong className="strong-text"> Junior Frontend Developer </strong>
            student, I am right now in the LIA (Learning in Work) phase of my
            education and am looking for an internship that offers opportunities
            to learn more and grow in my role. I am ready for big challenges and
            expand my knowledge.
          </span>
        </p>
        {/* <div className="btn-container">
          <button className="button" type="button">
            <span className="button__text">Resume</span>
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
        </div> */}
      </div>
    </section>
  );
}
