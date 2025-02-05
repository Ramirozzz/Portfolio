import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { Outlet, Link } from "react-router-dom";

import "../styles/layout.css";
import About from "./About";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
