import React from 'react';
import style from './Projects.module.css';
import styleContainer from "./../common/styles/Container.module.css"
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"To Do List"} description={"List of things to do"} />
                    <Project title={"Portfolio"} description={"All of my projects"}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;
