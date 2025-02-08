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

  const textColor = scrollPosition > 470 ? "#212121d8" : "#c4c4c4";
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
          experiences. My interest in web development is huge, and I thrive when
          I'm creating, designing, learning, and constantly thinking about how
          to improve and optimize. <br />
          <span
            style={{ color: textColor, transition: "all 0.8s ease" }}
            className="about-text-span"
          >
            As a dedicated
            <strong className="strong-text"> Junior Frontend Developer </strong>
            student, I am right now in the (Learning in Work) phase of my
            education and i am looking for an internship that offers
            opportunities to learn more and grow in my role. I am ready for big
            challenges and to expand my knowledge.
          </span>
        </p>
      </div>
    </section>
  );
}
