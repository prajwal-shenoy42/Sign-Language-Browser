// Import dependencies
import React, { useState } from "react";
import "./App.css";
import Demo from "./components/demo";
import Navbar from "./components/Navbar/Navbar";
import WebCam from "./components/WebCam";
import Intro from "./components/Intro/Intro"

function App() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <Navbar show={show} showCam={toggleShow} />
      {/* <Intro /> */}
      {!show && (
        <div style={{ margin: "0 auto", paddingTop: "12%" }}>
          <Demo />
        </div>
      )}
      {show && <WebCam />}
    </div>
  );
}

export default App;
