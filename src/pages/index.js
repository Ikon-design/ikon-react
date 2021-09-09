import React from "react"

import "../style/reset.css"
import "../style/main.css"
import "../style/header.css"

import Projects from "../components/projects";
import Layout from "../components/Layout";
import Welcome from "../components/welcome";

const IndexPage = () => {
    return (
        <main className="main">
            <title>Ikō.n || Accueil</title>
            <Layout>
                <Projects/>
                <Welcome />
            </Layout>
        </main>
    )
}


export default IndexPage
