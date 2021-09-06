import React from "react";
import {graphql, StaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const ProjectsQueries = () => {
    return(
        <StaticQuery
            query={graphql` query teshtQuery { dataJson { projects { ikon { logo bgImg }} }}`}
            children={data => <GatsbyImage
                src={Image}
                image={"{data.dataJson.projects.ikon.logo}"}
                alt={"coucou"}
            />}
        />
    )
}

export default ProjectsQueries
