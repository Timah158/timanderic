import "./CSS/welcome_page.css"
import Navbar from "./navbar"
import Footer from "./footer";
import React from "react";

function Heading() {
  return (
    <div id='section_1' className="section">
      <section className="center">
      <img src="https://stjohnboscochurch.com/images/rocketlauncher/pages/offline-page/img-01.jpg" alt="Eric" className="section_image"/>
      <div>
        <h1 className='main_title'>About Eric</h1>
        <br></br>
        <p>
          I am a Full-stack web developer with experience in Spring Boot, Thymeleaf, Bootstrap, MySQL, and MongoDB.
          I prefer working in Java, however I also have experience with other frameworks such as Django.
          If you're looking for someone that has a passion for Object-oriented principles and backend services, I'm your guy..
        </p>
      </div>
      <div id="main_title_buttons">
        <button>Contact</button>
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
            <h3>Skills</h3>
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

function EricProfile() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Heading></Heading>
      <EricSkills></EricSkills>
      <EricProjects></EricProjects>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default EricProfile;
