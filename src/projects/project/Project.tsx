import React from 'react';
import style from './Project.module.css';

type StyleType = {
    title: string
    description: string
}

function Project(props: StyleType) {
    return (
        <div className={style.projectTwo}>
            <div className={style.projectVideo}><div className={style.watchButton}>Watch</div></div>


            <span className={style.projectDescription}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.title}>{props.description}</div>
            </span>
        </div>
    );
}

export default Project;
