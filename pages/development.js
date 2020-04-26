import React from "react";

//antd
import {Button, Card, Col, Row} from 'antd';
import {Carousel} from 'antd';

// components
import Footer from "../components/Footer";
import WelcomeMessage from "../components/WelcomeMessage";
import Value from "../components/Value";
import Vision from "../components/Vision";
import Company from "../components/Company";
import Service from "../components/Service";
import TeamMemberForm from "../components/TeamMemberForm";
import ContactFormDevelopment from "../components/ContactFormDevelopment";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

//files data
import welcomeMessage from "../components/Data/welcome_info";
import values from "../components/Data/values";
import vision from "../components/Data/vision_list";
import companies from "../components/Data/companies_info";
import services from "../components/Data/services_info";
import team from "../components/Data/team_info";
import Head from "next/head";
import VisionList from "../components/VisionList";
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
                        <div className="welcome-message-development">
                            <WelcomeMessage welcomeMessage={welcomeMessage["development_page"]}/>
                        </div>


                        {/*link to contact form*/}
                        <div className="link-contact-form">
                            <Link href="#contact-form-development">
                                <a title="Development Page"><Button ghost size="large">jetzt bewerben</Button></a>
                            </Link>
                        </div>
                    </section>
                </div>

            </header>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["development"]["projectmanagement"]}/>
            </section>


            {/*vision_list*/}

            <section className="vision-section">
                <div className="card-wrapper">
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={{span: 20, offset: 1}} lg={{span: 6, offset: 0}}>
                            <Vision visionMessage={vision["development"]["projektmanagement"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 6, offset: 0}}>
                            <Vision visionMessage={vision["development"]["innovative_denkansätze"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 6, offset: 0}}>
                            <Vision visionMessage={vision["development"]["software_entwicklung"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 6, offset: 0}}>
                            <Vision visionMessage={vision["development"]["zeitgemäße_technologien"]}/>
                        </Col>
                    </Row>
                </div>
            </section>


            {/*customers*/}
            <section className="customers-section">
                <Carousel autoplay>
                    <Company company={companies["Freebiebox"]}/>
                    <Company company={companies["Delta"]}/>
                    <Company company={companies["Seekyou"]}/>
                    <Company company={companies["LeadStudy"]}/>
                    <Company company={companies["PrimeCrowd"]}/>
                    <Company company={companies["Carployee"]}/>
                </Carousel>
            </section>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["development"]["leistungen_development"]}/>
            </section>

            <section className="services-section">
                <h1>SERVICES</h1>{/*ServicesList with image and description*/}
                <Service service={services["development"]["technische-konzeption"]}/>
                <Service service={services["development"]["technische_implementierung"]}/>
                <Service service={services["development"]["qualitätssicherung"]}/>
                <Service service={services["development"]["kundensupport"]}/>
            </section>

            {/*form contact*/}
            <section className="contact-form-section">
                <div id="contact-form-development">
                    <TeamMemberForm teamMember={team["Stefan"]}/>
                    <div>
                        <Card style={{width: 500}}>
                            <ContactFormDevelopment/>
                        </Card>

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
             
             //center the messages on the background img
             .welcome-messages{
              max-width: 50%;
              margin-left: 25%;
              margin-right: 25%;
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              align-content: center;
              justify-content: center;
             }
             
             .welcome-message-development {
              text-align: center;
              padding-bottom: 24px;
             }
             
                
            #contact-form-development {
             display: flex;
                         }
           
            `}</style>
        </div>
    )
}

export default Development