import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
