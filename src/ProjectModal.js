// import React,{ useState, useEffect } from 'react';
// import {ReactComponent as CloseIcon} from './SVGs/close_button.svg'
// import "./CSS/project.css"
// import "./CSS/Interview.css"
// import { ProjectSection } from './models';
// import { Amplify } from "@aws-amplify/core";
// import { DataStore } from "@aws-amplify/datastore";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);
// DataStore.configure(awsExports);

// function ProjectModal ({props}) {
//     let Author = 'Error not found.'
//         if (props.currentProject.createdBy === 'Tim') { 
//             Author = 'Tim Lopez'
//         }
//         else if (props.currentProject.createdBy === 'Eric') {
//             Author = 'Eric Moore'
//         }

//     function Content  ({projectID}) {
//         const [projectSections, setProjectSections] = useState([]);
//         useEffect(() => { fetchProjectSections(projectID) });
        
//         async function fetchProjectSections(projectID) {
//             const apiData = await DataStore.query(ProjectSection, c => c.Project.eq(projectID), {
//                 sort: s => s.index("ASCENDING"),
//             });
//             const projectsFromAPI = apiData;
//             setProjectSections(projectsFromAPI);
//         }

//         return (
//             projectSections.map((projectSection) => (
//             <div className="projectBodyContainer" key={projectSection.id}>
//                 <h2 className='projectSectionTitle'>{projectSection.title}</h2>
//                 {projectSection.images.map((image, i) => (
//                     <img className='projectImage' alt="" src= {image} key={i}/>
//                 ))}
//                 {projectSection.text.map((paragraph, i) => (
//                     <p key={i}>{paragraph}</p>
//                 ))}
//                 {projectSection.links.map((link, i) => (
//                     <a href={link} key={i} target="_blank" rel="noreferrer">{link}</a>
//                 ))}
//             </div>
//             ))
//         )
//     }
//     return (
//     <div className='modal_wrapper'>
//         <div className='modal_content'>
//             <CloseIcon className='close_button' onClick={() => props.setProjectModal(false)}></CloseIcon>
//             <h3>{props.currentProject.title}</h3>
//             <div className="projectContentContainer">
//                 <div className="projectTitleContainer">
//                     <div className="profileContainer">
//                         <h4>Author: {Author}</h4>
//                         <h4>Published: {props.currentProject.createdOn}</h4>
//                         {props.currentProject.status != null && <h4>Status: {props.currentProject.status}</h4>}
//                     </div>
//                 </div>
//                 <Content projectID = {props.currentProject.id}></Content>
//             </div>
//         </div>
//       </div>
//     )
// }

// export default ProjectModal;