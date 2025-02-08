import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

import "../styles/layout.css";
import About from "./About";
import Education from "./Education";
import Work from "./Work";
import Footer from "./Footer";

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
        <Work />
        {/* <Footer /> */}
      </main>
    </>
  );
}
