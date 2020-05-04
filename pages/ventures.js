import React from "react";

//antd
import {Row, Col, Slider, Card} from 'antd';
import {Carousel} from 'antd';
import {Button} from 'antd';

// next
import Head from "next/head";
import Link from "next/link";

// components
import Footer from "../components/Footer";
import ServicesVentures from "../components/ServicesVentures";
import Company from "../components/Company";
import VisionVentures from "../components/VisionVentures";
import Value from "../components/Value";
import WelcomeMessage from "../components/WelcomeMessage";
import TeamMemberForm from "../components/TeamMemberForm";
import ContactFormVentures from "../components/ContactFormVentues";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import CarouselVentures from "../components/CarouselVentures";

// files data
import companies from "../components/Data/companies_info";
import values from "../components/Data/values";
import team from "../components/Data/team_info";
import welcomeMessage from "../components/Data/welcome_info";


function Ventures() {
    return (
        <div>
            <Head>
                <title> Ventures Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="ventures-header">
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

                        <div className="welcome-messages-ventures">
                            <div className="welcome-message-ventures">
                                <WelcomeMessage welcomeMessage={welcomeMessage["ventures_page"]}/>
                            </div>

                            {/*link to contact form*/}
                            <div className="link-contact-form">
                                <Link href="#contact-form-ventures">
                                    <a title="Ventures Page"><Button ghost size="large">JETZT BEWERBEN</Button></a>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
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
            </section>

            {/*contact form*/}
            <section className="contact-form-section">
                <div id="contact-form-ventures">
                    <div className="team-member">
                        <TeamMemberForm teamMember={team["Kambis"]}/>
                    </div>
                    <div className="contact-form">
                        <ContactFormVentures/>
                    </div>
                </div>
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
                           rgba(0, 0, 0, 0.6),
                           rgba(0, 0, 0, 0.6)
                           ), url('/ventures_small.jpg'); 
             height: 30vh;
                        }
             }
            
             @media only screen and (min-width: 601px) {
             .header-img{
              background:  linear-gradient(
                           rgba(0, 0, 0, 0.6),
                           rgba(0, 0, 0, 0.6)
                           ), url('/ventures_large.jpg'); 
                         }
             }
                                  
             //center the messages on the background img
             .welcome-messages-ventures{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              align-content: center;
             }
             @media only screen and (max-width: 600px) {
              .welcome-messages-ventures{
               height: 20vh;
              }
             }
             @media only screen and (min-width: 601px) {
              .welcome-messages-ventures{
               height: 80vh;
              }
             }
             //style the vision list
            .vision-section{
             margin: 48px auto;
             background: #002766;
            }
            @media only screen and (min-width: 601px) {
             .vision-section{
              max-width: 60%;
             }
            }
            .services-section {
             max-width: 80%; 
             margin: 48px auto;  
            } 
            .customers-section {
             background: #002766;
             margin: 0px auto;
            }    
         
            //
            //
            //
            // .carousel-customers {  
            //                     text-align: center;
            //                     height: 400px;
            //                     background: #364d79;
            //                     overflow: hidden;
            //                     max-width: 100%;
            //                     margin: 48px auto;
            //                     padding-bottom: 24px;
            //                     }
            //
            // @media only screen and (min-width: 601px) {
            //  .carousel-customers {
            //   max-width: 60%;
            //   margin: 24px auto;
            //      }
            //  }                   
            //
            // .carousel-customers 
            //  div {
            //    margin-left: 24px;
            //  }
            //
            // .customers-section {
            //   background: #364d79;
            // }                    
                
            // center the contact form                    
            #contact-form-ventures{
             display: flex;
             max-width: 100%;   
             }
                      
            //Prevent flexbox shrinking
            .contact-form {
             flex: 1;
             }
             
             .team-member {
             flex: 1;
             }

            @media only screen and (max-width: 600px) {
             #contact-form-ventures {
              flex-direction: column;
              flex-flow: flex-direction; 
              justify-content: center;
              align-items: center;
              align-content: center;
              margin: 0 24px;
              
            }
            .contact-form {
             padding-top: 24px; 
             }
            
             }
             
             @media only screen and (min-width: 601px) { 
              #contact-form-ventures {
              flex-direction: row;
              max-width: 50%;
              margin: 48px auto;
              flex-flow: flex-direction; 
              justify-content: space-between;
              align-items: center;
               }
             }
            
            
             
            
            `}</style>
        </div>
    );
}

export default Ventures