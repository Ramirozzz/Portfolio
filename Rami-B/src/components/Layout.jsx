import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

import "../styles/layout.css";
import About from "./About";
import Education from "./Education";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Education />
      </main>
    </>
  );
}
