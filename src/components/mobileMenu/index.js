import React from "react";
import Logo from "../../images/headerLogo.svg"
import ArrowLeft from "../../images/arrow-left.png"
import Divider from "../divider/Divider";
import {Link} from "gatsby";
import {Test} from "../header/graphQL";

const MobileMenu = (props) => {
    const data = Test().projects
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
            <Link to={"./"} key={x.name} className="project-menu-mobile border-radius"
                  style={{gridRow: gridRow, gridColumn: gridColumn}}>
                <div className="border-radius ">
                    <img className="border-radius project-menu-mobile-img" alt={"Image du projet " + x.name}
                         src={x.images?.secondImage}/>
                    <h3 className="project-title-text project-menu-mobile-padding">{x.name}</h3>
                    <p className="content-text project-menu-mobile-description project-menu-mobile-padding"
                       style={{marginBottom: "15px"}}>{x.informations?.shortDescription}</p>
                </div>
            </Link>
        )
    })
    return (
        <div className="mobile-menu" id="test" style={{left: props.position}}>
            <div className="global-padding display-flex justify-content-space-between align-items-center">
                <button onClick={changeMobileMenu}
                        className="display-flex align-items-center button-text justify-content-center">
                    <img src={ArrowLeft} alt={"Retour arrière"} style={{height: "20px"}}/>

                </button>
                <img alt={"Logo ikon"} src={Logo}/>
            </div>
            <Divider/>
            <ul>
                <li className="global-padding">
                    <Link className="menu-text hover-menu" to={"./"}>Accueil</Link>
                </li>
                <Divider/>
                <li className="display-flex flex-direction-column global-padding">
                    <Link className="menu-text hover-menu" to={"/projects"}>Projets</Link>
                    <div className="display-grid" style={{marginTop: "15px"}}>
                        {projectMenuMobile}
                    </div>
                    <Link
                        className={"display-flex justify-content-center align-items-center input-button"}
                        style={{alignSelf: "flex-end", marginTop: '20px', marginBottom: '0px'}}
                        to={"./"}>Voir plus</Link>
                </li>
                <Divider/>
                <li className="global-padding">
                    <Link to={"./"} className={"menu-text hover-menu"} value={"Nous contacter"}>Nous contacter</Link>
                </li>
                <Divider/>
            </ul>
        </div>
    )
}

export default MobileMenu
