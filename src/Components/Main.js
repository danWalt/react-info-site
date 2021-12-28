import React from "react";
import "../index.css";

export default function Main() {
  return (
    <div className="main">
      <h1 className="main-header">Fun facts about react</h1>
      <ul className="main-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintined by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
