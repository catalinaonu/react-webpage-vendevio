import React from "react";

// next
import Head from "next/head";

// components
import Footer from "../components/Footer";
import Value from "../components/Value";
import Company from "../components/Company";
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
import {Row, Col, Carousel, Button} from 'antd';
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import WelcomeMessage from "../components/WelcomeMessage";
import welcomeMessage from "../components/Data/welcomeMessages";
import Link from "next/link";


function Ventures() {
    return (
        <div>
            <Head>
                <title> Ventures Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="ventures-header">
                <div className="header-img">
                    <NavbarDesktop/>
                    <NavbarMobile/>
                    <section className="welcome-messages-ventures">
                        <div className="welcome-message-ventures">
                            <WelcomeMessage welcomeMessage={welcomeMessage["ventures_page"]}/>
                        </div>
                        {/*link to contact form*/}
                        <div className="link-contact-form">
                            <Link href="#contact-form-ventures">
                                <a title="Ventures Page"><Button ghost size="large">JETZT BEWERBEN</Button></a>
                            </Link>
                        </div>
                    </section>
                </div>
            </header>
            <section className="values-section-ventures">
                <Value value={values["ventures"]["leistungen_venture"]}/>
            </section>
            <section className="vision-section-ventures">
                <Row gutter={[16, 32]} justify="center" >
                    <Col xs={{span: 24, offset: 0}} lg={{span: 5, offset: 1}}>
                        <Vision visionMessage={vision["ventures"]["technologiepartner"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 5, offset: 0}}>
                        <Vision visionMessage={vision["ventures"]["startup-mindset"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 5, offset: 0}}>
                        <Vision visionMessage={vision["ventures"]["flexibles_beteiligungsmodell"]}/>
                    </Col>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 5, offset: 0}}>
                        <Vision visionMessage={vision["ventures"]["gemeinsame_vision"]}/>
                    </Col>
                </Row>
            </section>
            <section className="services-section-ventures">
                <div className="cards wrapper">
                <Row gutter={[16, 32]} justify="center">
                    <Col xs={{span: 22, offset: 2}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["code-exzellenz"]}/>
                    </Col>
                    <Col xs={{span: 22, offset: 2}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["netzwerk"]}/>
                    </Col>
                    <Col xs={{span: 22, offset: 2}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["teile-des-teams"]}/>
                    </Col>
                    <Col xs={{span: 22, offset: 2}} lg={{span: 5, offset: 1}}>
                        <Service service={services["ventures"]["startup-konditionen"]}/>
                    </Col>
                </Row>
                </div>
            </section>
            <section className="customers-section-ventures">
                <div className="carousel-customers-ventures">
                    <Carousel autoplay style={{height: 300}}>
                        <Company company={companies["Alveri"]}/>
                        <Company company={companies["QuickSpeech"]}/>
                        <Company company={companies["Vereinsplaner"]}/>
                    </Carousel>
                </div>
            </section>
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
                           rgba(0, 0, 0, 0.6),
                           rgba(0, 0, 0, 0.6)
                           ), url('/ventures_large.jpg'); 
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
             //vision section
            .vision-section-ventures{
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
             background: var(--light-grey-background);
             margin: 24px auto;
             box-shadow:0 0 6px 3px var(--shadow-color);
            }  
            .carousel-customers-ventures {
             max-width: 60%;
             margin: 48px auto;
             background: var(--light-grey-background);
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
             .cards-wrapper {
             height: 300px;} 
            `}</style>
        </div>
    );
}

export default Ventures