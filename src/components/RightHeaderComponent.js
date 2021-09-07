import React from "react";
import "../style/reset.css"
import {Link} from "gatsby";

const RightHeaderComponent = () => {
    return (
            <ul className="display-flex align-items-center">
                <li className="align-items-center textMenu"><Link className="content-text" to="../">Accueil</Link></li>
                <li className="align-items-center textMenu"><Link className="content-text" to="#presentation">Présentation</Link></li>
                <li className="align-items-center textMenu"><Link className="content-text" to="/projects">Projets</Link></li>
                <li className="align-items-center textMenu"><Link className="content-text" to="#contact">Contact</Link></li>
            </ul>

    )
}

export default RightHeaderComponent
