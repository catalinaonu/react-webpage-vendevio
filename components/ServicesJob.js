import React from "react";
//components
import Service from "./Service";
//files
import services from "./Data/services_info";

//antd
import {Row, Col} from "antd";


const ServicesJobs = () => (
    <div className="card-wrapper-services-job">
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
        <style jsx>{`
      .card-wrapper-services-job {
       max-width: 100%;
       margin: 48px auto; 
      }
      @media only screen and (min-width: 601px) {
       .card-wrapper-services-job {
        max-width: 80%;
       } 
      }
 
    `}</style>
    </div>
)

export default ServicesJobs