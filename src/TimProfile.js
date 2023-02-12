import "./CSS/welcome_page.css"
import "./CSS/profile.css"
import React from "react";
import Tim from "./Pictures/Tim.jpg"
import {ReactComponent as Skills} from './SVGs/TimSkills.svg'

function Heading({props}) {
  return (
    <div id='section_1' className="section">
      <section className="center">
        <img src={Tim} alt="Tim" className="profile_picture" />
        <div>
          <h1 className='main_title'>About Tim</h1>
          <br></br>
          <p>
            I am an IT professional with experience in technical support, front-end development, and a passion for cybersecurity.
            During my time at university I worked as a call technician for 2 years providing technical support and troubleshooting.
            While at this job I was eventually moved to the development team where I gained experience with HTML, CSS, and JavaScript.
          </p>
        </div>
        <div id="main_title_buttons">
          <button onClick={() => props(true)}>Contact</button>
          <button><a href={require("./resumes/timResume.docx")} download="tim.docx">Resume</a></button>
        </div>
      </section>
    </div>
  );
}

function TimSkills() {
  return (
    <div id='section_3' className="section odd_section">
      <section className="center">
        <div>
          <Skills className="skills"/>
        </div>
      </section>
    </div>
  );
}

function TimProjects() {
  return (
    <div id='section_3' className="section">
      <section className="center">
        <div>
          <h3>Current Projects</h3>
        </div>
      </section>
    </div>
  );
}

function TimProfile({props}) {
  return (
    <React.Fragment>
      <Heading props={props}></Heading>
      <TimSkills></TimSkills>
      <TimProjects></TimProjects>
    </React.Fragment>
  );
}

export default TimProfile;
