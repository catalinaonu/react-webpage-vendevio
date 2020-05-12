import React from "react";

//next
import Head from "next/head";

//components
import Footer from "../components/Footer";
import Service from "../components/Service";
import Value from "../components/Value";
import PhotoGrid from "../components/PhotoGrid";
import TeamMemberForm from "../components/TeamMemberForm";
import HeaderTeam from "../components/HeaderTeam";

//files with data
import values from "../components/Data/values";
import services from "../components/Data/infoServices";
import team from "../components/Data/infoTeam";

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
                <HeaderTeam/>
            </header>

            {/*values/divider*/}
            <section className="values-section-team">
                <Value value={values["team"]["unsere-werte"]}/>
            </section>

            {/* services with photo and description*/}
            <section className="services-section-team">
                <Row gutter={[16, 32]} justify="center">
                    <Col xs={{span: 18, offset: 6}} lg={{span: 6, offset: 2}}>
                        <Service service={services["team"]["coding_it_the_right_way"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 6, offset: 2}}>
                        <Service service={services["team"]["love_what_you_do"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 6, offset: 2}}>
                        <Service service={services["team"]["never_stop_innovating"]}/>
                    </Col>
                </Row>
            </section>

            {/*values/divider*/}
            <section className="values-section-team">
                <Value value={values["team"]["unsere-helden"]}/>
            </section>

            {/*Photos of the entire team*/}
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
                <PhotoGrid/>
            </section>

            <Footer/>
            <style jsx>{`
             //services-section
            .services-section-team{
             max-width: 80%;
             margin: 48px auto; 
            }
             //team section
            .card-wrapper-managers{
             width: 100%;
             margin: 24px auto;
            }
            @media only screen and (min-width: 600px) {
             .card-wrapper-managers {
              max-width: 50%;  
             }
            }
          `}</style>
        </div>
    )
}

export default Team