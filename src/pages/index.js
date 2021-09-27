import React from "react"

import "../style/reset.css"
import "../style/main.css"
import "../style/header.css"

import Welcome from "../components/welcome";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Form from "../components/form";
import Technos from "../components/technos";

const IndexPage = () => {
    return (
        <main className="main">
            <title>Ikō.n || Accueil</title>
            <Layout>
                <Welcome />
                <Skills />
                <Technos />
                <Projects />
                <Form />
            </Layout>
        </main>
    )
}


export default IndexPage
