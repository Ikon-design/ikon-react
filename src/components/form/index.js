import React from "react";

import "./form.css"

const Form = () => {
    return (
        <div className="form-container display-flex flex-direction-column align-items-center justify-content-center">
            <h2 className="sections-title">
                Me contacter
            </h2>
            <p className="text margin-bottom">
                Vous pouvez me contacter depuis ce formulaire
            </p>
            <form method="post" className="form-input-container flex-direction-column align-items-cente display-grid">
                <input className="contact-input contact-input-left full-width" type="text" name="name" id="name"
                       placeholder="Nom"/>
                <input className="contact-input contact-input-right full-width" type="text" name="name" id="name"
                       placeholder="Prénom"/>
                <input className="contact-input full-width" type="mail" name="mail" id="mail" placeholder="Email"/>
                <textarea className="contact-input full-width" placeholder="Votre message" rows="8"/>
                <button className="input-button input-form-button">Envoyer</button>
            </form>
        </div>
    )
}

export default Form
