function Project ({project}) {
    let Author = ''
        if (project.createdBy === 'Tim') { Author === 'Tim Lopez'}
        else Author === 'Eric Moore'

    return (
    <div id='section_4' className="section">
        <section>
            <div>
                <h4>Author: {Author}</h4>
            </div>
            <h3 className="project_title">{project.title}</h3>
        </section>
      </div>
    )
}

export default Project;