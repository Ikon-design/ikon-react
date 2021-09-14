import React from "react"
import {graphql, useStaticQuery} from "gatsby"

export const Test = () => {
    const { dataJson } = useStaticQuery(
        graphql`query projectsMobileMenu {
            dataJson {
                projects {
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
