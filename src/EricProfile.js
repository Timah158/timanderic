import "./CSS/welcome_page.css"
import "./CSS/profile.css"
import React from "react";
import Eric from "./Pictures/Eric.jpg"
import {ReactComponent as Skills} from './SVGs/EricSkills.svg'

function Heading({props}) {
  return (
    <div id='section_1' className="section">
      <section className="center">
        <img src={Eric} alt="Eric" className="profile_picture" />
        <div>
          <h1 className='main_title'>About Eric</h1>
          <br></br>
          <p>
            I am a full-stack web developer with experience in Spring Boot, Thymeleaf, Bootstrap, MySQL, PostgreSQL, and MongoDB.
            I prefer working in Java, but I also have experience with other languages and webstacks such as .NET in C# and Django in Python.
            If you're looking for someone that has a passion for Object-Oriented design principles and scalable backend servers, I'm your guy.
          </p>
        </div>
        <div id="main_title_buttons">
          <button onClick={() => props(true)}>Contact</button>
          <button><a href={require("./resumes/ericResume.pdf")} download="eric.pdf">Resume</a></button>
        </div>
      </section>
    </div>
  );
}

function EricSkills() {
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

function EricProjects() {
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

function EricProfile({props}) {
  return (
    <React.Fragment>
      <Heading props={props}></Heading>
      <EricSkills></EricSkills>
      {/* <EricProjects></EricProjects> */}
    </React.Fragment>
  );
}

export default EricProfile;
