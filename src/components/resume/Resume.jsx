import React from "react";
import cv from "../../media/CV.pdf"
import "./resume.scss";

const Resume = () => {
  return (
    <div className="resume">
      <div className="content">
        <h1 className="content__title">
          <span></span>
          Resume
        </h1>
        <div className="experience">
          <p>Experience</p>
          <a href={cv} download rel="noreferrer" target="_blank">DOWNLOAD CV</a>
        </div>

        <div className="box">
          <div className="about">
            <h1 className="box__title">7/2022 - Present</h1>
            <p>Intern Front-end</p>
            <p>PMC</p>
          </div>
          <div className="description">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
            <br />
            <br />
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
