import React, {useState} from "react"
import Menu from "../images/menu.svg";
import Logo from "../images/headerLogo.svg";
import RightHeaderComponent from "./rightHeaderComponent/RightHeaderComponent";
import {Link} from "gatsby";
import MobileMenu from "./mobileMenu/MobileMenu";
import "../components/mobileMenu/mobileMenu.css"
import ProjectsMenu from "./projectsMenu/ProjectsMenu";

export default function Layout({children}) {
    const [projectMenu, setProjectMenu] = useState("false")
    const [mobileMenu, setMobileMenu] = useState(false)
    const [position, setPosition] = useState("-820px")
    const [screenSize, setScreenSize] = useState(document.body.offsetWidth)
    mobileMenu === false ? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden"
    return (
        <div>
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
            {screenSize < 820 ? <MobileMenu
                    style={{left: position}}
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                    position={position}
                    setPosition={setPosition}
                /> :
                <ProjectsMenu
                    projectMenu={projectMenu}
                    setProjectMenu={setProjectMenu}
                />
            }
            {children}
        </div>
    )
}

const Header = (props) => {
    const [headerColor, setHeaderColor] = useState("unset")
    const [boxShadow, setBoxShadow] = useState("unset")

    const changeMobileMenu = () => {
        props.setMobileMenu(!props.mobileMenu)
        props.setPosition("0px")
    }

    React.useEffect(() => {
        let isMounted = true;
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


    const left = props.screenSize < 820 ?
        <button onClick={changeMobileMenu} className="display-flex justify-content-center align-items-center"><img
            alt="yes" src={Menu}/></button> :
        <Link to="../" className="display-flex justify-content-center align-items-center"><img src={Logo}
                                                                                               alt='Logo du site'/></Link>
    const center = props.screenSize < 820 ? <Link to="./"><img src={Logo} alt='Logo du site'/></Link> : null
    const right = props.screenSize < 820 ? <div style={{width: "15px"}}/> :
        <RightHeaderComponent projectMenu={props.projectMenu} setProjectMenu={props.setProjectMenu}/>
    return (
        <div
            className="header-container display-flex justify-content-space-between align-items-center global-padding"
            style={{backgroundColor: headerColor, boxShadow: boxShadow, height: "75px"}}
        >
            {left}
            {center}
            {right}
        </div>
    )
}
