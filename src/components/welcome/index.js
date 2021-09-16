import React from "react";

import "./welcome.css"

import Logo from '../../images/logo.svg'
import Bg from '../../images/bg.svg'
import BgFirst from '../../images/bgFirst.svg'

const Welcome = () => {
    const backgroundImage = 'url(' + BgFirst + '),' + 'url(' + Bg + ')'
    console.log(backgroundImage)
    return (
        <div className={"welcome-main display-flex content-margin justify-content-space-between"}>
            <div className='display-flex flex-direction-column justify-content-center welcome-left'>
                <img src={Logo} className={"logo-welcome"}/>
                <div>
                    <p className={"content-text first-text"}>
                        Nous sommes à votre écoute pour vous proposer les meilleures solutions afin de réaliser au mieux
                        vos
                        projets.
                    </p>
                    <p className={"content-text"}>
                        De la création à l'accomplissement nous seront avec vous pour vous accompagner et vous
                        conseiller.
                    </p>
                </div>
                <button className={"welcome-button"}>Découvrir nos projets</button>
            </div>
            <div className={"display-flex align-items-center welcome-right"} style={{backgroundImage : backgroundImage}}>
            </div>
        </div>
    )
}

export default Welcome
