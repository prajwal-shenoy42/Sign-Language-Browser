import React from "react";
import "./Navbar.css";

export default function Navbar({ show, showCam }) {
  return (
    <div className="nav nav_bg">
      <div className="nav_l">
        <p className="nav_text">Sign Language Detection</p>
      </div>
      <div className="nav_r">
        {show ? (
          <button onClick={showCam} className="nav_btn nav_close">
            Close Camera
          </button>
        ) : (
          <button onClick={showCam} className="nav_btn ">
            Open Camera
          </button>
        )}
      </div>
    </div>
  );
}
