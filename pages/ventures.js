import React from "react";

// next
import Head from "next/head";

// components
import Footer from "../components/Footer";
import Value from "../components/Value";
import Company from "../components/Company";
import HeaderVentures from "../components/HeaderVentures";
import TeamMemberForm from "../components/TeamMemberForm";
import ContactFormVentures from "../components/ContactFormVentues";
import Vision from "../components/Vision";
import Service from "../components/Service";

// files data
import values from "../components/Data/values";
import vision from "../components/Data/vision"
import team from "../components/Data/infoTeam";
import services from "../components/Data/infoServices";
import companies from "../components/Data/infoCompanies";

//antd
import {Row, Col, Carousel} from 'antd';


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
            <section className="values-section-ventures">
                <Value value={values["ventures"]["leistungen_venture"]}/>
            </section>

            {/*vision*/}
            <section className="vision-section-ventures">
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["ventures"]["technologiepartner"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["ventures"]["startup-mindset"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["ventures"]["flexibles_beteiligungsmodell"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Vision visionMessage={vision["ventures"]["gemeinsame_vision"]}/>
                    </Col>
                </Row>
            </section>

            {/*services*/}
            <section className="services-section-ventures">
                <Row gutter={[16, 32]} justify="center">
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["code-exzellenz"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["netzwerk"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["teile-des-teams"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["startup-konditionen"]}/>
                    </Col>
                </Row>
            </section>

            {/*Customers*/}
            <section className="customers-section-ventures">
                <div className="carousel-customers-ventures" style={{height: 300}}>
                    <Carousel autoplay>
                        <Company company={companies["Alveri"]}/>
                        <Company company={companies["QuickSpeech"]}/>
                        <Company company={companies["Vereinsplaner"]}/>
                    </Carousel>
                    </div>
            </section>

            {/*contact form*/}
            <section className="contact-ventures">
                <div className="team-member-ventures">
                    <TeamMemberForm teamMember={team["Kambis"]}/>
                </div>
                <div className="contact-form-ventures">
                    <ContactFormVentures/>
                </div>
            </section>


            <Footer/>
            <style jsx>{`
             //vision section
            .vision-section-ventures{
             background: #002766;
             max-width: 100%;
             margin: 0px auto;
             padding: 48px;
            }
            @media only screen and (min-width: 601px) {
             .vision-section-ventures{
              max-width: 80%;
             }
            }
             //services section
            .services-section-ventures{
             max-width: 80%;
             margin: 48px auto; 
            }
             //customers section
            .customers-section-ventures {
             background:  #364d79;
             margin: 48px auto;
            }  
            .carousel-customers-ventures {
             max-width: 60%;
             margin: 24px auto;
             background: #364d79;
            }
            @media only screen and (max-width: 600px) {
             .carousel-customers-ventures {
              display: none;
             }
            } 
            
            //contact section
             .contact-ventures{
              max-width: 100%;  
              margin: 48px auto;
              display: flex;
             } 
              //Prevent flexbox shrinking
             .team-member-ventures {
              flex: 1;
             }
             .contact-form-ventures {
              flex: 2;
              margin-top: 48px;
             }
             @media only screen and (max-width: 600px) {
              .contact-ventures {
               flex-direction: column;
               flex-flow: flex-direction; 
               justify-content: center;
               align-items: center;
               align-content: center;
               }
             }
             @media only screen and (min-width: 601px) { 
              .contact-ventures {
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
    );
}

export default Ventures