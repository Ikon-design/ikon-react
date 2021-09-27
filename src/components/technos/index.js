import React from "react";

import './technos.css'

const Technos = () => {
    const data = [
        {id: 1, nom: "Html", image:'../../'},
        {id: 2, nom: "CSS", image:'../../'},
        {id: 3, nom: "Java-script", image:'../../'},
        {id: 4, nom: "PHP", image:'../../'},
        {id: 5, nom: "Flutter", image:'../../'},
        {id: 6, nom: "React", image:'../../'},
        {id: 7, nom: "Mongo", image:'../../'},
    ]
    return(
        <div className={"tech-container display-flex flex-direction-column align-items-center justify-content-center"}>
            <h2 style={{textAlign: "center"}} className={"title-text"}>Technos</h2>
            <div className={"display-flex content-margin"}>
                {data.map(x => {
                    return (
                        <div className={"display-flex flex-direction-column justify-content-center align-items-center"}>
                            <img src={x.image}/>
                        <h6 key={x.id}>{x.nom}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technos