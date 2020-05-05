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

            <section className="vision-section-development">
                <div className="card-wrapper-vision-development">
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

            {/*ServicesList with image and description*/}
            <section className="services-section-development">
                <div className="card-wrapper-services-development">
                    <Row gutter={[16, 32]} justify="center">
                        <Col xs={{span: 20, offset: 1}} lg={{span: 5, offset: 1}}>
                            <Service service={services["development"]["technische-konzeption"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 5, offset: 1}}>
                            <Service service={services["development"]["technische_implementierung"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 5, offset: 1}}>
                            <Service service={services["development"]["qualitätssicherung"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 5, offset: 1}}>
                            <Service service={services["development"]["kundensupport"]}/>
                        </Col>
                    </Row>
                </div>
            </section>

            {/*values/divider*/}
            <section className="values-section-development">
                <Value value={values["development"]["leistungen_development"]}/>
            </section>


            {/*customers*/}
            <section className="customers-section-development">
                <div className="carousel-customers-development">
                    <Carousel autoplay>
                        <div><Company company={companies["Freebiebox"]}/></div>
                        <div><Company company={companies["Delta"]}/></div>
                        <div><Company company={companies["Seekyou"]}/></div>
                        <div><Company company={companies["LeadStudy"]}/></div>
                        <div><Company company={companies["PrimeCrowd"]}/></div>
                        <div><Company company={companies["Carployee"]}/></div>
                    </Carousel>
                </div>
            </section>


            {/*form contact*/}
            <section className="contact-form-section-develipment">
                <div id="contact-form-development">
                    <div className="team-member-development">
                        <TeamMemberForm teamMember={team["Stefan"]}/>
                    </div>
                    <div className="contact-form-development">
                        {/*<Card style={{width: 500}}>*/}
                        <ContactFormDevelopment/>
                        {/*</Card>*/}

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
             .card-wrapper-vision-development {
              max-width: 100%;
              margin: 24px auto;
              padding: 24px;
              background: #002766;
             }
             
             //center the vision list for desktop
             @media only screen and (min-width: 601px) {
              .card-wrapper-vision-development {
                max-width: 60%;        
                  }
              }              
          
              .card-wrapper-services-development {
               max-width: 100%;
               margin-left: 20%;
               margin:right: 20%;
                       
              }
              
               @media only screen and (min-width: 601px) {
                .card-wrapper-services-development {
                 margin: 48px auto;
                 max-width: 80%; 
                  }
               }
                             
            .carousel-customers-development {  
                                text-align: center;
                                height: 240px;
                                background: #364d79;
                                overflow: hidden;
                                max-width: 100%;
                                margin: 48px auto;
                                padding-bottom: 24px;
                                }
                                
            @media only screen and (min-width: 601px) {
             .carousel-customers-development {
              max-width: 60%;
              margin: 24px auto;
                 }
             }                   
       
            .carousel-customers-development 
             div {
               margin-left: 24px;
             }
                                
            .customers-section-development {
              background: #364d79;
            }                    
                
            // center the contact form                    
            #contact-form-development{
             display: flex;
             max-width: 100%;   
             }
                      
            //Prevent flexbox shrinking
            .contact-form-development {
             flex: 1;
             }
             
             .team-member-development {
             flex: 1;
             }

            @media only screen and (max-width: 600px) {
             #contact-form-development {
             flex-direction: column;
             flex-flow: flex-direction; 
             justify-content: center;
             align-items: center;
             align-content: center;
             margin:0 24px;
               }
            .contact-form-development {
             padding-top: 24px; 
             margin: 24px auto;
             }
            
             }
             
             @media only screen and (min-width: 601px) { 
              #contact-form-development{
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
    )
}

export default Development
