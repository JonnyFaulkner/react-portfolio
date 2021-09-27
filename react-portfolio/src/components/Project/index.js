import React from "react";

function Project(props) {
    const {
        project
    } = props

    return (
        < div >
            <a href={project.url}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
            </a>
        </div >
    )
}

export default Project;
