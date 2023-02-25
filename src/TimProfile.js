import "./CSS/welcome_page.css"
import "./CSS/profile.css"
import React,{ useState, useEffect } from 'react';
import Tim from "./Pictures/Tim.jpg"
import { ReactComponent as Skills } from './SVGs/TimSkills.svg'
import { Project } from './models';
import { Amplify } from "@aws-amplify/core";
import { DataStore } from "@aws-amplify/datastore";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
DataStore.configure(awsExports);

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
      <section className="center profile">
        <div>
          <Skills className="skills"/>
        </div>
      </section>
    </div>
  );
}

function TimProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects();
  }, []);
  async function fetchProjects() {
    const apiData = await DataStore.query(Project, c => c.createdBy.eq("Tim"), {
      sort: s => s.createdAt("DESCENDING"),
      page: 0,
      limit: 3
    });
    const projectsFromAPI = apiData;
    setProjects(projectsFromAPI);
  }

  return (
    <div id='section_3' className="section">
      <section className="center">
        <div id="carouselWrapper">
          <h3>Projects</h3>
          <div className="projectsCarousel">
            {projects.map((project) => (
            <div
            className="carouselElement"
            key={project.id}
            >
              <div className="projectTitle">{project.title}</div>
              <div className="projectDescription">{project.description}</div>
            </div>))}
          </div>
          <div className="carouselPagination">
            <button className="carouselButton">&#60;</button>
            <button className="carouselButton">1</button>
            <button className="carouselButton">&#62;</button>
          </div>
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
