import React from "react"

import "./header.css"
import "../style/main.css"

import Logo from "../images/headerLogo.svg"
import RightHeaderComponent from "./rightHeaderComponent";
import MobileMenu from "./mobileMenu";

const header = () => {
    const menu = document.body.offsetWidth < 820 ? <MobileMenu className='test'/> : <RightHeaderComponent className='test'/>
    return (
        <div className="headerContainer display-flex justify-content-space-between global-padding align-items-center">
            <img src={Logo} alt={"Logo de la marque Ikon"}/>
            {menu}
        </div>
    )
}

export default header
