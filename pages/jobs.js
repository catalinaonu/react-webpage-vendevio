import React from "react";

//next
import Head from "next/head";

//antd
import {Divider, Row, Col} from "antd";

// components
import Footer from "../components/Footer";
import Value from "../components/Value";
import ListOfJobs from "../components/ListOfJobs";
import HeaderJobs from "../components/HeaderJobs";
import Service from "../components/Service";

// files with data
import values from "../components/Data/values";
import services from "../components/Data/infoServices";

function Jobs() {
    return (
        <div>
            <Head>
                <title> Jobs Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="jobs-header">
                <HeaderJobs/>
            </header>

            {/* values/divider*/}
            <section className="values-section-jobs">
                <Value value={values["job"]["chance"]}/>
            </section>

            {/*services*/}
            <section className="services-section-jobs">
                <Row gutter={[16, 32]} justify="center">
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["jobs"]["coding"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["jobs"]["team-and-remote"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["jobs"]["gründe-neue-ventures"]}/>
                    </Col>
                    <Col xs={{span: 18, offset: 6}} lg={{span: 5, offset: 1}}>
                        <Service service={services["jobs"]["offene-unternehmeskultur"]}/>
                    </Col>

                </Row>
            </section>

            {/* values/divider*/}
            <section className="values-section-jobs">
                <Value value={values["job"]["join-vendevio"]}/>
            </section>

            {/*List of jobs*/}
            <section className="jobs-section" id="list-of-jobs">
                <Divider plain style={{fontSize: 32, color: '#FFFFFF'}}>
                    AKTUELLE STELLEN
                </Divider>
                <ListOfJobs/>
                <Divider/>
            </section>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["job"]["meet-us"]}/>
            </section>

            {/*map image*/}
            <section className="vendevio-map">
                <img src="/map.jpg"/>
            </section>

            <Footer/>
            <style jsx>{`
            .jobs-section{
              background: #002766;
            }
             //services-section
            .services-section-jobs{
              max-width: 80%;
              margin: 48px auto; 
            }
            .vendevio-map {
             max-width: 100%;
             margin: 48px auto;
             display: flex;
             justify-content: center;
            }  
            @media only screen and (max-width: 600px) {
             img{
              max-width: 80%;
              height: auto;
             }
            } 
          `}</style>
        </div>
    )
}

export default Jobs