import { useState, useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import intro from "../src/assets/videos/intro.mp4";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <video
          id="video"
          src={intro}
          autoPlay="autoplay"
          playsInLine="playsinline"
          loop={false}
          muted={true}
        />
      ) : (
        <div className="portfolio">
          <HashRouter>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </HashRouter>
        </div>
      )}
    </>
  );
}

export default App;
