import React from "react";
import "../style/reset.css"
import MobileMenu from "./mobileMenu";

const RightHeaderComponent = () => {
    return (
            <ul className="display-flex align-items-center">
                <li className="align-items-center textMenu"><a href="#">Présentation</a></li>
                <li className="align-items-center textMenu"><a href="#">Projets</a></li>
                <li className="align-items-center textMenu"><a href="#">Contact</a></li>
                {MobileMenu}
            </ul>

    )
}

export default RightHeaderComponent
