import React from "react";

import Header from "../../components/Header"

import "./index.css"
import {GatsbyImage, getImage, getSrc, getSrcSet, StaticImage} from "gatsby-plugin-image";
import {graphql, StaticQuery} from "gatsby";

const Projects = () => {
    return (
    <StaticQuery
        query={graphql` query testQuery { dataJson { projects { ikon { logo bgImg name }} }}`}
        render={data => <Content data={data.dataJson.projects.ikon} />}
    />
    )
}

const Content = (props) => {

    const style = {
        background : {
            backgroundImage: props.data.bgImg
        }
    }
    console.log(style.background)
    return(
    <div className="project-page">
        <Header/>
        <div className="project-container display-flex align-items-center flex-direction-column">
            <div className={"header-project-container"} style={style.background}>
                <img className="project-logo" src={props.data.logo}/>
                <h2 className="project-title">{props.data.name}</h2>
            </div>
        </div>
    </div>)
}

export default Projects
