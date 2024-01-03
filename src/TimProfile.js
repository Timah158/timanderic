import "./CSS/welcome_page.css"
import "./CSS/profile.css"
import React from 'react';
import Tim from "./Pictures/Tim.jpg"
import { ReactComponent as Skills } from './SVGs/TimSkills.svg'
import ProfileCarousel from './ProfileCarousel'

function Heading({props}) {
  return (
    <div id='section_1' className="section">
      <section className="center profile">
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
          <button onClick={() => props.setIntModal(true)}>Contact</button>
          <button><a href={require("./resumes/timResume.docx")} download="timResume.docx">Resume</a></button>
        </div>
      </section>
    </div>
  );
}

function TimSkills() {
  return (
    <div id='section_3' className="section odd_section">
      <section className="center profile">
        <div>
          <h3>Certifications</h3>
          <div data-iframe-width="150" 
            data-iframe-height="270" 
            data-share-badge-id="e83dab79-d868-479e-a72c-723389c90e71" 
            data-share-badge-host="https://www.credly.com">
          </div>
          <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
      </section>
    </div>
  );
}

function TimCerts() {
  return(
    <div id='section_4' className="section">
      <section className="center profile">
        <div>
          <Skills className="skills"/>
        </div>
      </section>
    </div>
  )
}

function TimProfile({props}) {
  return (
    <React.Fragment>
      <Heading props={props}></Heading>
      <TimCerts></TimCerts>
      <TimSkills></TimSkills>
      <ProfileCarousel props={{props, user:"Tim"}}></ProfileCarousel>
    </React.Fragment>
  );
}

export default TimProfile;
