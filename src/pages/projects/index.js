import React from "react";

import "./index.css"
import {graphql, StaticQuery} from "gatsby";
import Layout from "../../components/layout";

const test = window.location.pathname
console.log(test)
const query = graphql`query MyQuery($id: String) {
    dataJson(projects: {elemMatch: {name: { eq: $id}}}) {
        projects {
            id
        }
    }
}`

const Projects = () => {
    return (
        <StaticQuery
            query={query}
            render={data => console.log(data)}
        />
    )
}
//<Content data={data?.dataJson?.projects?.ikon}/>
const Content = (props) => {
    const style = {
        background: {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(46, 46, 46, 1)) , " + props?.data?.image?.bgImg,
            backgroundSize: "cover"
        }
    }
    return (
        <Layout>
            <div className="project-page">
                <div className="project-container display-flex align-items-center flex-direction-column border-radius">
                    <div
                        className="header-project-container display-flex align-items-center flex-direction-column justify-content-space-between"
                        style={style.background}>
                        <img className="project-logo" src={props?.data?.image?.logo}
                             alt={"Logo de la marque " + props?.data?.name}/>
                        <h2 className="project-title title-text">{props?.data?.name}</h2>
                    </div>
                    <p className="project-description content-text">{props?.data?.informations?.projectDescription}</p>
                    <img className="master-image border-radius" src={props?.data?.image?.secondImage}
                         alt={"Extrait du projet " + props?.data?.name}/>
                    <p className="second-description content-text">{props?.data?.informations?.secondDescription}</p>
                    <div className="project-second-image display-flex">
                        <img className="second-image border-radius" src={props?.data?.image?.secondImage}
                             alt={"Extrait du projet " + props?.data?.name}/>
                        <img className="second-image border-radius" src={props?.data?.image?.thirdImage}
                             alt={"Extrait du projet " + props?.data?.name}/>
                    </div>
                    <input className="input-button" type='button' value="Accéder au projet"/>
                </div>
            </div>
        </Layout>
    )
}

export default Projects
