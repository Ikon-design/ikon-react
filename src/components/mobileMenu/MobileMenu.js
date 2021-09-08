import React from "react";
import Logo from "../../images/headerLogo.svg"
import ArrowLeft from "../../images/arrow-left.png"
import ArrowRight from "../../images/arrow-right.png"
import Divider from "../divider/Divider";
import {graphql, Link, StaticQuery} from "gatsby";

const query = graphql`query projectsMobileMenu {
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

const MobileMenu = (props) => {
    return (
        <StaticQuery
            query={query}
            render={
                data =>
                    <Content
                        data={data}
                        setMobileMenu={props.setMobileMenu}
                        mobileMenu={props.mobileMenu}
                        setPosition={props.setPosition}
                        style={props.style}
                    />
            }
        />
    )
}

const Content = (props) => {
    const data = props.data.dataJson.projects
    let count = 1
    let gridRow = 1
    let gridColumn = "1/3"
    const changeMobileMenu = () => {
        props.setMobileMenu(!props.mobileMenu)
        props.setPosition("-830px")
    }
    const projectMenuMobile = data.map(x => {
        if (count % 2 !== 0) {
            gridColumn = "1/4"
            if (count <= 2) {
                gridRow = 1
            } else {
                gridRow = 2
            }
            count++
        } else {
            gridColumn = "4/7"
            if (count <= 2) {
                gridRow = 1
            } else {
                gridRow = 2
            }
            count++
        }
        return (
            <Link className="project-menu-mobile border-radius" style={{gridRow: gridRow, gridColumn: gridColumn}}>
                <div className="border-radius ">
                    <img className="border-radius project-menu-mobile-img" src={x.images?.secondImage}/>
                    <h3 className="title-text project-menu-mobile-padding">{x.name}</h3>
                    <p  className="content-text project-menu-mobile-description project-menu-mobile-padding" style={{marginBottom: "15px"}}>{x.informations?.projectDescription}</p>
                </div>
            </Link>
        )
    })
    return (
        <div className="mobile-menu" style={props.style}>
            <div className="global-padding display-flex justify-content-space-between align-items-center">
                <button onClick={changeMobileMenu} className="display-flex align-items-center">
                    <img src={ArrowLeft} alt={"Retour arrière"}/>
                    <p className="title-text retour-mobile-menu">Retour</p>
                </button>
                <img alt={"Logo ikon"} src={Logo}/>
            </div>
            <Divider/>
            <ul>
                <li className="global-padding">
                    <Link className="title-text" to={"/"}>Accueil</Link>
                </li>
                <Divider/>
                <li className="display-flex flex-direction-column global-padding">
                    <Link className="title-text" to={"/projects/" + 'ikon'}>Projets</Link>
                    <div className="display-grid" style={{marginTop: "15px"}}>
                        {projectMenuMobile}
                    </div>
                    <Link className={"display-flex justify-content-center align-items-center input-button"} style={{ alignSelf: "flex-end", marginTop:'20px', marginBottom: '0px'}} to={"/"}>Voir plus <img src={ArrowRight}/></Link>
                </li>
                <Divider/>
                <li className="global-padding">
                    <Link to={"/"} className={"title-text"} value={"Nous contacter"}>Nous contacter</Link>
                </li>
                <Divider/>
            </ul>
        </div>
    )
}

export default MobileMenu
