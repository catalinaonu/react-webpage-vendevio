import React from "react";

//next
import Head from "next/head";
import Link from "next/link";

//antd
import {Button, Card, Col, Row} from 'antd';
import {Carousel} from 'antd';

// components
import Footer from "../components/Footer";
import WelcomeMessage from "../components/WelcomeMessage";
import Value from "../components/Value";
import CarouselDevelopment from "../components/CarouselDevelopment";
import ContactDevelopment from "../components/ContactDevelopment";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import VisionDevelopment from "../components/VisionDevelopment";
import ServicesDevelopment from "../components/ServicesDevelopment";
import CarouselDevelopmentMobile from "../components/CarouselDevelopmentMobile";

//files data
import welcomeMessage from "../components/Data/welcome_info";
import values from "../components/Data/values";


const Development = () => {
    return (
        <div>
            <Head>
                <title> Development Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="development-header">
                <div className="header-img">

                    <div className="navbar-container">
                        {/*navbar desktop*/}
                        <div className="top-navbar">
                            <NavbarDesktop/>
                        </div>

                        {/*navbar mobile*/}
                        <div className="drawer-navbar">
                            <NavbarMobile/>
                        </div>
                    </div>

                    {/*message header*/}
                    <section className="welcome-messages">
                        <div className="welcome-messages-development">
                            <div className="welcome-message-development">
                                <WelcomeMessage welcomeMessage={welcomeMessage["development_page"]}/>
                            </div>

                            {/*link to contact form*/}
                            <div className="link-contact-form-development">
                                <Link href="#contact-form-development">
                                    <a title="Development Page"><Button ghost size="large">jetzt bewerben</Button></a>
                                </Link>
                            </div>
                        </div>

                    </section>
                </div>
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
        .header-img {
             display: flex;
             flex-direction: column;
             flex-flow: flex-direction;
             max-width: 100%;
             height: 100vh;
             //center the background img
             background-position: center center;
             background-repeat: no-repeat;
             background-size: cover;
             }
            
            @media only screen and (max-width: 600px) {
            .header-img{
             background:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/development_small.jpg'); 
             height: 30vh;
                        }
             }
            
             @media only screen and (min-width: 601px) {
             .header-img{
              background:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/development_large.jpg'); 
                         }
             }

                       
             .welcome-messages-development{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              align-content: center;
             }
             @media only screen and (max-width: 600px) {
              .welcome-messages-development{
               height: 20vh;
              }
             }
             @media only screen and (min-width: 601px) {
              .welcome-messages-development{
               height: 80vh;
              }
             }
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
