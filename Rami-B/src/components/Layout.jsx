import React from "react";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
