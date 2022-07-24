// Import dependencies
import React, { useState } from "react";
import "./App.css";

import DenseAppBar from "./components/AppBar/DenseAppBar";
import Demo from "./components/demo";
import WebCam from "./components/webCam";

function App() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <DenseAppBar show={show} showCam={toggleShow} />
      {!show && (
        <div style={{ margin: "0 auto", marginTop: "80px" }}>
          <Demo />
        </div>
      )}
      {show && <WebCam />}
    </div>
  );
}

export default App;
