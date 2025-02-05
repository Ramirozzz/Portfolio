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
      </div>
    </section>
  );
}
