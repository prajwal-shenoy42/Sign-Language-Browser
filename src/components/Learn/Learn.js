import React, { useState } from "react";
import Demo from "../demo"
import Navbar from "../Navbar/Navbar";
import WebCam from "../WebCam";

export default function Learn() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Navbar show={show} showCam={toggleShow} />
      {!show && (
        <div style={{ margin: "0 auto", paddingTop: "12%" }}>
          <Demo />
        </div>
      )}
      {show && <WebCam />}
    </>
  );
}
