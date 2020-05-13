import React from "react";

//next
import Head from "next/head";

// components
import Footer from "../components/Footer";
import Value from "../components/Value";
import Company from "../components/Company";
import TeamMemberForm from "../components/TeamMemberForm";
import ContactFormDevelopment from "../components/ContactFormDevelopment";
import Vision from "../components/Vision";
import Service from "../components/Service";

//files data
import values from "../components/Data/values";
import team from "../components/Data/infoTeam";
import vision from "../components/Data/vision";
import services from "../components/Data/infoServices";

//antd
import {Button, Carousel, Col, Row} from "antd";

import companies from "../components/Data/infoCompanies";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import WelcomeMessage from "../components/WelcomeMessage";
import welcomeMessage from "../components/Data/welcomeMessages";
import Link from "next/link";

const Development = () => {
    return (
        <div>
            <Head>
                <title> Development Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header id="development-header">
                <div className="header-img">
                    <NavbarDesktop/>
                    <NavbarMobile/>
                    <section className="welcome-messages">
                        <div className="welcome-messages-development">
                            <div className="welcome-message-development">
                                <WelcomeMessage welcomeMessage={welcomeMessage["development_page"]}/>
                            </div>
                            {/*link to contact form*/}
                            <div className="link-contact-form-development">
                                <Link href="#contact-form-development">
                                    <a title="Development Page">
                                        <Button ghost size="large">jetzt bewerben</Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </header>
            <section className="values-section-development">
                <Value value={values["development"]["projectmanagement"]}/>
            </section>
            <section className="vision-section-development">
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["development"]["projektmanagement"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["development"]["innovative_denkansätze"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["development"]["software_entwicklung"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["development"]["zeitgemäße_technologien"]}/>
                    </Col>
                </Row>
            </section>
            <section className="services-section-development">
                <Row gutter={[16, 32]} justify="center">
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["development"]["technische-konzeption"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["development"]["technische_implementierung"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["development"]["qualitätssicherung"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["development"]["kundensupport"]}/>
                    </Col>
                </Row>
            </section>
            <section className="values-section-development">
                <Value value={values["development"]["leistungen_development"]}/>
            </section>
            <section className="customers-section-development">
                <div className="carousel-customers-development">
                    <Carousel autoplay>
                        <Company company={companies["Freebiebox"]}/>
                        <Company company={companies["Delta"]}/>
                        <Company company={companies["Seekyou"]}/>
                        <Company company={companies["LeadStudy"]}/>
                        <Company company={companies["PrimeCrowd"]}/>
                        <Company company={companies["Carployee"]}/>
                    </Carousel>
                </div>
            </section>
            <section className="contact-development" id="contact-form-development">
                <div className="team-member-development">
                    <TeamMemberForm teamMember={team["Stefan"]}/>
                </div>
                <div className="contact-form-development" >
                    <ContactFormDevelopment/>
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
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              background-image:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/development_large.jpg'); 
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
              //vision section
             .vision-section-development{
              background: var(--dark-blue-background);
              max-width: 100%;
              margin: 0px auto;
              padding: 48px;
             }
             @media only screen and (min-width: 601px) {
              .vision-section-development{
               max-width: 80%;
              }
             }   
              //services section
             .services-section-development{
              max-width: 80%;
              margin: 48px auto; 
             }
              //customers section        
             .customers-section-development {
              background: var(--light-blue-background);
              margin: 48px auto;
             }  
             .carousel-customers-development {
              max-width: 60%;
              margin: 0px auto;
              background: var(--carousel-background);
             }
             @media only screen and (max-width: 600px) {
              .carousel-customers-development {
               display: none;
              }
             }  
               //contact section
             .contact-development{
              max-width: 100%;  
              margin: 48px auto;
              display: flex;
             } 
              //Prevent flexbox shrinking
             .team-member-development {
              flex: 1;
             }
             .contact-form-development {
              flex: 2;
              margin-top: 48px;
             }
             @media only screen and (max-width: 600px) {
              .contact-development {
               flex-direction: column;
               flex-flow: flex-direction; 
               justify-content: center;
               align-items: center;
               align-content: center;
              }
             }
             @media only screen and (min-width: 601px) { 
              .contact-development {
               max-width: 60%;
               flex-direction: row;
               flex-flow: flex-direction; 
               justify-content: center;
               align-items: center;
               align-content: center;
              }
             }                
            `}</style>
        </div>
    )
}

export default Development
