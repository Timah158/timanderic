import React,{ useState, useEffect } from 'react';
import { Project } from './models';
import { Amplify } from "@aws-amplify/core";
import { DataStore } from "@aws-amplify/datastore";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
DataStore.configure(awsExports);

function ProfileCarousel({user}) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      fetchProjects();
    });
    async function fetchProjects() {
      const apiData = await DataStore.query(Project, c => c.createdBy.eq(user), {
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

  export default ProfileCarousel;