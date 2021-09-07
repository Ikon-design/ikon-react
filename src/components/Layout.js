import React, {useState} from "react"
import Menu from "../images/menu.svg";
import Logo from "../images/headerLogo.svg";
import RightHeaderComponent from "./RightHeaderComponent";
import {Link} from "gatsby";

export default function Layout({children}) {
    const Header = () => {
        const [mobileMenu, setMobileMenu] = useState(false)
        const [screenSize, setScreenSize] = useState(document.body.offsetWidth)
        const [headerColor, setHeaderColor] = useState("unset")
        const changeMobileMebu = () => {
            setMobileMenu(!mobileMenu)
        }
        React.useEffect(() => {
            const changeScreenSize = () => {
                setScreenSize(document.body.offsetWidth)
            }
            const changeHeaderSize = () => {
                window.scrollY <= 0 ? setHeaderColor("unset") : setHeaderColor("red")
            }
            window.addEventListener('resize', changeScreenSize)
            window.addEventListener('scroll', changeHeaderSize)
        })


        const left = screenSize < 820 ? <button onClick={changeMobileMebu}><img alt="yes" src={Menu}/></button> :
            <Link to="../"><img src={Logo} alt='Logo du site'/></Link>
        const center = screenSize < 820 ? <Link to="./"><img src={Logo} alt='Logo du site'/></Link> : null
        const right = screenSize < 820 ? <div style={{width: "15px"}}/> : <RightHeaderComponent/>
        return (
            <div
                className="header-container display-flex justify-content-space-between global-padding align-items-center"
                style={{backgroundColor: headerColor}}
            >
                {left}
                {center}
                {right}
            </div>
        )
    }
    return (
        <div>
            <Header/>

            {children}
        </div>
    )
}