import React, {useState} from "react";

import ArrowLeft from "../../images/arrow-left.png"
import ArrowRight from "../../images/arrow-right.png"
import CarreBlanc from "../../images/carreBlanc.png"
import CarreVert from "../../images/carreVert.png"
import CarreJaune from "../../images/carreJaune.png"
import CarreViolet from "../../images/carreViolet.png"
import CarreRouge from "../../images/carreRouge.png"

import "./skills.css"

const Skills = () => {
    const skillsData = [
        {
            id: "1",
            ligne: 1,
            image: CarreBlanc,
            title: "UI/UX",
            description: "Création d'interface ergonomique pour les sites, applications et jeux."
        },
        {
            id: "2",
            ligne: 1,
            image: CarreJaune,
            title: "développement",
            description: "Développement d'application bureau, mobile, de site web."
        },
        {
            id: "3",
            ligne: 1,
            image: CarreRouge,
            title: "Graphisme",
            description: "Création de charte graphique, illustration, logo et de documents."
        },
        {
            id: "4",
            ligne: 2,
            image: CarreVert,
            title: "modélisation 3D",
            description: "Création de model 3D destiné à l'animation ou à l'impression 3D."
        },
        {
            id: "5",
            ligne: 2,
            image: CarreViolet,
            title: "Motion",
            description: "Création de motion design, d'animation et de montage."
        }
    ]

    const screenSize = document.body.offsetWidth
    const [count, setCount] = useState(0)
    const [currentItem, setCurrentitem] = useState(skillsData[count])
    const changeCount = () => {
        setCount(count + 1)
        if (count >= skillsData.length - 1 ) setCount(0)
        setCurrentitem(skillsData[count])
    }
    const downCount = () => {
        setCount(count - 1)
        if (count <= 0 ) setCount(skillsData.length -1)
        setCurrentitem(skillsData[count])
    }
    return (
        <div className={"skills-container display-flex flex-direction-column justify-content-space-evenly"}>
            <h2 style={{textAlign: "center"}} className={"title-text"}>Compétences</h2>
            <div className={"display-flex justify-content-space-around skills-item-container"}>
                {screenSize < 480 ? <a style={{color: 'white'}} onClick={downCount}><img src={ArrowLeft}/></a> : null}
                {screenSize > 480 ?
                   <DesktopContent skillsData={skillsData}/>
                    :
                    <MobileContent currentItem={currentItem}/>
                }
                {screenSize < 480 ? <a style={{color: 'white'}} onClick={changeCount}><img src={ArrowRight}/></a> : null}
            </div>
        </div>
    )
}

const DesktopContent = (props) => {
    return(
        props.skillsData.map(x =>
            <div className={"display-flex align-items-center justify-content-center flex-direction-column skills-item"}>
                <img className={"skills-img"} alt={"logo de " + x.title} src={x.image}/>
                <h4 className={"skills-title"}>{x.title}</h4>
                <p className={"content-text text-align-center skills-item-description"}>{x.description}</p>
            </div>
        )
    )
}

const MobileContent = (props) => {
    return(
        <div className={"display-flex align-items-center flex-direction-column skills-item"}>
            <img alt={"logo de " + props?.currentItem?.title} src={props?.currentItem?.image}/>
            <h4 className={"skills-title"}>{props?.currentItem?.title}</h4>
            <p className={"content-text text-align-center skills-item-description"}>{props?.currentItem?.description}</p>
        </div>
    )
}

export default Skills
