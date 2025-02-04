import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          <span className="hero-span">
            <p>Hi i'm</p>
          </span>
          Rami B <br />
          a Junior <br />
          Frontend <br /> developer
        </h1>

        <p className="hero-text">
          Passionated about creating Interactive & Beautifull things.
        </p>
      </div>
    </section>
  );
}
