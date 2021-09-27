import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            name: "Run Buddy",
            description: "A mock site for a company called run buddy",
            url: "https://jonnyfaulkner.github.io/run-buddy/index.html",
            technologies: [
                'HTML',
                'CSS'
            ]
        },
        {
            name: "Pub Finder",
            description: "A website for finding local breweries",
            url: "https://javid17.github.io/activity-finder/index.html",
            technologies: [
                'HTML',
                'CSS',
                'JavaScript'
            ]
        }
    ]

    return (
        <div>
            <h2>Projects:</h2>
            {projects.map((project) => (
                <Project project={project} key={project.name}></Project>
            ))}
        </div>
    )
}

export default Portfolio;