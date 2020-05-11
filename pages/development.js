import React from "react";

//next
import Head from "next/head";

// components
import Footer from "../components/Footer";
import HeaderDevelopment from "../components/HeaderDevelopment";
import Value from "../components/Value";
import CarouselDevelopment from "../components/CarouselDevelopment";
import ContactDevelopment from "../components/ContactDevelopment";
import VisionDevelopment from "../components/VisionDevelopment";
import ServicesDevelopment from "../components/ServicesDevelopment";
import CarouselDevelopmentMobile from "../components/CarouselDevelopmentMobile";

//files data
import values from "../components/Data/values";


const Development = () => {
    return (
        <div>
            <Head>
                <title> Development Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="development-header">
            <HeaderDevelopment/>
            </header>

            {/*values/divider*/}
            <section className="values-section-development">
                <Value value={values["development"]["projectmanagement"]}/>
            </section>

            {/*vision_list*/}
            <section className="vision-section">
                <VisionDevelopment/>
            </section>

            {/*ServicesList with image and description*/}
            <section className="services-section">
                <ServicesDevelopment/>
            </section>

            {/*values/divider*/}
            <section className="values-section-development">
                <Value value={values["development"]["leistungen_development"]}/>
            </section>


            {/*customers*/}
            <section className="customers-section">
              <CarouselDevelopment/>
              <CarouselDevelopmentMobile/>
            </section>

            {/*form contact*/}
            <section className="contact-form-section-development" id="contact-form-development">
            <ContactDevelopment/>
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
              //carousel customers         
             .customers-section {
              background: #364d79;
            }                    
               
            `}</style>
        </div>
    )
}

export default Development
