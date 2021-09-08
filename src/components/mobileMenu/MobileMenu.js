import React from "react";
import Logo from "../../images/headerLogo.svg"
import ArrowLeft from "../../images/arrow-left.png"
import {Link} from "gatsby";

const MobileMenu = (props) => {
    const changeMobileMenu = () => {
        props.setMobileMenu(!props.mobileMenu)
        props.setPosition("-830px")
    }

    return (
        <div className="mobile-menu" style={props.style}>
            <div className="global-padding display-flex justify-content-space-between align-items-center">
                <button onClick={changeMobileMenu} className="display-flex align-items-center">
                    <img src={ArrowLeft} alt={"Retour arrière"}/>
                    <p className="content-text">Retour</p>
                </button>
                <img alt={"Logo ikon"} src={Logo}/>
            </div>
            <ul>
                <li className="global-padding">
                    <Link className="content-text" to={"/"}>Accueil</Link>
                </li>
                <li className=" global-padding">
                    <Link className="content-text" to={"/projects"}>Projets</Link>
                </li>
                <li className="global-padding">
                    <Link to={"/"} className={"content-text"} value={"Nous contacter"}>Nous contacter</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu
