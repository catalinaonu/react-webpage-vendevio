import React from "react";
//antd
import {Col, Row} from "antd";
//components
import Vision from "./Vision";
//data files
import vision from "./Data/vision_list";

const VisionDevelopment =() => (
<div className="card-wrapper-vision-development">
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
    <style jsx>{`
     .card-wrapper-vision-development {
      max-width: 100%;
      padding: 48px;
      margin: 0px auto;
      }
    `}</style>
</div>
)

export default VisionDevelopment
