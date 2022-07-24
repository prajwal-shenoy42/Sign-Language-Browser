import React from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/learn");
  };
  return (
    <div className="intro_content">
      <>
        <h1>Want to learn Sign Language?</h1>
        <h2>Demo & Practise, all in one place.</h2>
        <p>Ready to learn? Click the button below.</p>

        <button onClick={redirect} className="intro_btn">
          Get Started ❱
        </button>
      </>
    </div>
  );
}
