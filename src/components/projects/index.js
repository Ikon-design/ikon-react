import React from "react";

import './projects.css'
import Image from '/src/images/shsh.jpg'
import {capsizeStyles} from '/src/style/styleObject'
import {Link} from "gatsby";

const Projects = () => {
    return (
        <div className='container-projects display-flex flex-direction-column'>
            <h2 className={"title-text little-text"}>Projets</h2>
            <div className={"big-text"}>Projets</div>
            <div className={"display-flex content-project border-radius"}>
                <img className={"content-project-image border-radius"} src={Image}/>
                <h3 className={"content-project-title"} style={{...capsizeStyles}}>Ikon</h3>
            </div>
            <div className={"display-flex flex-direction-column project-description-text-container"}>
                <p className={"content-text project-description-text"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                <Link to={"./"} className={"input-button"}>Accéder au projet</Link>
            </div>
        </div>
    )
}

export default Projects
