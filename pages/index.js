import React from "react";

//next
import Head from "next/head";

// components
import Footer from '../components/Footer';
import Logos from "../components/Logos";
import HeaderHomepage from "../components/HeaderHomepage";

function Home() {
    return (
        <div>
            <Head>
                <title> Home Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="homepage-header">
                <HeaderHomepage/>
            </header>

            {/*Logo of the customers*/}
            <section className="customers">
                <Logos/>
            </section>

            < footer id="footer">
                    < Footer/>
            </footer>
        </div>
    )
}

export default Home