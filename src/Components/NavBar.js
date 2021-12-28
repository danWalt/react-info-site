import React from "react";
import "../index.css";
import ImageLogo from "../images/react-logo.png";

export default function NavBar() {
  return (
    <nav>
      <img src={ImageLogo} className="nav--icon" />
      <h3 className="nav--logo-text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
