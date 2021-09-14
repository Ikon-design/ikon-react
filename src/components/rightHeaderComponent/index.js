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

    function Leave() {
        setColor('white')
        setColor1('white')
        setColor2('white')
        setColor3('white')
        setTextShadow("0 0 3px rgba(118, 86, 239, .0)")
        setTextShadow1("0 0 3px rgba(118, 86, 239, .0)")
        setTextShadow2("0 0 3px rgba(118, 86, 239, .0)")
        setTextShadow3("0 0 3px rgba(118, 86, 239, .0)")
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
            textShadow: textShadow,
            gridColumn: '1/2'
        },
        link1: {
            color: color1,
            textShadow: textShadow1,
            gridColumn: '2/3'
        },
        link2: {
            color: color2,
            textShadow: textShadow2,
            gridColumn: '3/4'
        },
        link3: {
            color: color3,
            textShadow: textShadow3,
            gridColumn: '4/5'
        }
    }

    return (
        <div className="full-height right-header-component">
            <Link
                className="content-text text-menu align-items-center display-flex"
                to="../"
                style={style.link}
                onMouseEnter={() => hover(0)}
                onMouseLeave={Leave}
            >
                Accueil
            </Link>
            <Link
                className="content-text text-menu align-items-center display-flex"
                onMouseEnter={() => hover(1)}
                onMouseLeave={Leave}
                to="/presentation"
                style={style.link1}
            >
                Présentation
            </Link>
            <Link
                className="content-text text-menu align-items-center display-flex"
                to="/projects"
                style={style.link2}
                onMouseEnter={() => hover(2)}
                onMouseLeave={Leave}
            >
                Projets
            </Link>
            <Link
                className="content-text text-menu align-items-center display-flex"
                to="/contact"
                style={style.link3}
                onMouseEnter={() => hover(3)}
                onMouseLeave={Leave}
            >
                Contact
            </Link>
        </div>
    )
}


export default RightHeaderComponent
