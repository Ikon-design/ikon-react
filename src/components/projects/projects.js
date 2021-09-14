import React from "react";

import './projects.css'

import {Test} from "../header/graphQL";

const Projects = () => {
    return(
        <div className='container-projects display-flex align-items-center justify-content-center'>
            <h2 className={"title-text"}>Projets</h2>
            <div className={"title-text"}>Projets</div>
            <Content />
        </div>
    )
}

const Content = () => {
    const data = Test().projects
    return (
        <div className={"display-flex"}>
            {data.map((data, index) =>{
                return (
                <div key={data.id}>
                    <h1 >{data.name}</h1>
                    <img alt={"Image du projet " + data.name} src={data.images.bgImg} />
                </div>
                )
            })}
        </div>
    )
}

export default Projects
