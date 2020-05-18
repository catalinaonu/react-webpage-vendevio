import React from "react";

//next
import Head from "next/head";
import Link from "next/link";

//antd
import {Row, Col, Button} from "antd";

// components
import Footer from "../components/Footer";
import Value from "../components/Value";
import ListOfJobs from "../components/ListOfJobs";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
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
                <div className="header-img">
                    <NavbarDesktop/>
                    <NavbarMobile/>
                    <Link href="#list-of-jobs">
                        <div className="jobs-link">
                            <a title="Jobs Page"> <Button ghost size="large">AKTUELLE STELLEN</Button></a>
                        </div>
                    </Link>
                </div>
            </header>
            <section className="values-section-jobs">
                <Value value={values["job"]["chance"]}/>
            </section>
            <section className="services-section-jobs">
                <Row gutter={[16, 32]} justify="center">
                    <Col justify="center" align="middle" xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Service service={services["jobs"]["coding"]}/>
                    </Col>
                    <Col justify="center" align="middle" xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Service service={services["jobs"]["team-and-remote"]}/>
                    </Col>
                    <Col justify="center" align="middle" xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Service service={services["jobs"]["gründe-neue-ventures"]}/>
                    </Col>
                    <Col justify="center" align="middle" xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                        <Service service={services["jobs"]["offene-unternehmeskultur"]}/>
                    </Col>
                </Row>
            </section>
            <section className="values-section-jobs" id="list-of-jobs">
                <Value value={values["job"]["join-vendevio"]}/>
            </section>
            <section className="jobs-section" >
                <ListOfJobs/>
            </section>
            <section className="values-section">
                <Value value={values["job"]["meet-us"]}/>
            </section>
            <section className="vendevio-map">
                <img src="/map.jpg"/>
            </section>
            <Footer/>
            <style jsx>{`
             .header-img {
              background-image:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/jobs_large.jpg');
             }
             @media only screen and (max-width: 600px) {
             .header-img{
              background:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/jobs_small.jpg'); 
              height: 30vh;
                        }
             }
             //center the link button of the header
            .jobs-link {
             display: flex;
             flex-direction: row;
             justify-content: flex-end;
             align-items: flex-end;
             align-content: flex-end;
             height: 100vh;
            }
            @media only screen and (max-width: 600px) {
             .jobs-link {
              padding-bottom: 24px;
              padding-right: 24px;
             }
            }
            @media only screen and (min-width: 601px) {
             .jobs-link {
              padding-bottom: 100px;
              padding-right: 100px;
               }
             } 
              //services-section
            .services-section-jobs{
              max-width: 80%;
              margin: 48px auto; 
            }
            .jobs-section {
             max-width: 80%;
             margin: 0px auto;
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