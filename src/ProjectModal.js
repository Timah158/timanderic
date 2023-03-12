import "./CSS/project.css"
import "./CSS/Interview.css"
import {ReactComponent as CloseIcon} from './SVGs/close_button.svg'

function ProjectModal ({props}) {
    let Author = 'Error not found.'
        if (props.currentProject.createdBy === 'Tim') { 
            Author = 'Tim Lopez'
        }
        else if (props.currentProject.createdBy === 'Eric') {
            Author = 'Eric Moore'
        }

    return (
    <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => props.setProjectModal(false)}/>
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
                    {props.currentProject.img != null && <img className='projectImage' alt={props.currentProject.title} src= {props.currentProject.img}/>}
                    <p>{props.currentProject.content.text[0]}</p>
                </div>
            </div>
        </div>
      </div>
    )
}

export default ProjectModal;