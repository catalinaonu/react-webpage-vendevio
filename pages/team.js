import React from "react";

//next
import Head from "next/head";

//components
import Footer from "../components/Footer";
import Service from "../components/Service";
import TeamList from "../components/TeamList";
import Value from "../components/Value";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import PhotoGrid from "../components/PhotoGrid";

//files with data
import services from "../components/Data/services_info";
import values from "../components/Data/values";
import WelcomeMessage from "../components/WelcomeMessage";
import welcomeMessage from "../components/Data/welcome_info";
import {Col, Row} from "antd";
import TeamMemberForm from "../components/TeamMemberForm";
import team from "../components/Data/team_info";

function Team() {
    return (
        <div>
            <Head>
                <title> Team Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="team-header">
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

                    <section className="welcome-messages">
                        <div className="welcome-message-team">
                            <WelcomeMessage welcomeMessage={welcomeMessage["team_page"]}/>
                        </div>
                    </section>

                </div>
            </header>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["team"]["unsere-werte"]}/>
            </section>

            {/* services with photo and description*/}
            <section className="services-section-team">
                <div className="card-wrapper-services-team">
                    <Row gutter={[16, 32]} justify="center">
                        <Col xs={{span: 20, offset: 1}} lg={{span: 6, offset: 2}}>
                            <Service service={services["team"]["coding_it_the_right_way"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 6, offset: 2}}>
                            <Service service={services["team"]["love_what_you_do"]}/>
                        </Col>
                        <Col xs={{span: 20, offset: 1}} lg={{span: 6, offset: 2}}>
                            <Service service={services["team"]["never_stop_innovating"]}/>
                        </Col>
                    </Row>
                </div>
            </section>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["team"]["unsere-helden"]}/>
            </section>

            {/*Photos of the entire team*/}
            <section className="team-section">
                <div className="team">
                    <div className="card-wrapper-managers">
                        <Row gutter={[16, 32]} justify="center">
                            <Col xs={{span: 20, offset: 1}} lg={{span: 8, offset: 0}}>
                                <TeamMemberForm teamMember={team["Stefan"]}/>
                            </Col>
                            <Col xs={{span: 20, offset: 1}} lg={{span: 8, offset: 0}}>
                                <TeamMemberForm teamMember={team["Hannes"]}/>
                            </Col>
                            <Col xs={{span: 20, offset: 1}} lg={{span: 8, offset: 0}}>
                                <TeamMemberForm teamMember={team["Kambis"]}/>
                            </Col>
                        </Row>
                    </div>
                    <div className="rest-of-the-team">
                        <PhotoGrid/>
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
                           ), url('/team_small.jpg'); 
             height: 30vh;
                        }
             }
            
             @media only screen and (min-width: 601px) {
             .header-img{
              background:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/team_large.jpg'); 
                         }
             }
                  
             //image box
             .card-wrapper-services-team {
               max-width: 100%;
               margin-right: 20%;
               margin-left: 20%;
               
              }
              
             @media only screen and (min-width: 601px) {
              .card-wrapper-services-team {
                margin:0px auto;
                max-width: 60%;  
                  }
             }
               
            .team{
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
             align-content: center;
             max-width: 100%;
             margin: 0px auto;   
            
             }
            
                       
            @media only screen and (max-width: 601px) {
            .card-wrapper-team {
             margin:0px auto;
             max-width: 60%;  
                  }
            }
                             
          
         
            `}

            </style>
        </div>
    )
}

export default Team