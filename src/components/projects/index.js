import React from "react";

import './projects.css'
import Image from '/src/images/shsh.jpg'
import {capsizeStyles} from '/src/style/styleObject'

const Projects = () => {
    return(
        <div className='container-projects display-flex flex-direction-column'>
            <h2 className={"title-text little-text"}>Projets</h2>
            <div className={"big-text"}>Projets</div>
            <div className={"display-flex content-project"}>
                <img className={"content-project-image border-radius"} src={Image}/>
                <h3 className={"content-project-title"} style={{...capsizeStyles}}>test</h3>
            </div>
        </div>
    )
}

export default Projects
