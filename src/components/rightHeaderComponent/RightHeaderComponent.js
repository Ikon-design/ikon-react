import React from "react";
import {Link} from "gatsby";

import "./rightHeaderComponent.css"

const RightHeaderComponent = () => {
    return (
        <ul className="display-flex align-items-center full-height">
            <li 
                className="align-self-center align-items-center text-menu   display-flex flex-direction-column justify-content-space-between">
                <Link className="content-text" to="../">Accueil</Link>
            </li>
            <li 
                className="align-self-center align-items-center text-menu   display-flex flex-direction-column justify-content-space-between">
                <Link onMouseEnter={hover} className="content-text" to="#presentation">Présentation</Link>
            </li>
            <li 
                className="align-self-center text-menu align-items-center  display-flex flex-direction-column justify-content-space-between">
                <Link className="content-text" to="/projects">Projets</Link>
            </li>
            <li 
                className="align-self-center text-menu align-items-center  display-flex flex-direction-column justify-content-space-between">
                <Link className="content-text" to="#contact">Contact</Link>
            </li>
        </ul>

    )
}

const hover = () => {
    console.log("coucou")
}

export default RightHeaderComponent
