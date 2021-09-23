import React, {useState} from "react"

import "../mobileMenu/mobileMenu.css"
import Header from "../header"

export default function Layout({children}) {
    const [projectMenu, setProjectMenu] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [position, setPosition] = useState("-820px")
    const [screenSize, setScreenSize] = useState(document.body.offsetWidth)
    let getBodySize = document.getElementsByClassName('mobile-menu')
    let bodySize = mobileMenu === false ? document.body.style.height = 'fit-content' :  document.body.style.height = getBodySize[0]?.clientHeight
    return (
        <div style={{ height : bodySize, overflowY: "hidden"}}>
            <Header
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
                position={position}
                screenSize={screenSize}
                setPosition={setPosition}
                setScreenSize={setScreenSize}
                projectMenu={projectMenu}
                setProjectMenu={setProjectMenu}
            />
            {children}
        </div>
    )
}
