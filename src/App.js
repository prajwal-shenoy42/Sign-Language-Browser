// Import dependencies
import React from "react";
import "./App.css";
import NavbarIntro from "./components/Navbar/NavbarIntro";

import Intro from "./components/Intro/Intro";
import Learn from "./components/Learn/Learn";

function App() {
  return (
    <div className="App">
      <NavbarIntro />
      <Intro />
    </div>
  );
}

export default App;
