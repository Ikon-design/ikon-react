import React, {useState} from "react"

import "../style/reset.css"
import "../style/main.css"
import "../style/header.css"

import Projects from "../components/projects";
import Layout from "../components/Layout";


const lin = [
    {
        id: 1, link: "/projects", name: "projet"
    }
]

const IndexPage = () => {
    return (
        <main className="main">
            <title>Ikō.n</title>
            <Layout>
                <Projects/>
            </Layout>
        </main>
    )
}


export default IndexPage
