import React from "react";
//antd
import {Col, Row} from "antd";
//components
import Service from "./Service";
//data files
import services from "./Data/services_info";

const ServicesDevelopment = () => (
    <div className="card-wrapper-services-development">
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
        <style jsx>{`
         .card-wrapper-services-development {
          max-width: 100%;
          margin: 48px auto;   
         }
         @media only screen and (min-width: 601px) {
          .card-wrapper-services-development {
           max-width: 80%;
          } 
         }
        `}</style>
    </div>
)

export default ServicesDevelopment