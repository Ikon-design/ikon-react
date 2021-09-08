import React from "react";
import {Link} from "gatsby";

import "./rightHeaderComponent.css"

const RightHeaderComponent = () => {
    return (
            <ul className="display-flex align-items-center full-height">
                <li onMouseEnter={hover} className="align-self-center align-items-center text-menu align-items-center full-height display-flex flex-direction-column justify-content-space-between">
                    <div/>
                    <Link className="content-text" to="../">Accueil</Link>
                    <div className="right-header-component-indicator"/>
                </li>
                <li onMouseEnter={hover} className="align-self-center align-items-center text-menu align-items-center full-height display-flex flex-direction-column justify-content-space-between">
                    <div style={{height: "2px"}}/>
                    <Link className="content-text" to="#presentation">Présentation</Link>
                    <div className="right-header-component-indicator full-width"/>
                </li>
                <li onMouseEnter={hover} className="align-self-center align-items-center text-menu align-items-center full-height display-flex flex-direction-column justify-content-space-between">
                    <div/>
                    <Link className="content-text" to="/projects">Projets</Link>
                    <div className="right-header-component-indicator"/>
                </li>
                <li onMouseEnter={hover} className="align-self-center align-items-center text-menu align-items-center full-height display-flex flex-direction-column justify-content-space-between">
                    <div/>
                    <Link className="content-text" to="#contact">Contact</Link>
                    <div className="right-header-component-indicator"/>
                </li>
            </ul>

    )
}

const hover = () => {
    console.log("coucou")
}

export default RightHeaderComponent
