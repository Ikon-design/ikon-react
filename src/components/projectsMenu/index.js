import React from "react";
import {graphql, Link, StaticQuery} from "gatsby";

import "./projectsMenu.css"

const query = graphql`query projectsMenu {
    dataJson {
        projects {
            name
            informations {
                projectDescription
                link
            }
            images {
                bgImg
                secondImage
            }
        }
    }
}
`


const ProjectsMenu = (props) => {
    return (
        <StaticQuery
            query={query}
            children={data =>
                <Content
                    data={data}
                    projectMenu={props.projectMenu}
                    setProjectMenu={props.setProjectMenu}
                />
            }
        />
    )
}

const Content = (props) => {
    const data = props.data.dataJson.projects
    let count = 0
    let opacity = 0
    let right = '0px'
    let gridColumn = "1/1"

    const projectsMenu = data.map(x => {
        switch (count) {
            case 0:
                gridColumn = "1/1"
                break
            case 1:
                gridColumn = "2/2"
                break
            case 2:
                gridColumn = "3/3"
                break
            default:
                gridColumn = "4/4"

        }
        count++
        return (
            <Link key={x.name} to={"./"} style={{gridColumn: gridColumn}} className="project-menu border-radius">
                <img className="project-menu-image border-radius" alt={"Image du projet " + x.name}
                     src={x.images?.secondImage}/>
                <h3 className="project-menu-mobile-padding title-text">{x.name}</h3>
                <p className="project-menu-mobile-padding project-menu-mobile-description content-text"
                   style={{marginBottom: "15px"}}>{x.informations?.projectDescription}</p>
            </Link>
        )
    })
    if (props.projectMenu === true) {
        opacity = 1
        right = '45px'
    }
    return (
        <div
            className={"project-menu-container display-flex border-radius"}
            style={{position: "fixed", right: right, top: "74px", opacity: opacity}}
        >
            {projectsMenu}
            <Link to={"/projects"} style={{justifySelf: "flex-end", gridColumn: "4/4"}} className={"input-button"}>Voir
                plus -></Link>
        </div>
    )
}

export default ProjectsMenu
