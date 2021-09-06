import React from "react"

import "../style/reset.css"
import "../style/main.css"

import Header from "../components/Header"
import Welcome from "../components/welcome";
import Projects from "../components/projects";
import Form from "../components/form";

const IndexPage = () => {
    return (
        <main>
            <title>Ikō.n</title>
            <Header id='test' />
            <Welcome />
            <Projects />
            <Form />
        </main>
    )
}

export default IndexPage
