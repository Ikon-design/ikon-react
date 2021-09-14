import React, {useState} from "react";
import { Link } from "gatsby";

import Menu from "../../images/menu.svg";
import Logo from "../../images/headerLogo.svg";

import RightHeaderComponent from "../rightHeaderComponent";
import MobileMenu from "../mobileMenu";
import ProjectsMenu from "../projectsMenu";
import {ProjectsData} from "../layout/graphQL";

const Header = (props) => {
    const data = ProjectsData()
    const [headerColor, setHeaderColor] = useState("unset")
    const [boxShadow, setBoxShadow] = useState("unset")
    const changeMobileMenu = () => {
        props.setMobileMenu(!props.mobileMenu)
        props.setPosition("0px")
    }
    const left = props.screenSize < 769 ?
        <button onClick={changeMobileMenu} className="display-flex justify-content-center align-items-center"><img
            alt="yes" src={Menu}/></button> :
        <Link
            to="./"
            className="display-flex justify-content-center align-items-center"
        >
            <img src={Logo} alt='Logo du site'/>
        </Link>
    const center = props.screenSize < 769 ? <Link to="./"><img src={Logo} alt='Logo du site'/></Link> : null
    const right = props.screenSize < 769 ? <div style={{width: "15px"}}/> :
        <RightHeaderComponent projectMenu={props.projectMenu} setProjectMenu={props.setProjectMenu}/>

    React.useEffect(() => {
        let isMounted = true
        const changeScreenSize = () => {
            props.setScreenSize(document.body.offsetWidth)
        }
        const changeHeaderSize = () => {
            if (isMounted) {
                if (window.scrollY <= 30) {
                    setHeaderColor("unset")
                    setBoxShadow('unset')
                } else {
                    setHeaderColor("#2E2E2E")
                    setBoxShadow("0 8px 15px rgba(0, 0, 0, .15)")
                }
            }
        }
        window.addEventListener('resize', changeScreenSize)
        window.addEventListener('scroll', changeHeaderSize)
        return () => {
            isMounted = false
        }
    })

    return (
        <>
            <div
                className="header-container display-flex justify-content-space-between align-items-center global-padding"
                style={{backgroundColor: headerColor, boxShadow: boxShadow, height: "75px"}}
            >
                {left}
                {center}
                {right}
            </div>
            {props.screenSize < 769 ?
            <MobileMenu data={data} mobileMenu={props.mobileMenu} setMobileMenu={props.setMobileMenu} setPosition={props.setPosition} position={props.position}/> : <ProjectsMenu/>
            }
        </>
    )
}

export default Header
