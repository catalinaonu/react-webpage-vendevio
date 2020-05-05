import React from "react";

//components
import Service from "./Service";

//files
import services from "./Data/services_info";

//antd
import {Col, Row} from "antd";

const ServicesTeam = () => (
    <div className="card-wrapper-services-team">
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
        <style jsx>{`
        .card-wrapper-services-team {
         max-width: 100%;
         margin: 0px auto;
        }
        @media only screen and (min-width: 601px) {
         .card-wrapper-services-team {
          max-width: 60%;  
          margin: 0px auto;
         }
        }
      `}</style>
    </div>
)

export default ServicesTeam