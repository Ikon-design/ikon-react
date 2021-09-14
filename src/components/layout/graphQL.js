import {graphql, useStaticQuery} from "gatsby"

export const ProjectsData = () => {
    const {dataJson} = useStaticQuery(
        graphql`query projectsMobileMenu {
            dataJson {
                projects {
                    id
                    images {
                        bgImg
                        secondImage
                    }
                    informations {
                        link
                        projectDescription
                    }
                    name
                }
            }
        }`
    )
    dataJson.projects.map(x => {
        let shortDescription = x.informations.projectDescription.slice(0, 90)
        return (
            x.informations.shortDescription = shortDescription + "..."
        )
    })
    return dataJson
}
