import "./CSS/project.css"
import Eric from "./Pictures/Eric.jpg"
import Tim from "./Pictures/Tim.jpg"

function Project ({project}) {
    let Author = ''
        if (project.createdBy === 'Tim') { Author === 'Tim Lopez'}
        else Author === 'Eric Moore'

    return (
    <div id='section_4' className="section">
        <section>
            <div className="profileContainer">
                {project.createdBy === "Eric" && <img src={Eric} alt="Eric" className="project_profile_picture"/>}
                {project.createdBy === "Tim" && <img src={Tim} alt="Tim" className="project_profile_picture"/>}
                <h4>Author: {Author}</h4>
                <h4>Published: {project.createdOn}</h4>
            </div>
            <h3 className="project_title">{project.title}</h3>
        </section>
      </div>
    )
}

export default Project;