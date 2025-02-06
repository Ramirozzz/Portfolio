import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-layer"></div>
      <div className="hero-container">
        <span className="hero-span">
          <p>Hi i'm Rami B</p>
        </span>
        <h1>
          <span className="text-stroke">Junior </span> <br />
          Frontend <br /> developer
        </h1>

        <p className="hero-text">
          Passionated about creating Interactive & Beautifull things.
        </p>
      </div>
    </section>
  );
}
