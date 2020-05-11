import React from "react";

//next
import Head from "next/head";

//components
import Footer from "../components/Footer";
import ServicesTeam from "../components/ServicesTeam";
import Value from "../components/Value";
import PhotoGrid from "../components/PhotoGrid";
import ManagementTeam from "../components/ManagementTeam"
import HeaderTeam from "../components/HeaderTeam";

//files with data
import values from "../components/Data/values";

function Team() {
    return (
        <div>
            <Head>
                <title> Team Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="team-header">
                <HeaderTeam/>
            </header>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["team"]["unsere-werte"]}/>
            </section>

            {/* services with photo and description*/}
            <section className="services-section">
                <ServicesTeam/>
            </section>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["team"]["unsere-helden"]}/>
            </section>

            {/*Photos of the entire team*/}
            <section className="team-section">
                <ManagementTeam/>
                <PhotoGrid/>
            </section>

            <Footer/>
        </div>
    )
}

export default Team