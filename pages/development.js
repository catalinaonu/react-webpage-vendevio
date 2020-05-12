import React from "react";

//next
import Head from "next/head";

// components
import Footer from "../components/Footer";
import HeaderDevelopment from "../components/HeaderDevelopment";
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
import {Carousel, Col, Row} from "antd";

import companies from "../components/Data/infoCompanies";

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

            {/*ServicesList with image and description*/}
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

            {/*values/divider*/}
            <section className="values-section-development">
                <Value value={values["development"]["leistungen_development"]}/>
            </section>

            {/*customers*/}
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

            {/*form contact*/}
            <section className="contact-development">
                <div className="team-member-development">
                    <TeamMemberForm teamMember={team["Stefan"]}/>
                </div>
                <div className="contact-form-development">
                    <ContactFormDevelopment/>
                </div>
            </section>
            <Footer/>
            <style jsx>{`
              //vision section
             .vision-section-development{
              background: #002766;
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
              background: #364d79;
              margin: 48px auto;
             }  
             .carousel-customers-development {
              max-width: 60%;
              margin: 0px auto;
              background: #364d79;
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
