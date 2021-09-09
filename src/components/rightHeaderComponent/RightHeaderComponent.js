import React, {useState} from "react";
import {Link} from "gatsby";

import "./rightHeaderComponent.css"

const RightHeaderComponent = () => {
    const [color, setColor] = useState("white")
    const [color1, setColor1] = useState("white")
    const [color2, setColor2] = useState("white")
    const [color3, setColor3] = useState("white")
    const [textShadow, setTextShadow] = useState("0 0 3px rgba(118, 86, 239, .0)")
    const [textShadow1, setTextShadow1] = useState("0 0 3px rgba(118, 86, 239, .0)")
    const [textShadow2, setTextShadow2] = useState("0 0 3px rgba(118, 86, 239, .0)")
    const [textShadow3, setTextShadow3] = useState("0 0 3px rgba(118, 86, 239, .0)")

    function hover (int) {
        switch (int) {
            case 1:
                setColor("#5D38E5")
                setTextShadow("0 0 3px rgba(118, 86, 239, .31)")
                break
            case 2:
                setColor2()
        }
    }
    const Leave = () => {
        setColor('white')
        setTextShadow("0 0 3px rgba(118, 86, 239, .0)")
    }

    const style = {
        link: {
            color: color,
            textShadow: textShadow
        },
        link1: {
            color: color,
            textShadow: textShadow1
        },
        link2: {
            color: color,
            textShadow: textShadow2
        },
        link3: {
            color: color,
            textShadow: textShadow3
        }
    }

    return (
        <ul className="display-flex align-items-center full-height">
            <li
                className="align-self-center align-items-center text-menu display-flex flex-direction-column justify-content-space-between">
                <Link
                    className="content-text" to="../"
                    style={style.link}
                >
                    Accueil
                </Link>
            </li>
            <li
                className="align-self-center align-items-center text-menu   display-flex flex-direction-column justify-content-space-between">
                <Link
                    onMouseEnter={hover(1)}
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
                <Link className="content-text" to="/projects"
                      style={style.link2}>Projets</Link>
            </li>
            <li
                className="align-self-center text-menu align-items-center  display-flex flex-direction-column justify-content-space-between">
                <Link className="content-text" to="#contact"
                      style={style.link3}>Contact</Link>
            </li>
        </ul>

    )
}


export default RightHeaderComponent
