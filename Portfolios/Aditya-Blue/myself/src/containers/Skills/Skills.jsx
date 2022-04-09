import React, { Component } from 'react'
import { FaReact, FaHtml5, FaCss3, FaGitAlt, FaJsSquare, FaPython } from "react-icons/fa";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <div className="about-container" id="about">
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            I'm very ambitious full-stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my skills all the time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a curious
            person, open minded,music lover, photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="cube-zone">
          <div className="cubespinner">
            <div className="face1">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3 color="#28A4D9" />
            </div>
            <div className="face4">
              <FaGitAlt color="#EC4D28" />
            </div>
            <div className="face5">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="face6">
              <FaPython color="#1E415E" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;