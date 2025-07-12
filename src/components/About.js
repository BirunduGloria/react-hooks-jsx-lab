import React from "react";
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am passionate about building user-friendly web applications.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
