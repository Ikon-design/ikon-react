import React from "react";

import "./skills.css"

const Skills = () => {
    return (
        <div className={"skills-container display-flex flex-direction-column justify-content-space-evenly"}>
            <h2 style={{ textAlign: "center"}} className={"title-text"}>Compétences</h2>
            <div className={"display-flex justify-content-space-around"}>
                <div className={"display-flex align-items-center flex-direction-column skills-item"}>
                    <img className={"skills-img"}/>
                    <h4 className={"skills-title"}>UI/UX</h4>
                    <p className={"content-text text-align-center skills-item-description"}>Création d'interface ergonomique pour les <br/>sites, applications et jeux.</p>
                </div>
                <div className={"display-flex align-items-center flex-direction-column skills-item"}>
                    <img className={"skills-img"}/>
                    <h4 className={"skills-title"}>développement </h4>
                    <p className={"content-text text-align-center skills-item-description"}>Développement d'application bureau, mobile,  <br/>de site web.</p>
                </div>
                <div className={"display-flex align-items-center flex-direction-column skills-item"}>
                    <img className={"skills-img"}/>
                    <h4 className={"skills-title"}>Graphisme </h4>
                    <p className={"content-text text-align-center skills-item-description"}>Création de charte graphique, illustration,  <br/>logo et de documents.</p>
                </div>
            </div>
            <div className={"display-flex justify-content-space-evenly"}>
                <div className={"display-flex align-items-center flex-direction-column skills-item"}>
                    <img className={"skills-img"}/>
                    <h4 className={"skills-title"}>modélisation 3D </h4>
                    <p className={"content-text text-align-center skills-item-description"}>Création de model 3D destiné à l'animation <br/> ou à l'impression 3D.</p>
                </div>
                <div className={"display-flex align-items-center flex-direction-column skills-item"}>
                    <img className={"skills-img"}/>
                    <h4 className={"skills-title"}>Motion</h4>
                    <p className={"content-text text-align-center skills-item-description"}>Création de motion design, d'animation et de  <br/> montage.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
