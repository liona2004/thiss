import React from 'react';
import style from './Skills.module.css';
import styleContainer from "./../common/styles/Container.module.css"
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>

            <div className= {`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>Skills</h2>

                <div className={style.skills}>
                    <Skill title={"Js"} description={"Familiar with native JavaScript"}/>
                    <Skill title={"CSS"} description={"Know the fundaments of CSS layout"}/>
                    <Skill title={"React"} description={"Make projects using React framework"}/>
                </div>
                <div className={style.skills}>
                    <Skill title={"TypeScript"} description={"Know TypeScript language"}/>
                    <Skill title={"HTML"} description={"Create HTML elements using TypeScript"}/>
                    <Skill title={"Tests"} description={"Can write tests to test the project"}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
