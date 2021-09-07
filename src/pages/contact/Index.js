import React from "react";

const Contact = () => {
    return(
        <div>
            <h2>
                Me contacter
            </h2>
            <form method="post">
                <input type="text" name="name" id="name" placeholder="Nom"/>
                <input type="text" name="name" id="name" placeholder="Prénom"/>
                <input type="mail" name="mail" id="mail" placeholder="Email"/>
                <textarea />
            </form>
        </div>
    )
}

export default Contact
