import "./CSS/welcome_page.css"
import "./CSS/profile.css"
import React,{useState, useEffect} from 'react';
import Eric from "./Pictures/Eric.jpg"
import {ReactComponent as Skills} from './SVGs/EricSkills.svg'
import { Project } from './models';
import {Amplify} from "@aws-amplify/core";
import {DataStore} from "@aws-amplify/datastore";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
DataStore.configure(awsExports);

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
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects();
  }, []);
  async function fetchProjects() {
    const apiData = await DataStore.query(Project, c => c.createdBy.eq("Eric"));
    const projectsFromAPI = apiData;
    setProjects(projectsFromAPI);
  }

  return (
    <div id='section_3' className="section">
      <section className="center">
        <div id="carouselWrapper">
          <h3>Current Projects</h3>
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
      <EricProjects></EricProjects>
    </React.Fragment>
  );
}

export default EricProfile;
