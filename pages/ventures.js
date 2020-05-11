import React from "react";

// next
import Head from "next/head";

// components
import Footer from "../components/Footer";
import ServicesVentures from "../components/ServicesVentures";
import CarouselVenturesMobile from "../components/CarouselVenturesMobile";
import VisionVentures from "../components/VisionVentures";
import Value from "../components/Value";
import ContactVentures from "../components/ContactVentures";
import CarouselVentures from "../components/CarouselVentures";
import HeaderVentures from "../components/HeaderVentures";



// files data
import values from "../components/Data/values";


function Ventures() {
    return (
        <div>
            <Head>
                <title> Ventures Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="ventures-header">
                <HeaderVentures/>
            </header>

            {/*values/divider */}
            <section className="values-section">
                <Value value={values["ventures"]["leistungen_venture"]}/>
            </section>

            {/*vision*/}
            <section className="vision-section">
                <VisionVentures/>
            </section>

            {/*services*/}
            <section className="services-section">
                <ServicesVentures/>
            </section>

            {/*Customers*/}
            <section className="customers-section">
                <CarouselVentures/>
                <CarouselVenturesMobile/>
            </section>

            {/*contact form*/}
            <section className="contact-form-section" id="contact-form-ventures">
                <ContactVentures/>
            </section>


            <Footer/>
            <style jsx>{`
            //style the vision list
            .vision-section{
             background: #002766;
             max-width: 100%;
             margin: 0px auto;
            }
            @media only screen and (min-width: 601px) {
             .vision-section{
              max-width: 80%;
             }
            }
             // carousel customers
            .customers-section {
             background:  #364d79;
            }    
        
            `}</style>
        </div>
    );
}

export default Ventures