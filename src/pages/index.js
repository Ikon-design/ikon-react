import React from "react"

import "../style/reset.css"
import "../style/main.css"
import "../style/header.css"

import Index from "../components/projects";
import Layout from "../components/layout";
import Welcome from "../components/welcome";

const IndexPage = () => {
    return (
        <main className="main">
            <title>Ikō.n || Accueil</title>
            <Layout>
                <Index/>
                <Welcome />
                <Index />
            </Layout>
        </main>
    )
}


export default IndexPage
