import React from "react";

//next
import Head from "next/head";

//antd
import {Divider} from "antd";

// components
import Footer from "../components/Footer";
import Value from "../components/Value";
import ServicesJob from "../components/ServicesJob";
import ListOfJobs from "../components/ListOfJobs";
import HeaderJobs from "../components/HeaderJobs";

// files with data
import values from "../components/Data/values";

function Jobs() {
    return (
        <div>
            <Head>
                <title> Jobs Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="jobs-header">
                <HeaderJobs/>
            </header>

            {/* values/divider*/}
            <section className="values-section">
                <Value value={values["job"]["chance"]}/>
            </section>

            {/*services*/}
            <section className="services-section">
                <ServicesJob/>
            </section>

            {/* values/divider*/}
            <section className="values-section">
                <Value value={values["job"]["join-vendevio"]}/>
            </section>


            {/*List of jobs*/}
            <section className="jobs-section" id="list-of-jobs">
                <Divider plain style={{fontSize: 32, color: '#FFFFFF'}}>
                    AKTUELLE STELLEN
                </Divider>
                <ListOfJobs/>
                <Divider/>
            </section>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["job"]["meet-us"]}/>
            </section>

            {/*map image*/}
            <section className="vendevio-map">
                <div className="map-desktop">
                    <img src="/map.jpg"/>
                </div>
                <div className="map-mobile">
                    <img src="/map_mobile.jpg"/>
                </div>
            </section>

            <Footer/>
            <style jsx>{`
            .jobs-section{
              background: #002766;
            }
            .vendevio-map {
             max-width: 100%;
             margin: 48px auto;
             display: flex;
             justify-content: center;
            }  
            @media only screen and (max-width: 600px) {
             .map-desktop{
              display: none;
             }
            } 
            @media only screen and (min-width: 601px) {
             .map-mobile{
              display: none;
             }
            } 
           `}</style>
        </div>
    )
}

export default Jobs