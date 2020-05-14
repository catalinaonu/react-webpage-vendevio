import React from "react";

//next
import Head from "next/head";

//components
import Footer from "../components/Footer";
import Service from "../components/Service";
import Value from "../components/Value";
import PhotoGrid from "../components/PhotoGrid";
import TeamMemberForm from "../components/TeamMemberForm";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import WelcomeMessage from "../components/WelcomeMessage";


//files with data
import values from "../components/Data/values";
import services from "../components/Data/infoServices";
import team from "../components/Data/infoTeam";
import welcomeMessage from "../components/Data/welcomeMessages";

//antd
import {Col, Row} from "antd";


function Team() {
    return (
        <div>
            <Head>
                <title> Team Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="team-header">
                <div className="header-img">
                    <NavbarDesktop/>
                    <NavbarMobile/>
                    <section className="welcome-messages-team">
                        <WelcomeMessage welcomeMessage={welcomeMessage["team_page"]}/>
                    </section>
                </div>
            </header>
            <section className="values-section-team">
                <Value value={values["team"]["unsere-werte"]}/>
            </section>
            <section className="services-section-team">
                <Row gutter={[16, 32]} justify="center">
                    <Col xs={{span: 22, offset: 2}} lg={{span: 6, offset: 2}}>
                        <Service service={services["team"]["coding_it_the_right_way"]}/>
                    </Col>
                    <Col xs={{span: 22, offset: 2}} lg={{span: 6, offset: 2}}>
                        <Service service={services["team"]["love_what_you_do"]}/>
                    </Col>
                    <Col xs={{span: 22, offset: 2}} lg={{span: 6, offset: 2}}>
                        <Service service={services["team"]["never_stop_innovating"]}/>
                    </Col>
                </Row>
            </section>
            <section className="values-section-team">
                <Value value={values["team"]["unsere-helden"]}/>
            </section>
            <section className="team-section">
                <div className="card-wrapper-managers">
                    <Row gutter={[16, 32]} justify="center">
                        <Col xs={{span: 18, offset: 6}} lg={{span: 7, offset: 1}}>
                            <TeamMemberForm teamMember={team["Stefan"]}/>
                        </Col>
                        <Col xs={{span: 18, offset: 6}} lg={{span: 7, offset: 1}}>
                            <TeamMemberForm teamMember={team["Hannes"]}/>
                        </Col>
                        <Col xs={{span: 18, offset: 6}} lg={{span: 7, offset: 1}}>
                            <TeamMemberForm teamMember={team["Kambis"]}/>
                        </Col>
                    </Row>
                </div>
                <div className="card-wrapper-team">
                    <PhotoGrid/>
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
              background-position: center;
              background-repeat: no-repeat;
              background-size: 100%;
              background-image:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/team_large.jpg'); 
             }
            @media only screen and (max-width: 600px) {
            .header-img{
             background-image:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/team_small.jpg'); 
             height: 30vh;
                        }
             }        
             //services-section
            .services-section-team{
             max-width: 80%;
             margin: 48px auto; 
            }
            //  //team section
            // .team-section{
            //  width: 100%;
            //  margin: 24px auto;
            // }
            @media only screen and (min-width: 600px) {
             .card-wrapper-managers {
              max-width: 50%;  
              margin: 48px auto;
             }
            }
           `}</style>
        </div>
    )
}

export default Team