import React, {useState} from "react";
import {Link} from "gatsby";

import "./rightHeaderComponent.css"

const RightHeaderComponent = (props) => {
    const [color, setColor] = useState("white")
    const [color1, setColor1] = useState("white")
    const [color2, setColor2] = useState("white")
    const [color3, setColor3] = useState("white")
    const [textShadow, setTextShadow] = useState("0 0 3px rgba(118, 86, 239, .0)")
    const [textShadow1, setTextShadow1] = useState("0 0 3px rgba(118, 86, 239, .0)")
    const [textShadow2, setTextShadow2] = useState("0 0 3px rgba(118, 86, 239, .0)")
    const [textShadow3, setTextShadow3] = useState("0 0 3px rgba(118, 86, 239, .0)")
    const [actuallyHover, setActuallyHover] = useState()
    let timeOut
    const Leave = () => {
        setColor('white')
        setColor1('white')
        setColor2('white')
        setColor3('white')
        setTextShadow("0 0 3px rgba(118, 86, 239, .0)")
        setTextShadow1("0 0 3px rgba(118, 86, 239, .0)")
        setTextShadow2("0 0 3px rgba(118, 86, 239, .0)")
        setTextShadow3("0 0 3px rgba(118, 86, 239, .0)")
        if (actuallyHover === false ) {
            console.log(actuallyHover, 'false')
            timeOut = setTimeout(() => {
                props.setProjectMenu(false)
            }, 1500)
        }else {
            console.log(actuallyHover)
            clearTimeout(timeOut)
            setActuallyHover(false)
            console.log(actuallyHover)
        }
    }
    function hover(int) {
        switch (int) {
            case 1:
                setColor1("#5D38E5")
                setTextShadow1("0 0 3px rgba(118, 86, 239, .31)")
                break;
            case 2:
                setColor2("#5D38E5")
                setTextShadow2("0 0 3px rgba(118, 86, 239, .31)")
                props.setProjectMenu(true)
                setActuallyHover(true)
                break;
            case 3:
                setColor3("#5D38E5")
                setTextShadow3("0 0 3px rgba(118, 86, 239, .31)")
                break;
            default:
                setColor("#5D38E5")
                setTextShadow("0 0 3px rgba(118, 86, 239, .31)")
        }
    }

    const style = {
        link: {
            color: color,
            textShadow: textShadow
        },
        link1: {
            color: color1,
            textShadow: textShadow1
        },
        link2: {
            color: color2,
            textShadow: textShadow2
        },
        link3: {
            color: color3,
            textShadow: textShadow3
        }
    }

    return (
        <ul className="display-flex align-items-center full-height right-header-component">
            <li
                className="align-self-center align-items-center text-menu display-flex flex-direction-column justify-content-space-between">
                <Link
                    className="content-text right-header-component-link"
                    to="../"
                    style={style.link}
                    onMouseEnter={() => hover(0)}
                    onMouseLeave={Leave}
                >
                    Accueil
                </Link>
            </li>
            <li
                className="align-self-center align-items-center text-menu   display-flex flex-direction-column justify-content-space-between">
                <Link
                    onMouseEnter={() => hover(1)}
                    onMouseLeave={Leave}
                    className="content-text right-header-component-link"
                    to="#presentation"
                    style={style.link1}
                >
                    Présentation
                </Link>
            </li>
            <li
                className="align-self-center text-menu align-items-center  display-flex flex-direction-column justify-content-space-between">
                <Link
                    className="content-text right-header-component-link"
                    to="/projects"
                    style={style.link2}
                    onMouseEnter={() => hover(2)}
                    onMouseLeave={Leave}
                >
                    Projets
                </Link>
            </li>
            <li
                className="align-self-center text-menu align-items-center  display-flex flex-direction-column justify-content-space-between">
                <Link
                    className="content-text right-header-component-link"
                    to="#contact"
                    style={style.link3}
                    onMouseEnter={() => hover(3)}
                    onMouseLeave={Leave}
                >
                    Contact
                </Link>
            </li>
        </ul>
    )
}


export default RightHeaderComponent
