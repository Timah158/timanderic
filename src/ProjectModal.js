import {ReactComponent as CloseIcon} from './SVGs/close_button.svg'
import "./CSS/project.css"
import "./CSS/Interview.css"

function ProjectModal ({props}) {
    let Author = 'Error not found.'
        if (props.currentProject.createdBy === 'Tim') { 
            Author = 'Tim Lopez'
        }
        else if (props.currentProject.createdBy === 'Eric') {
            Author = 'Eric Moore'
        }

    function Content  ({project}) {
        return (
            project.map((project) => (
            <div className="projectBodyContainer" key={project.key}>
                    {project.images != null && <img className='projectImage' alt="" src= {project.images}/>}
                    <p>{project.text}</p>
                </div>
            ))
        )
    }

    return (
    <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => props.setProjectModal(false)}></CloseIcon>
            <h3>{props.currentProject.title}</h3>
            <div className="projectContentContainer">
                <div className="projectTitleContainer">
                    <div className="profileContainer">
                        <h4>Author: {Author}</h4>
                        <h4>Published: {props.currentProject.createdOn}</h4>
                        {props.currentProject.status != null && <h4>Status: {props.currentProject.status}</h4>}
                    </div>
                </div>
                <div className="projectBodyContainer">
                    <img className='projectImage' alt="" src= {props.currentProject.img}/>
                </div>
                <Content project = {props.currentProject.content}></Content>
            </div>
        </div>
      </div>
    )
}

export default ProjectModal;