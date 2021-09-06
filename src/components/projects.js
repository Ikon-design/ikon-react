import React from "react";

import './projects.css'

import Data from '../data/data.json'

const Projects = () => {
    const data = Data.data.ikon.projects
    return(
        <div className='container-projects'>
            <h2>Projets</h2>
            <div>
                {data.map((data, index) =>{
                    return <h1 key={index}>{data.name}</h1>
                })}
            </div>
        </div>
    )
}

export default Projects
