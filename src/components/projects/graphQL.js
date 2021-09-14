import React from "react"
import {graphql, useStaticQuery} from "gatsby"

export const ProjectsData = () => {
    const { dataJson } = useStaticQuery(
        graphql`query ProjectsData {
            dataJson {
                projects (id: 1){
                    id
                    images {
                        bgImg
                        logo
                        secondImage
                        thirdImage
                    }
                    informations {
                        link
                        projectDescription
                        secondDescription
                    }
                    name
                }
            }
        }`
    )
    dataJson.projects.map(x => {
        let shortDescription = x.informations.projectDescription.slice(0, 90)
        x.informations.shortDescription = shortDescription + "..."
    })
    return dataJson
}
